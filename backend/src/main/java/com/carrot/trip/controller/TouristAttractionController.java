package com.carrot.trip.controller;

import com.carrot.trip.common.PearsonUtil;
import com.carrot.trip.dto.DetailOpenApiResponseDTO;
import com.carrot.trip.dto.LocationOpenApiResponseDTO;
import com.carrot.trip.dto.TouristAttractionDetailDTO;
import com.carrot.trip.service.OpenAPIService;
import com.carrot.trip.service.TouristAttractionDetailService;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
@Slf4j
public class TouristAttractionController {

    private final OpenAPIService openAPIService;
    private final TouristAttractionDetailService touristAttractionDetailService;

    @GetMapping("/touristAttraction/list/x/{x}/y/{y}/nickname/{nickname}/language/{lang}")
    public LocationOpenApiResponseDTO getMapData(@PathVariable("x") Double x, @PathVariable("y") Double y
            , @PathVariable("nickname") String nickname, @PathVariable("lang") String lang) throws URISyntaxException, JsonProcessingException {
        return openAPIService.openAPICall(x, y, nickname, lang);
    }

    @GetMapping("/touristAttraction/pearsons/test")
    public String pearsonsTest() {
        List lx = Arrays.asList(1,2,3);
        List ly = Arrays.asList(1,2,3);
        Double res = PearsonUtil.getPearsonCorrelationScore(lx, ly);

        System.out.println("유사: " + PearsonUtil.getPearsonCorrelationScore(
                Arrays.asList(1,3,4,5,6,7,8,1,2,3,4,5,6),
                Arrays.asList(10,30,40,50,60,70,80,10,20,30,40,50,60)));

        System.out.println("엇비슷: " + PearsonUtil.getPearsonCorrelationScore(
                Arrays.asList(1,3,4,5,6,7,8,1,2,3,4,5,6),
                Arrays.asList(7,5,3,2,1,5,6,3,2,3,4,1,2)));

        System.out.println("정반대: " + PearsonUtil.getPearsonCorrelationScore(
                Arrays.asList(1,3,4,5,6,7,8,1,2,3,4,5,6),
                Arrays.asList(8,5,5,3,2,1,1,7,6,5,5,3,2)));

        return "" + res;
    }

    @GetMapping("/touristAttraction/detail/{contentId}/lang/{lang}")
    public TouristAttractionDetailDTO getDetail(@PathVariable("contentId") Long contentId, @PathVariable("lang") String lang) throws URISyntaxException, JsonProcessingException {
        return touristAttractionDetailService.getDetail(contentId, lang);
    }

    @GetMapping("/test/detail/{contentId}")
    public DetailOpenApiResponseDTO getDetail22(@PathVariable("contentId") Long contentId) throws URISyntaxException, JsonProcessingException {
        return openAPIService.openAPIDetailCall(contentId, "KorService");
    }

}
