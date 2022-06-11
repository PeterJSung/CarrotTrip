package com.carrot.trip.controller;

import com.carrot.trip.common.Response;

import com.carrot.trip.config.JwtTokenProvider;
import com.carrot.trip.entity.Member;
import com.carrot.trip.repository.MemberRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Map;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
@Slf4j
public class MemberController {

    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    private final MemberRepository memberRepository;

    //테스트
    @GetMapping("/test")
    public Response<String> testApi() {
        return Response.ok("Hello world");
    }

    /*
    // 회원가입
    @PostMapping("/join")
    public Long join(@RequestBody Map<String, String> user) {
        return memberRepository.save(User.builder()
                .email(user.get("email"))
                .password(passwordEncoder.encode(user.get("password")))
                .roles(Collections.singletonList("ROLE_USER")) // 최초 가입시 USER 로 설정
                .build()).getId();
    }
     */

    //테스트
    @GetMapping("/user/test")
    public Response<String> testApi2() {
        return Response.ok("Hello world");
    }

    // 로그인
    @PostMapping("/login")
    public String login(@RequestBody Map<String, String> user) {
        Member member = memberRepository.findByNickname(user.get("nickname"))
                .orElseThrow(() -> new IllegalArgumentException("가입되지 않은 닉네임 입니다."));

        /*
        if (!passwordEncoder.matches(user.get("password"), member.getPassword())) {
            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
        }
         */

        if (!user.get("password").equals(member.getPassword())) {
            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
        }
        return jwtTokenProvider.createToken(member.getUserNickname(), Collections.singletonList("ROLE_USER"));
    }

    // 회원가입
    @PostMapping("/join")
    public Long join(@RequestBody Map<String, String> user) {
        return memberRepository.save(Member.builder()
                .name(user.get("name"))
                .nickname(user.get("nickname"))
                .password(user.get("password"))
                .point(0)
                .mbti(user.get("mbti"))
                .roles(Collections.singletonList("ROLE_USER")) // 최초 가입시 USER 로 설정, Collections.singletonList로 리턴된 List를 변경하면 UnsupportedOperationException이 발생함
                .build()).getId();
    }
}