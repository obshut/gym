package by.mitsko.gymback.exception;

public class ValidationException extends GeneralException {


    public ValidationException(String message, int status) {
        super(message, status);
    }
}
