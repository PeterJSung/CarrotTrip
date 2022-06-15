package com.carrot.trip.dto;

import com.carrot.trip.entity.Member;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Builder
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class MemberDTO implements Serializable {
    private String name;
    private String nickname;
    private Long id;
    private String phoneNumber;
    private String accountNumber;
    private Integer accountMoney;
    private Integer point;
    private List<MemberDTO> list;

    public static MemberDTO of(Member member) {
        return MemberDTO.builder()
                .id(member.getId())
                .name(member.getName())
                .phoneNumber(member.getPhoneNumber())
                .point(member.getPoint())
                .build();
    }

}
