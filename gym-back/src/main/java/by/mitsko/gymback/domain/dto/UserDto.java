package by.mitsko.gymback.domain.dto;

import by.mitsko.gymback.domain.enums.Role;
import by.mitsko.gymback.domain.model.User;
import com.sun.istack.NotNull;
import lombok.Data;

import java.util.UUID;

@Data
public class UserDto {

    private UUID userId;

    private String password;

    private Role role;

    @NotNull
    private String email;

    public UserDto(User user) {
        this.userId = user.getId();
        this.email = user.getEmail();
        this.role = user.getRole();
    }

    public UserDto() {
    }
}
