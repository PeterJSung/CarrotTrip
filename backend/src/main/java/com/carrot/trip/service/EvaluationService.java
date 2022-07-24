package com.carrot.trip.service;

import com.carrot.trip.dto.*;
import com.carrot.trip.entity.Evaluation;
import com.carrot.trip.entity.MemberFavoriteCategory;
import com.carrot.trip.entity.MemberTaste;
import com.carrot.trip.entity.TouristAttractionTaste;
import com.carrot.trip.repository.EvaluationRepository;
import com.carrot.trip.repository.MemberFavoriteCategoryRepository;
import com.carrot.trip.repository.MemberTasteRepository;
import com.carrot.trip.repository.TouristAttractionTasteRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;

@Slf4j
@Service
@RequiredArgsConstructor
public class EvaluationService {

    private final EvaluationRepository evaluationRepository;
    private final TouristAttractionTasteRepository touristAttractionTasteRepository;
    private final MemberFavoriteCategoryRepository memberFavoriteCategoryRepository;
    private final MemberTasteRepository memberTasteRepository;

    /** 일반 사용자용 평가등록 : 이미 데이터가 존재할 경우 삭제 후 등록한다. */
    @Transactional
    public EvaluationDTO createEvaluation(EvaluationDTO evaluationDTO) {
        evaluationRepository.deleteEvaluationsByMemberNicknameAndApiId(evaluationDTO.getMemberNickname(), evaluationDTO.getApiId());
        evaluationRepository.save(Evaluation.builder()
                .memberNickname(evaluationDTO.getMemberNickname())
                .apiId(evaluationDTO.getApiId())
                .score(evaluationDTO.getScore())
                .comments(evaluationDTO.getComments())
                .build());

        return evaluationDTO;
    }

    /** 서포터용 평가등록 : 이미 데이터가 존재할 경우 등록하지 않는다. */
    @Transactional
    public EvaluationDTO createEvaluationForSupporter(EvaluationDTO evaluationDTO) {
        Evaluation evaluation = evaluationRepository.findByMemberNicknameAndApiId(evaluationDTO.getMemberNickname(), evaluationDTO.getApiId());
        if (evaluation != null){
            return null;
        }
        else {
            evaluationRepository.save(Evaluation.builder()
                    .memberNickname(evaluationDTO.getMemberNickname())
                    .apiId(evaluationDTO.getApiId())
                    .score(evaluationDTO.getScore())
                    .comments(evaluationDTO.getComments())
                    .build());
        }

        return evaluationDTO;
    }

    public TouristAttractionTastesDTO createTouristAttractionTastes(TouristAttractionTastesDTO touristAttractionTastesDTO) {
        for(int i = 0; i < touristAttractionTastesDTO.getTasteCodes().size(); i ++) {
            touristAttractionTasteRepository.save(TouristAttractionTaste.builder()
                    .apiId(touristAttractionTastesDTO.getApiId())
                    .memberNickname(touristAttractionTastesDTO.getMemberNickname())
                    .tasteCode(touristAttractionTastesDTO.getTasteCodes().get(i))
                    .build());
        }

        return touristAttractionTastesDTO;
    }

    public TouristAttractionTasteDTO createTouristAttractionTaste(TouristAttractionTasteDTO touristAttractionTasteDTO) {
        touristAttractionTasteRepository.save(TouristAttractionTaste.builder()
                .apiId(touristAttractionTasteDTO.getApiId())
                .memberNickname(touristAttractionTasteDTO.getMemberNickname())
                .tasteCode(touristAttractionTasteDTO.getTasteCode())
                .build());

        return touristAttractionTasteDTO;
    }

    public MemberFavoriteCategoryDTO createMemberFavoriteCategory(MemberFavoriteCategoryDTO memberFavoriteCategoryDTO) {
        memberFavoriteCategoryRepository.save(MemberFavoriteCategory.builder()
                .categoryCode(memberFavoriteCategoryDTO.getCategoryCode())
                .memberNickname(memberFavoriteCategoryDTO.getMemberNickname())
                .build());

        return memberFavoriteCategoryDTO;
    }

    public MemberTasteDTO createMemberTaste(MemberTasteDTO memberTasteDTO) {
        memberTasteRepository.save(MemberTaste.builder()
                .memberNickname(memberTasteDTO.getMemberNickname())
                .tasteCode(memberTasteDTO.getTasteCode())
                .build());
        return memberTasteDTO;
    }

    public ArrayList<DummyDTO> getDummy(String lang) {
        if (lang.equals("korService")){
            return DummyListDTO.getKorService();
        }
        else if (lang.equals("JpnService")){
            return DummyListDTO.getJpnService();
        }
        else if (lang.equals("ChsService")){
            return DummyListDTO.getChsService();
        }
        else if (lang.equals("ChtService")){
            return DummyListDTO.getChtService();
        }
        else if (lang.equals("GerService")){
            return DummyListDTO.getGerService();
        }
        else if (lang.equals("FreService")){
            return DummyListDTO.getFreService();
        }
        else if (lang.equals("SpnService")){
            return DummyListDTO.getSpnService();
        }
        else if (lang.equals("RusService")){
            return DummyListDTO.getRusService();
        }
        else {
            return DummyListDTO.getEngService();
        }
    }


}
