package com.carrot.trip.controller;

import com.carrot.trip.dto.LocationOpenApiResponseDTO;
import com.carrot.trip.service.OpenAPIService;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
@Slf4j
public class TouristAttractionController {

    private final OpenAPIService openAPIService;

    @GetMapping("/touristAttraction")
    public LocationOpenApiResponseDTO getMapData() throws URISyntaxException, JsonProcessingException {
        return openAPIService.openAPICall();
    }
}
