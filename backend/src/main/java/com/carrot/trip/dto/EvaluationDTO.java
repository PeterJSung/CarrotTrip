package com.carrot.trip.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class EvaluationDTO {
    private String memberNickname;
    private Long apiId;
    private Integer score;
    private String comments;
    private String regDt;
}
