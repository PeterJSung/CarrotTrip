package com.carrot.trip.entity;

import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/** 사용자 테이블 */
@Table(name = "MEMBER")
@Getter
@Setter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Member implements UserDetails {

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

    @Column(name = "ROLES")
    private String roles;

    @Column(name = "PHONE_NUMBER")
    private String phoneNumber;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getUsername() {
        return this.name;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }

    public List<String> getRoles() {
        List<String> roles = new ArrayList<String>();
        roles.add("USER");

        return roles;
    }

    public String getUserNickname() {
        return this.nickname;
    }
}