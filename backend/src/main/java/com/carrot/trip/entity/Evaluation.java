package com.carrot.trip.entity;

import lombok.*;

import javax.persistence.*;

/** 사용자의 여행지 평가에 대한 데이터를 저장하는 테이블 */
@Table(name = "EVALUATION")
@Getter
@Setter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Evaluation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "MEMBER_NICKNAME")
    private String memberNickname;

    @Column(name = "API_ID")
    private Long apiId;

    @Column(name = "SCORE")
    private double score;

    @Column(name = "COMMENTS")
    private String comments;

    @Column(name = "REG_DT")
    private String regDt;
}
