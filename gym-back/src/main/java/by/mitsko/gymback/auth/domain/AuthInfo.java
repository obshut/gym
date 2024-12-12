package by.mitsko.gymback.auth.domain;

import by.mitsko.gymback.domain.enums.Role;
import by.mitsko.gymback.domain.model.User;
import lombok.Data;
import lombok.Getter;

import java.util.UUID;

@Getter
public class AuthInfo {
    private final UUID id;
    private final Role role;

    public AuthInfo(User user) {
        this.id = user.getId();
        this.role = user.getRole();
    }
}
