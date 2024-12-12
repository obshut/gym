package by.mitsko.gymback.repository;

import by.mitsko.gymback.domain.model.Comment;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.UUID;

public interface CommentRepository extends CrudRepository<Comment, UUID> {

    List<Comment> findAllByOrderByCreatedAtDesc();

}
