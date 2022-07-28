package com.carrot.trip.service;

import antlr.collections.List;
import com.carrot.trip.dto.BookmarkDTO;
import com.carrot.trip.dto.EvaluationDTO;
import com.carrot.trip.dto.TouristAttractionDetailDTO;
import com.carrot.trip.entity.Evaluation;
import com.carrot.trip.entity.Member;
import com.carrot.trip.entity.TouristAttractionTaste;
import com.carrot.trip.repository.EvaluationRepository;
import com.carrot.trip.repository.MemberRepository;
import com.carrot.trip.repository.TouristAttractionTasteRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.apache.bcel.classfile.Module;
import org.springframework.jdbc.core.metadata.Db2CallMetaDataProvider;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.lang.reflect.Array;
import java.net.URISyntaxException;
import java.text.SimpleDateFormat;
import java.util.*;

@Slf4j
@Service
@RequiredArgsConstructor
public class TouristAttractionDetailService {
    private final EvaluationRepository evaluationRepository;
    private final TouristAttractionTasteRepository touristAttractionTasteRepository;
    private final MemberRepository memberRepository;

    private final OpenAPIService openAPIService;

    public TouristAttractionDetailDTO getDetail(Long apiId) throws URISyntaxException, JsonProcessingException {
        TouristAttractionDetailDTO touristAttractionDetailDTO = new TouristAttractionDetailDTO();
        touristAttractionDetailDTO.setCommentList(getCommentList(apiId));
        touristAttractionDetailDTO.setMbtiRanking(getTouristAttractionMBTIRankingList(apiId));
        touristAttractionDetailDTO.setTasteList(getTouristAttractionTasteList(apiId));
        touristAttractionDetailDTO.setOverview(openAPIService.openAPIDetailCall(apiId).getResponse().getBody().getItems().getItem().getOverview());
        return touristAttractionDetailDTO;
    }

    public ArrayList<Evaluation> getCommentList(Long apiId) {
        return evaluationRepository.findByApiIdOrderByRegDtDesc(apiId);
    }

    public Map<String, Double> getTouristAttractionMBTIRankingList(Long apiId) {
        Map<String, Double> scoreSumByMBTI = new HashMap<String, Double>();
        Map<String, Double> scoreCntByMBTI = new HashMap<String, Double>();
        Map<String, Double> scoreAveByMBTI = new HashMap<String, Double>();

        ArrayList<Evaluation> partiUsers = evaluationRepository.findByApiId(apiId);
        for(int j = 0; j < partiUsers.size(); j++){
            Member partiMBTI = memberRepository.findByNickname(partiUsers.get(j).getMemberNickname()).orElseThrow(() -> new IllegalArgumentException("가입되지 않은 닉네임 입니다."));
            Evaluation partiScore = evaluationRepository.findByMemberNicknameAndApiId(partiUsers.get(j).getMemberNickname(), apiId);

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
        Comparator<Map.Entry<String, Double>> comparator = new Comparator<Map.Entry<String, Double>>() {
            @Override
            public int compare(Map.Entry<String, Double> e1, Map.Entry<String, Double> e2) {
                return e1.getValue().compareTo(e2.getValue());
            }
        };         // Max Value의 key, value
        //Map.Entry<String, Double> maxEntry = Collections.max(scoreAveByMBTI.entrySet(), comparator);
            /*
            // Min Value의 key, value
            Entry<String, Double> minEntry = Collections.min(scoreAveByMBTI.entrySet(), comparator);
            // 결과 출력
            System.out.println(maxEntry.getKey() + " : " + maxEntry.getValue()); // 2 : 70
            System.out.println(minEntry.getKey() + " : " + minEntry.getValue()); // 1 : 5
             */
        //dto.getResponse().getBody().getItems().getItem().get(i).setMbti(maxEntry.getKey());
        //dto.getResponse().getBody().getItems().getItem().get(i).setMbtiAveScore(maxEntry.getValue());
        return scoreAveByMBTI;
    }

    public ArrayList getTouristAttractionTasteList(Long apiId) {
        ArrayList<TouristAttractionTaste> touristAttractionTastes = touristAttractionTasteRepository.findByApiId(apiId);
        HashMap<String, Integer> tasteCounter = new HashMap<>();
        ArrayList tasteRankOrdering = new ArrayList();

        for (int i = 0; i < touristAttractionTastes.size(); i++) {
            if (tasteCounter.isEmpty() || tasteCounter.get(touristAttractionTastes.get(i).getTasteCode()) == null) {
                tasteCounter.put(touristAttractionTastes.get(i).getTasteCode(), 1);
            }
            else {
                tasteCounter.put(touristAttractionTastes.get(i).getTasteCode(),
                        tasteCounter.get(touristAttractionTastes.get(i).getTasteCode()) + 1);
            }
        }

        // Map.Entry 리스트 작성
        ArrayList<Map.Entry<String, Integer>> list_entries = new ArrayList<Map.Entry<String, Integer>>(tasteCounter.entrySet());

        // 비교함수 Comparator를 사용하여 내림 차순으로 정렬
        Collections.sort(list_entries, new Comparator<Map.Entry<String, Integer>>() {
            // compare로 값을 비교
            public int compare(Map.Entry<String, Integer> obj1, Map.Entry<String, Integer> obj2)
            {
                // 내림 차순으로 정렬
                return obj2.getValue().compareTo(obj1.getValue());
            }
        });

        System.out.println("내림 차순 정렬");
        // 결과 출력
        for (Map.Entry<String, Integer> entry : list_entries) {
            System.out.println(entry.getKey() + " : " + entry.getValue());
            tasteRankOrdering.add(entry.getKey());
        }

        return tasteRankOrdering;
    }
}
