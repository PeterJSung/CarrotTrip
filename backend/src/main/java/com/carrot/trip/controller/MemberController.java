package com.carrot.trip.controller;

import com.carrot.trip.common.Response;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
@Slf4j
public class MemberController {

    //테스트
    @GetMapping("/test")
    public Response<String> testApi() {
        return Response.ok("Hello world");
    }


}
