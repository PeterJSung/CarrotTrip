package com.carrot.trip.dto;

import com.carrot.trip.entity.Member;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignUpDTO {
    private String name;
    private String password;
    private String phoneNumber;
    private Integer point;
    private String accountNumber;
    private Integer accountMoney;
    private String nickname;

    public Member toEntity() {
        return Member.builder()
                .name(name)
                .password(password)
                .phoneNumber(phoneNumber)
                .point(point)
                .nickname(nickname)
                .build();
    }
}
