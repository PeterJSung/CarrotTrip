package com.carrot.trip.entity;

import lombok.*;

import javax.persistence.*;

/** 여행지 테이블 */
@Table(name = "TOURIST_ATTRACTION")
@Getter
@Setter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class TouristAttraction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "API_ID")
    private String apiId;

    @Column(name = "NAME")
    private String name;

    @Column(name = "ADDRESS")
    private String address;

    @Column(name = "PICTURE_LINK")
    private String pictureLink;

}
