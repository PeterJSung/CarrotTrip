package com.carrot.trip.repository;

import com.carrot.trip.entity.MemberTaste;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface MemberTasteRepository extends JpaRepository<MemberTaste, Long> {
    ArrayList<MemberTaste> findAll();
}