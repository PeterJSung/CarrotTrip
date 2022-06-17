package com.carrot.trip.service;

import com.carrot.trip.dto.MemberDTO;
import com.carrot.trip.dto.SignUpDTO;
import com.carrot.trip.entity.Member;
import com.carrot.trip.exception.CustomException;
import com.carrot.trip.repository.MemberRepository;
import com.carrot.trip.type.ErrorCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Map;


@Slf4j
@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    public Map<String, String> createMember(Map<String, String> user) throws IOException {
        if (isExistUserByNickname(user.get("nickname"))) {
            throw new CustomException(ErrorCode.NICKNAME_DUPLICATION);
        }

        memberRepository.save(Member.builder()
                .name(user.get("name"))
                .nickname(user.get("nickname"))
                .password(user.get("password"))
                .point(0)
                .mbti(user.get("mbti"))
                .roles(Collections.singletonList("ROLE_USER")) // 최초 가입시 USER 로 설정, Collections.singletonList로 리턴된 List를 변경하면 UnsupportedOperationException이 발생함
                .build());

        return user;
    }

    public boolean isExistUserByNickname(String nickname) {
        return memberRepository.existsByNickname(nickname);
    }

}
