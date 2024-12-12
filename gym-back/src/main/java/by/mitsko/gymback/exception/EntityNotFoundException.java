package by.mitsko.gymback.exception;

public class EntityNotFoundException extends GeneralException {
    public EntityNotFoundException(String message, int status) {
        super(message, status);
    }
}
