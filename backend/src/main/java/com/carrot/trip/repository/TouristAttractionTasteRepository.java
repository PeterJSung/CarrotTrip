package com.carrot.trip.repository;

import com.carrot.trip.entity.TouristAttractionTaste;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface TouristAttractionTasteRepository extends JpaRepository<TouristAttractionTaste, Long> {
    ArrayList<TouristAttractionTaste> findAll();
}