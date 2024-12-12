package by.mitsko.gymback.service;

import by.mitsko.gymback.domain.dto.CommentDto;

import java.util.List;

public interface CommentService {

    List<CommentDto> addComment(CommentDto dto);

    List<CommentDto> getComments();

}
