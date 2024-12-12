package by.mitsko.gymback.exception;

public abstract class CustomException extends RuntimeException {

    protected String message;

    public CustomException(String message) {
        super(message);
        this.message = message;
    }

    public abstract int getStatus();

    public abstract String message();

    public Object getContent() {
        return null;
    }

}
