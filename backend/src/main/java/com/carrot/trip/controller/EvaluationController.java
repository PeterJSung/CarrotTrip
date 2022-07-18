package com.carrot.trip.controller;

import com.carrot.trip.common.Response;
import com.carrot.trip.dto.*;
import com.carrot.trip.service.EvaluationService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

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
    public TouristAttractionTastesDTO createTasteTouristAttraction(@RequestBody TouristAttractionTastesDTO tatDTO) {
        return evaluationService.createTouristAttractionTastes(tatDTO);
    }

    // 평가 : 사용자의 선호하는 관광지 카테고리(관광지 타입) 설정
    @PostMapping("/evaluation/category")
    public Response<Boolean> createFavoriteCategory(@RequestBody MemberFavoriteCategoriesDTO memberFavoriteCategoriesDTO) {
        for (int i = 0; i < memberFavoriteCategoriesDTO.getCategoryCodes().size(); i++) {
            evaluationService.createMemberFavoriteCategory(MemberFavoriteCategoryDTO.builder()
                    .memberNickname(memberFavoriteCategoriesDTO.getMemberNickname())
                    .categoryCode(memberFavoriteCategoriesDTO.getCategoryCodes().get(i))
                    .build());
        }
        return  Response.ok(true);
    }

    // 평가 : 사용자의 선호하는 관광지 카테고리(관광지 타입) 설정
    @PostMapping("/evaluation/taste/member")
    public Response<Boolean> createTasteMember(@RequestBody MemberTastesDTO memberTastesDTO) {
        for (int i = 0; i < memberTastesDTO.getTasteCodes().size(); i++) {
            evaluationService.createMemberTaste(MemberTasteDTO.builder()
                    .memberNickname(memberTastesDTO.getMemberNickname())
                    .tasteCode(memberTastesDTO.getTasteCodes().get(i))
                    .build());
        }
        return  Response.ok(true);
    }

    @GetMapping("/evaluation/dummy/lang/{lang}")
    public ArrayList<DummyDTO> getDummy(@PathVariable("lang") String lang) {
        return evaluationService.getDummy(lang);
    }


}
