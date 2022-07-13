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
    public static int transKrCode(Integer code) {
        if (code == CategoryCode.TOURIST_ATTRACTION.getCodeKr() || code == CategoryCode.TOURIST_ATTRACTION.getCodeGlobal()) {
            return CategoryCode.TOURIST_ATTRACTION.getCodeKr();
        }
        else if (code == CategoryCode.CULTURAL_FACILITIES.getCodeKr() || code == CategoryCode.CULTURAL_FACILITIES.getCodeGlobal()) {
            return CategoryCode.CULTURAL_FACILITIES.getCodeKr();
        }
        else if (code == CategoryCode.EVENT_PERFOMANCE_FESTIVAL.getCodeKr() || code == CategoryCode.EVENT_PERFOMANCE_FESTIVAL.getCodeGlobal()) {
            return CategoryCode.EVENT_PERFOMANCE_FESTIVAL.getCodeKr();
        }
        else if (code == CategoryCode.TRAVEL_COURSE.getCodeKr() || code == CategoryCode.TRAVEL_COURSE.getCodeGlobal()) {
            return CategoryCode.TRAVEL_COURSE.getCodeKr();
        }
        else if (code == CategoryCode.LEPORTS.getCodeKr() || code == CategoryCode.LEPORTS.getCodeGlobal()) {
            return CategoryCode.LEPORTS.getCodeKr();
        }
        else if (code == CategoryCode.ACCOMMODATION.getCodeKr() || code == CategoryCode.ACCOMMODATION.getCodeGlobal()) {
            return CategoryCode.ACCOMMODATION.getCodeKr();
        }
        else if (code == CategoryCode.SHOPPING.getCodeKr() || code == CategoryCode.SHOPPING.getCodeGlobal()) {
            return CategoryCode.SHOPPING.getCodeKr();
        }
        else {
            return CategoryCode.RESTOURANT.getCodeKr();
        }
    };
}
