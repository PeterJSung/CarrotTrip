package com.carrot.trip.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

import java.util.ArrayList;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class LocationOpenApiItemDto {
    private String addr1; //경기도 광주시 남한산성면 남한산성로 512
    private int areacode; //31
    private String cat1; //A05
    private String cat2; //A0502
    private String cat3; //A05020100
    private Long contentid; //2736707
    private int contenttypeid; //39
    private Long createdtime; //20210826111710
    private Double dist; //4067.233320154766
    private String firstimage; //http://tong.visitkorea.or.kr/cms/resource/90/2750690_image2_1.png
    private String firstimage2; //http://tong.visitkorea.or.kr/cms/resource/90/2750690_image2_1.png
    private Double mapx; //127.2066280793
    private Double mapy; //37.4672448839
    private int mlevel; //6
    private Long modifiedtime; //20210928133017
    private int readcount; //0
    private int sigungucode; //5
    private String title; //개미촌
    private double recommendScore; //추천스코어
    private String mbti;
    private double mbtiAveScore;
    private double aveScore;
    private ArrayList<String> tasteList;
    private boolean userTaste;

    private String overview;
}
