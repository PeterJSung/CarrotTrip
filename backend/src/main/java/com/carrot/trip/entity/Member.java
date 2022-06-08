package com.carrot.trip.entity;

import lombok.*;

import javax.persistence.*;

/** 사용자 테이블 */
@Table(name = "MEMBER")
@Getter
@Setter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "NICKNAME")
    private String nickname;

    @Column(name = "PASSWORD")
    private String password;

    @Column(name = "POINT")
    private Integer point;

    @Column(name = "MBTI")
    private String mbti;

    @Column(name = "PHONE_NUMBER")
    private String phoneNumber;

}