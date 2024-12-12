package by.mitsko.gymback.service.impl;

import by.mitsko.gymback.domain.dto.CommentDto;
import by.mitsko.gymback.domain.model.Comment;
import by.mitsko.gymback.domain.model.User;
import by.mitsko.gymback.exception.EntityNotFoundException;
import by.mitsko.gymback.repository.CommentRepository;
import by.mitsko.gymback.repository.UserRepository;
import by.mitsko.gymback.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService {

    private final CommentRepository commentRepository;
    private final UserRepository userRepository;

    @Override
    public List<CommentDto> addComment(CommentDto dto) {
        Comment comment = new Comment();

        comment.setId(UUID.randomUUID());
        comment.setText(dto.getText());
        User client = userRepository.findById(dto.getAuthorId()).orElseThrow(() -> new EntityNotFoundException("Не найден пользователь с id:" + dto.getAuthorId(), 404));
        comment.setAuthor(client);

        commentRepository.save(comment);

        return getComments();
    }

    @Override
    public List<CommentDto> getComments() {
        return commentRepository.findAllByOrderByCreatedAtDesc().stream().map(CommentDto::new).toList();
    }
}
