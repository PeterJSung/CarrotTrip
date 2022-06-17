package com.carrot.trip.service;

import com.carrot.trip.dto.EvaluationDTO;
import com.carrot.trip.dto.TouristAttractionTasteDTO;
import com.carrot.trip.entity.Evaluation;
import com.carrot.trip.entity.TouristAttractionTaste;
import com.carrot.trip.repository.EvaluationRepository;
import com.carrot.trip.repository.TouristAttractionTasteRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class EvaluationService {

    private final EvaluationRepository evaluationRepository;
    private final TouristAttractionTasteRepository touristAttractionTasteRepository;

    public EvaluationDTO createEvaluation(EvaluationDTO evaluationDTO) {
        evaluationRepository.save(Evaluation.builder()
                .memberNickname(evaluationDTO.getMemberNickname())
                .touristAttractionId(evaluationDTO.getTouristAttractionId())
                .score(evaluationDTO.getScore())
                .comments(evaluationDTO.getComments())
                .build());

        return evaluationDTO;
    }

    public TouristAttractionTasteDTO createTouristAttractionTaste(TouristAttractionTasteDTO touristAttractionTasteDTO) {
        touristAttractionTasteRepository.save(TouristAttractionTaste.builder()
                .touristAttractionId(touristAttractionTasteDTO.getTouristAttractionId())
                .memberNickname(touristAttractionTasteDTO.getMemberNickname())
                .tasteCode(touristAttractionTasteDTO.getTasteCode())
                .build());

        return touristAttractionTasteDTO;
    }


}
