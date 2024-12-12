package by.mitsko.gymback.exception;

public class EntityAlreadyExistsException extends GeneralException {


    public EntityAlreadyExistsException(String message, int status) {
        super(message, status);
    }
}
