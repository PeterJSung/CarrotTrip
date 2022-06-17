package com.carrot.trip.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TouristAttractionTasteDTO {
    private String touristAttractionId;
    private String memberNickname;
    private String tasteCode;
}
