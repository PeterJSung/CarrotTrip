package com.carrot.trip.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DetailOpenApiResponseResDTO {
    private DetailOpenApiBodyDTO body;
    private LocationOpenApiHeaderDTO header;
}
