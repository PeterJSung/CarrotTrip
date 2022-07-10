package com.carrot.trip.service;

import com.carrot.trip.common.PearsonUtil;
import com.carrot.trip.dto.EvaluationDTO;
import com.carrot.trip.dto.LocationOpenApiResponseDTO;
import com.carrot.trip.entity.Evaluation;
import com.carrot.trip.entity.Member;
import com.carrot.trip.repository.EvaluationRepository;
import com.carrot.trip.repository.MemberRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.util.bcel.classfile.ElementValue;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.*;
import java.util.List;
import java.util.Map.Entry;

@Slf4j
@Service
@RequiredArgsConstructor
public class OpenAPIService {

    private final EvaluationRepository evaluationRepository;
    private final MemberRepository memberRepository;
    private final EvaluationService evaluationService;

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

        supporter(dto);
        recommendScore(dto, nickname);
        recommendMBTI(dto);

        return dto;
    }

    public void supporter(LocationOpenApiResponseDTO dto) {
        Random random = new Random();
        for(int i = 0; i < dto.getResponse().getBody().getItems().getItem().size(); i++) { // 조회된 관광지 아이템들 순회
            Integer ran1 = random.nextInt((10 - 1) + 1) + 1;
            Integer ran2 = random.nextInt((10 - 1) + 1) + 1;
            Integer ran3 = random.nextInt((10 - 1) + 1) + 1;
            Integer ran4 = random.nextInt((10 - 1) + 1) + 1;

            evaluationService.createEvaluation(EvaluationDTO.builder()
                    .apiId(dto.getResponse().getBody().getItems().getItem().get(i).getContentid())
                    .memberNickname("태호")
                    .score(ran1)
                    .comments("좋아요~! " + ran1)
                    .build());
            System.out.println("[SUPPORTER] " + dto.getResponse().getBody().getItems().getItem().get(i).getContentid() + " 태호 : " + ran1);

            evaluationService.createEvaluation(EvaluationDTO.builder()
                    .apiId(dto.getResponse().getBody().getItems().getItem().get(i).getContentid())
                    .memberNickname("가현")
                    .score(ran2)
                    .comments("좋아요~! " + ran2)
                    .build());
            System.out.println("[SUPPORTER] " + dto.getResponse().getBody().getItems().getItem().get(i).getContentid() + " 가현 : " + ran2);

            evaluationService.createEvaluation(EvaluationDTO.builder()
                    .apiId(dto.getResponse().getBody().getItems().getItem().get(i).getContentid())
                    .memberNickname("영현")
                    .score(ran3)
                    .comments("좋아요~! " + ran3)
                    .build());
            System.out.println("[SUPPORTER] " + dto.getResponse().getBody().getItems().getItem().get(i).getContentid() + " 영현 : " + ran3);

            evaluationService.createEvaluation(EvaluationDTO.builder()
                    .apiId(dto.getResponse().getBody().getItems().getItem().get(i).getContentid())
                    .memberNickname("정민")
                    .score(ran4)
                    .comments("좋아요~! " + ran4)
                    .build());
            System.out.println("[SUPPORTER] " + dto.getResponse().getBody().getItems().getItem().get(i).getContentid() + " 정민 : " + ran4);
        }
    }

    public void recommendMBTI(LocationOpenApiResponseDTO dto) {
        for (int i = 0; i < dto.getResponse().getBody().getItems().getItem().size(); i++) {
            Map<String, Double> scoreSumByMBTI = new HashMap<String, Double>();
            Map<String, Double> scoreCntByMBTI = new HashMap<String, Double>();
            Map<String, Double> scoreAveByMBTI = new HashMap<String, Double>();

            ArrayList<Evaluation> partiUsers = evaluationRepository.findByApiId(dto.getResponse().getBody().getItems().getItem().get(i).getContentid());
            for(int j = 0; j < partiUsers.size(); j++){
                Member partiMBTI = memberRepository.findByNickname(partiUsers.get(j).getMemberNickname()).orElseThrow(() -> new IllegalArgumentException("가입되지 않은 닉네임 입니다."));
                Evaluation partiScore = evaluationRepository.findByMemberNicknameAndApiId(partiUsers.get(j).getMemberNickname(), dto.getResponse().getBody().getItems().getItem().get(i).getContentid());

                if (scoreSumByMBTI.get(partiMBTI.getMbti()) == null){
                    scoreSumByMBTI.put(partiMBTI.getMbti(), partiScore.getScore());
                    scoreCntByMBTI.put(partiMBTI.getMbti(), 1.0);
                }
                else {
                    scoreSumByMBTI.put(partiMBTI.getMbti(), scoreSumByMBTI.get(partiMBTI.getMbti()) + partiScore.getScore());
                    scoreCntByMBTI.put(partiMBTI.getMbti(), scoreCntByMBTI.get(partiMBTI.getMbti()) + 1.0);
                }
            }
            for (Map.Entry<String, Double> entry : scoreSumByMBTI.entrySet()) {
                scoreAveByMBTI.put(entry.getKey(), entry.getValue() / scoreCntByMBTI.get(entry.getKey()));
            }
            Comparator<Entry<String, Double>> comparator = new Comparator<Entry<String, Double>>() {
                @Override
                public int compare(Entry<String, Double> e1, Entry<String, Double> e2) {
                    return e1.getValue().compareTo(e2.getValue());
                }
            };         // Max Value의 key, value
            Entry<String, Double> maxEntry = Collections.max(scoreAveByMBTI.entrySet(), comparator);
            /*
            // Min Value의 key, value
            Entry<String, Double> minEntry = Collections.min(scoreAveByMBTI.entrySet(), comparator);
            // 결과 출력
            System.out.println(maxEntry.getKey() + " : " + maxEntry.getValue()); // 2 : 70
            System.out.println(minEntry.getKey() + " : " + minEntry.getValue()); // 1 : 5
             */
            dto.getResponse().getBody().getItems().getItem().get(i).setMbti(maxEntry.getKey());
            dto.getResponse().getBody().getItems().getItem().get(i).setMbtiAveScore(maxEntry.getValue());
        }

    }

    public void recommendScore(LocationOpenApiResponseDTO dto, String nickname) {
        ArrayList<Evaluation> targetUser = evaluationRepository.findByMemberNickname(nickname);
        ArrayList<Long> targetUserContentIDs = new ArrayList<>(); // 추천대상 사용자가 평가한 모든 리스트를 가져온다
        HashMap<Long, Double> targetUserScoreMap = new HashMap<>();
        for (int i = 0; i < targetUser.size(); i++) {
            targetUserContentIDs.add(targetUser.get(i).getApiId());
            targetUserScoreMap.put(targetUser.get(i).getApiId(), targetUser.get(i).getScore());
            System.out.println("[targetUserScoreMap] " + targetUser.get(i).getApiId() + " => " + targetUser.get(i).getScore());
        }
        System.out.println("[targetUserScoreMap] dd " + targetUserScoreMap.get(128767L));

        for(int i = 0; i < dto.getResponse().getBody().getItems().getItem().size(); i++) { // 조회된 관광지 아이템들 순회
            ArrayList<Evaluation> partiUsers = evaluationRepository.findByApiId(dto.getResponse().getBody().getItems().getItem().get(i).getContentid());
            double simmilarScore = -1000;
            double bestRecommendScore = 0;

            double aveScore = 0; //특정 관광지에 대한 평점 계산을 하기 위한 변수
            double cntScore = partiUsers.size(); //특정 관광지에 대한 평점 계산을 하기 위한 변수
            //ArrayList<Long> targetUserContentIDsAndTargetContentID = targetUserContentIDs;
            //targetUserContentIDsAndTargetContentID.add(dto.getResponse().getBody().getItems().getItem().get(i).getContentid());
            for(int j = 0; j < partiUsers.size(); j++){ //

                double candidateScore = partiUsers.get(j).getScore();
                aveScore += partiUsers.get(j).getScore();

                List<Double> xScore = new ArrayList<>();
                List<Double> yScore = new ArrayList<>();
                if(!partiUsers.get(j).getMemberNickname().equals(nickname)){
                    ArrayList<Evaluation> partiUsersEvalData =
                            evaluationRepository.findByMemberNicknameAndApiIdIn(partiUsers.get(j).getMemberNickname(), targetUserContentIDs); //특정참가자에 대한 평가 리스트를 가져온다
                    for(int k = 0; k < partiUsersEvalData.size(); k++){
                        HashMap<Long, Double> partiUserScoreMap = new HashMap<>();
                        partiUserScoreMap.put(partiUsersEvalData.get(k).getApiId(), partiUsersEvalData.get(k).getScore());
                        System.out.println("[targetUserScoreMap] " + k + ", " + partiUsersEvalData.get(k).getApiId() + "//" + partiUsersEvalData.get(k).getApiId());
                        System.out.println("targetUserScoreMap/// " + targetUserScoreMap.get(partiUsersEvalData.get(k).getApiId()));
                        xScore.add(targetUserScoreMap.get(partiUsersEvalData.get(k).getApiId()));
                        yScore.add(partiUsersEvalData.get(k).getScore());
                    }
                    double res = PearsonUtil.getPearsonCorrelationScore(xScore, yScore);
                    if (simmilarScore < res) {
                        bestRecommendScore = candidateScore;
                    }
                    System.out.println("[recommendScore] " + nickname + " and " + partiUsers.get(j).getMemberNickname() + " : [유사도]" + res + ", [후보점수]" + candidateScore);
                }
            }

            //하나의 content id에 대한 예상평점(내부 for에서 최고평점)을 주입
            dto.getResponse().getBody().getItems().getItem().get(i).setRecommendScore(bestRecommendScore);
            //하나의 content id에 대한 평점 주입
            dto.getResponse().getBody().getItems().getItem().get(i).setAveScore(aveScore / cntScore);
        }
    }

}
