package com.carrot.trip.service;

import com.carrot.trip.dto.BookmarkDTO;
import com.carrot.trip.dto.EvaluationDTO;
import com.carrot.trip.entity.Bookmark;
import com.carrot.trip.entity.Evaluation;
import com.carrot.trip.repository.BookmarkRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;

@Slf4j
@Service
@RequiredArgsConstructor
public class BookmarkService {

    private final BookmarkRepository bookmarkRepository;

    @Transactional
    public Bookmark createBookmark(BookmarkDTO bookmarkDTO) {
        bookmarkRepository.deleteEvaluationsByMemberNicknameAndApiId(bookmarkDTO.getMemberNickname(), bookmarkDTO.getApiId());
        bookmarkRepository.save(Bookmark.builder()
                .memberNickname(bookmarkDTO.getMemberNickname())
                .apiId(bookmarkDTO.getApiId())
                .build());
        Bookmark bookmark = bookmarkRepository.findByMemberNicknameAndApiId(bookmarkDTO.getMemberNickname(), bookmarkDTO.getApiId());

        return bookmark;
    }

    @Transactional
    public BookmarkDTO deleteBookmark(BookmarkDTO bookmarkDTO) {
        bookmarkRepository.deleteEvaluationsByMemberNicknameAndApiId(bookmarkDTO.getMemberNickname(), bookmarkDTO.getApiId());
        return bookmarkDTO;
    }

    public ArrayList<Bookmark> bookmarkList(String nickname) {
        return bookmarkRepository.findByMemberNickname(nickname);
    }
}
