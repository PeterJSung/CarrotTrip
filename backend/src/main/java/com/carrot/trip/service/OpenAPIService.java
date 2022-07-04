package com.carrot.trip.service;

import com.carrot.trip.common.PearsonUtil;
import com.carrot.trip.dto.LocationOpenApiResponseDTO;
import com.carrot.trip.entity.Evaluation;
import com.carrot.trip.repository.EvaluationRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationConfig;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.converter.FormHttpMessageConverter;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.awt.*;
import java.io.UnsupportedEncodingException;
import java.lang.reflect.Array;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class OpenAPIService {

    private final EvaluationRepository evaluationRepository;

    @Value("${openapi.secretkey}")
    private  String secretKey;

    public LocationOpenApiResponseDTO openAPICall(Double x, Double y, String nickname) throws URISyntaxException, JsonProcessingException {
        RestTemplate restTemplate = new RestTemplate();

        String url = "http://api.visitkorea.or.kr/openapi/service/rest/KorService/locationBasedList?ServiceKey=" + secretKey + "&mapX=" + x + "&mapY=" + y + "&radius=5000&listYN=Y&arrange=A&MobileOS=ETC&MobileApp=carrotTravel&_type=json&numOfRows=100&pageNo=1";//x: 127.1625892, y:37.4587305, 5km
        URI uri = new URI(url);

        HttpEntity<String> response = restTemplate.getForEntity(uri, String.class);
        System.out.println(response.getBody());
        // Response Body 파싱
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.configure(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT, true);
        LocationOpenApiResponseDTO dto =  objectMapper.readValue(response.getBody(), LocationOpenApiResponseDTO.class);
        recommendScore(dto, nickname);

        return dto;
    }

    public void recommendScore(LocationOpenApiResponseDTO dto, String nickname) {
        ArrayList<Evaluation> targetUser = evaluationRepository.findByMemberNickname(nickname);
        ArrayList<Long> targetUserContentIDs = new ArrayList<>(); // 추천대상 사용자가 평가한 모든 리스트를 가져온다
        HashMap<Long, Double> targetUserScoreMap = new HashMap<>();
        for (int i = 0; i < targetUser.size(); i++) {
            targetUserContentIDs.add(targetUser.get(i).getApiId());
            targetUserScoreMap.put(targetUser.get(i).getApiId(), targetUser.get(i).getScore());
        }

        for(int i = 0; i < dto.getResponse().getBody().getItems().getItem().size(); i++) {
            ArrayList<Evaluation> partiUsers = evaluationRepository.findByApiId(dto.getResponse().getBody().getItems().getItem().get(i).getContentid());
            double simmilarScore = -1000;
            double bestRecommendScore = 0;
            //ArrayList<Long> targetUserContentIDsAndTargetContentID = targetUserContentIDs;
            //targetUserContentIDsAndTargetContentID.add(dto.getResponse().getBody().getItems().getItem().get(i).getContentid());
            for(int j = 0; j < partiUsers.size(); j++){
                double candidateScore = partiUsers.get(j).getScore();
                List xScore = Arrays.asList();
                List yScore = Arrays.asList();
                if(!partiUsers.get(j).getMemberNickname().equals(nickname)){
                    ArrayList<Evaluation> partiUsersEvalData =
                            evaluationRepository.findByMemberNicknameAndApiIdIn(partiUsers.get(j).getMemberNickname(), targetUserContentIDs); //특정참가자에 대한 평가 리스트를 가져온다
                    for(int k = 0; k < partiUsersEvalData.size(); k++){
                        HashMap<Long, Double> partiUserScoreMap = new HashMap<>();
                        partiUserScoreMap.put(partiUsersEvalData.get(k).getApiId(), partiUsersEvalData.get(k).getScore());
                        xScore.add(targetUserScoreMap.get(partiUsersEvalData.get(k).getApiId()));
                        yScore.add(partiUsersEvalData.get(k).getScore());
                    }
                    double res = PearsonUtil.getPearsonCorrelationScore(xScore, yScore);
                    if (simmilarScore < res) {
                        bestRecommendScore = candidateScore;
                    }
                    System.out.println("** " + nickname + " and " + partiUsers.get(j).getMemberNickname() + " : [유사도]" + res + ", [후보점수]" + candidateScore);
                }
            }

            //하나의 content id에 대한 예상평점(내부 for에서 최고평점)을 주입
            dto.getResponse().getBody().getItems().getItem().get(i).setRecommendScore(bestRecommendScore);
        }
    }

}
