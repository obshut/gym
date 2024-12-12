package by.mitsko.gymback.exception;

import org.springframework.security.core.AuthenticationException;

public class AuthException extends AuthenticationException {

    private int status;

    public AuthException(String message, int status) {
        super(message);
        this.status = status;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}
