package com.carrot.trip.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LocationOpenApiBodyDTO {
    private LocationOpenApiResponseItemsDTO items;
    private int numOfRows;
    private int pageNo;
    private int totalCount;
}
