package com.carrot.trip.type;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
@AllArgsConstructor
public enum TasteCode {
    QUIET(1, "조용한"),
    CALM(2, "차분함"),
    LIVELY(3, "활기있는"),
    PASSIONATE(4, "열정적인"),
    ADVENTUROUS(5, "모험적인"),
    INTERESTRING(6, "재미있는"),
    FRIENDLY(7, "친근한"),
    GENTLE(8, "온화한"),
    IMPROMPTU(9, "즉흥적인"),
    WHIMSICAL(10, "엉뚱한"),
    TIMID(11, "소심한"),
    INTROVERTED(12, "내성적인"),
    COMPLEX(13, "복잡한"),
    PLANNED(14, "계획적인"),
    NATURE_FRIENDLY(15, "차연친화적인"),;

    private final Integer code;
    private final String name;
}
