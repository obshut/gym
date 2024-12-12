package by.mitsko.gymback.domain.dto;

import lombok.Data;

@Data
public class AuthDto {

    private UserDto userDto;

    private String token;

    public AuthDto(UserDto userDto, String token) {
        this.userDto = userDto;
        this.token = token;
    }

}
