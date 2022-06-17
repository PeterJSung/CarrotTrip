package com.carrot.trip.controller;

import com.carrot.trip.dto.EvaluationDTO;
import com.carrot.trip.dto.TouristAttractionTasteDTO;
import com.carrot.trip.service.EvaluationService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
@Slf4j
public class EvaluationController {

    private final EvaluationService evaluationService;

    // 평가 : 별점 및 코멘트
    @PostMapping("/evaluation/score")
    public EvaluationDTO createEvaluation(@RequestBody EvaluationDTO evaluation) {
        return evaluationService.createEvaluation(evaluation);
    }

    // 평가 : 관광지에 대한 성향
    @PostMapping("/evaluation/taste/touristAttraction")
    public TouristAttractionTasteDTO createTasteTouristAttraction(@RequestBody TouristAttractionTasteDTO tatDTO) {
        return evaluationService.createTouristAttractionTaste(tatDTO);
    }

}
