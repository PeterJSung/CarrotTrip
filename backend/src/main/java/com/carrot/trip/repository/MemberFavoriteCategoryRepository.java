package com.carrot.trip.repository;

import com.carrot.trip.entity.MemberFavoriteCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface MemberFavoriteCategoryRepository  extends JpaRepository<MemberFavoriteCategory, Long> {
    ArrayList<MemberFavoriteCategory> findAll();
}
