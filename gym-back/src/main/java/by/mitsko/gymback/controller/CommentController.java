package by.mitsko.gymback.controller;

import by.mitsko.gymback.domain.dto.CommentDto;
import by.mitsko.gymback.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/comment")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @GetMapping
    public List<CommentDto> getComments() {
        return commentService.getComments();
    }

    @PostMapping
    public List<CommentDto> addComment(@RequestBody CommentDto commentDto) {
        return commentService.addComment(commentDto);
    }

}
