package by.mitsko.gymback.controller;

import by.mitsko.gymback.domain.dto.AuthDto;
import by.mitsko.gymback.domain.dto.RegistrationDto;
import by.mitsko.gymback.domain.dto.UserDto;
import by.mitsko.gymback.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/signIn")
    public AuthDto signIn(@RequestBody UserDto userDto) {
        return authService.signIn(userDto);
    }

    @PostMapping("/signUp")
    public AuthDto signUp(@RequestBody RegistrationDto dto) {
        return authService.signUp(dto);
    }

}
