package com.carrot.trip.entity;

import lombok.*;

import javax.persistence.*;

/** 사용자의 취향 */
@Table(name = "MEMBER_TASTE")
@Getter
@Setter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class MemberTaste {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "MEMBER_NICKNAME")
    private String memberNickname;

    @Column(name = "TASTE_CODE")
    private String tasteCode;
}
