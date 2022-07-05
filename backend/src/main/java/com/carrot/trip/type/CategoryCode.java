package com.carrot.trip.type;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
@AllArgsConstructor
public enum CategoryCode {
    TOURIST_ATTRACTION(12, 76, "관광지"),
    CULTURAL_FACILITIES(14, 78, "문화시설"),
    EVENT_PERFOMANCE_FESTIVAL(15, 85, "행사/공연/축제"),
    TRAVEL_COURSE(25, 0, "여행코스"),
    LEPORTS(28, 75, "레포츠"),
    ACCOMMODATION(32, 80,  "숙박"),
    SHOPPING(38, 79, "쇼핑"),
    RESTOURANT(39, 82, "음식점"),;

    private final Integer codeKr;
    private final Integer codeGlobal;
    private final String name;
}
