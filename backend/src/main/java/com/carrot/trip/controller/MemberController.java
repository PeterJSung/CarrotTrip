package com.carrot.trip.controller;

import com.carrot.trip.common.Response;

import com.carrot.trip.config.JwtTokenProvider;
import com.carrot.trip.dto.MemberDTO;
import com.carrot.trip.dto.SignUpDTO;
import com.carrot.trip.dto.TokenDTO;
import com.carrot.trip.entity.Member;
import com.carrot.trip.repository.MemberRepository;
import com.carrot.trip.service.MemberService;
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


/**
 * 현재 상태로는 Service단까지 필요하진 않음. 컨트롤단에서 가입 / 로그인 기능만 수행
 * */
@RestController
@RequestMapping("/api")
@AllArgsConstructor
@Slf4j
public class MemberController {

    private final MemberService memberService;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    private final MemberRepository memberRepository;

    //테스트
    @GetMapping("/test")
    public Response<String> testApi() {
        return Response.ok("Hello world");
    }

    //테스트
    @GetMapping("/user/test")
    public Response<String> testApi2() {
        return Response.ok("Hello world");
    }

    // 로그인
    @PostMapping("/login")
    public TokenDTO login(@RequestBody Map<String, String> user) {
        Member member = memberRepository.findByNickname(user.get("nickname"))
                .orElseThrow(() -> new IllegalArgumentException("가입되지 않은 닉네임 입니다."));

        if (!user.get("password").equals(member.getPassword())) {
            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
        }
        return TokenDTO.builder()
                .token(jwtTokenProvider.createToken(member.getUserNickname(), Collections.singletonList("ROLE_USER")))
                .build();
    }

    // 회원가입
    @PostMapping("/join")
    public Map<String, String> join(@RequestBody Map<String, String> user) throws IOException {

        return memberService.createMember(user);
    }
}