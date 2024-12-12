package by.mitsko.gymback.domain.dto;

import lombok.Data;

@Data
public class ExceptionDto {

    private int status;
    private String message;
    private Object content;

    public ExceptionDto(int status, String message) {
        this.status = status;
        this.message = message;
    }

    public ExceptionDto(int status, String message, Object content) {
        this.status = status;
        this.message = message;
        this.content = content;
    }

}
