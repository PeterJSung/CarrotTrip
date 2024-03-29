package com.carrot.trip.entity;

import lombok.*;

import javax.persistence.*;

/** 관광지가 띄고있는 취향 */
@Table(name = "TOURIST_ATTRACTION_TASTE")
@Getter
@Setter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class TouristAttractionTaste {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "API_ID")
    private Long apiId;

    @Column(name = "MEMBER_NICKNAME")
    private String memberNickname;

    @Column(name = "TASTE_CODE")
    private String tasteCode;
}
