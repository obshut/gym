package by.mitsko.gymback.exception;

public class GeneralException extends CustomException {

    private final int status;

    public GeneralException(String message, int status) {
        super(message);
        this.status = status;
    }

    @Override
    public int getStatus() {
        return status;
    }

    @Override
    public String message() {
        return message;
    }
}
