package com.carrot.trip.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DetailOpenApiResponseItemsDTO {
    private ArrayList<LocationOpenApiItemDto> item;
}
