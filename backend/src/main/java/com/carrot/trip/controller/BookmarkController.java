package com.carrot.trip.controller;

import com.carrot.trip.dto.BookmarkDTO;
import com.carrot.trip.entity.Bookmark;
import com.carrot.trip.service.BookmarkService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
@Slf4j
public class BookmarkController {

    @Autowired
    private final BookmarkService bookmarkService;

    @GetMapping("/bookmark/{nickname}")
    public ArrayList<Bookmark> getUserBookmarkList(@PathVariable("nickname") String nickname) {
        return bookmarkService.bookmarkList(nickname);
    }

    @PostMapping("/bookmark")
    public Bookmark registBookmark(@RequestBody BookmarkDTO bookmarkDTO) {
        return bookmarkService.createBookmark(bookmarkDTO);
    }

    @DeleteMapping("/bookmark")
    public BookmarkDTO deleteBookmark(@RequestBody BookmarkDTO bookmarkDTO) {
        return bookmarkService.deleteBookmark(bookmarkDTO);
    }

}
