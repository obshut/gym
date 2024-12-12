package by.mitsko.gymback.controller;

import by.mitsko.gymback.domain.dto.ExceptionDto;
import by.mitsko.gymback.exception.CustomException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@Slf4j
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(CustomException.class)
    protected ResponseEntity<Object> handle(CustomException e, WebRequest webRequest) {
        log.error(e.getMessage());
        ExceptionDto exceptionDto = new ExceptionDto(e.getStatus(), e.message(), e.getContent());

        return ResponseEntity
                .status(e.getStatus())
                .body(exceptionDto);
    }

//    @Override
//    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
//        String[] errors = ex.getBindingResult().getAllErrors().stream().map(DefaultMessageSourceResolvable::getDefaultMessage).toArray(String[]::new);
//
//        ExceptionDto exceptionDto = new ExceptionDto(
//                MODEL_VALIDATION_ERROR.getStatus(),
//                ex.getBindingResult().getFieldError().getField() + " " + String.join(", ", errors)
//        );
//
//        return ResponseEntity
//                .status(exceptionDto.getStatus())
//                .body(exceptionDto);
//    }
}
