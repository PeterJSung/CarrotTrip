package com.carrot.trip.dto;

import com.carrot.trip.entity.Evaluation;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Map;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TouristAttractionDetailDTO {
    private ArrayList<Evaluation> commentList;
    private Map<String, Double> mbtiRanking;
    private ArrayList tasteList;
    private String overview;
}
