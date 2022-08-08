package com.carrot.trip.dto;

import com.carrot.trip.entity.MemberTaste;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

@Builder
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TokenDTO {
    private String token;
    private String nickname;
    private String mbti;
    private ArrayList<MemberTaste> tasteList;
}
