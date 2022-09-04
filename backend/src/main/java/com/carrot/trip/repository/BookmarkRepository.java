package com.carrot.trip.repository;

import com.carrot.trip.entity.Bookmark;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface BookmarkRepository extends JpaRepository<Bookmark, Long>{
    ArrayList<Bookmark> findByMemberNickname(String memberNickname);
    Bookmark findByMemberNicknameAndApiId(String memberNickname, Long apiId);
    int deleteBookmarksByMemberNicknameAndApiId(String memberNickname, Long apiId);
}