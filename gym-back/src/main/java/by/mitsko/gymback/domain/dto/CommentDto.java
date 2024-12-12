package by.mitsko.gymback.domain.dto;

import by.mitsko.gymback.domain.model.Comment;
import lombok.Data;

import java.util.UUID;

@Data
public class CommentDto {

    private String text;

    private UUID authorId;

    private String authorName;

    public CommentDto(Comment comment) {
        this.text = comment.getText();
        this.authorId = comment.getAuthor().getId();
        this.authorName = comment.getAuthor().getName();
    }

    public CommentDto() {
    }
}
