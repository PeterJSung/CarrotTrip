package com.carrot.trip.entity;

import lombok.*;

import javax.persistence.*;

/** 사용자의 찜하기 테이블 */
@Table(name = "BOOKMARK")
@Getter
@Setter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Bookmark {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "MEMBER_NICKNAME")
    private String memberNickname;

    @Column(name = "TOURIST_ATTRACTION_ID")
    private String touristAttractionId;

}
