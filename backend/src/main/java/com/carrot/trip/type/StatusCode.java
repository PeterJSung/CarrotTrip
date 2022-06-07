package com.carrot.trip.type;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum StatusCode {
    OK("SUCCESS"),
    FAIL("ERROR");

    private final String message;
}