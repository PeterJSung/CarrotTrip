package com.carrot.trip.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class DummyDTO {
    private Long contentId;
    private String name;
    private String address;
    private String thumbnail1;
    private String thumbnail2;
}
