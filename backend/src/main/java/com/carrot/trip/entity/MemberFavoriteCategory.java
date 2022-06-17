package com.carrot.trip.entity;

import lombok.*;

import javax.persistence.*;

/** 사용자의 카테고리 */
@Table(name = "MEMBER_FAVORITE_CATEGORY")
@Getter
@Setter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class MemberFavoriteCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "MEMBER_ID")
    private String memberId;

    @Column(name = "CATEGORY_CODE")
    private String categoryCode;
}
