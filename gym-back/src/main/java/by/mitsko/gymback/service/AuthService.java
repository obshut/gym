package by.mitsko.gymback.service;

import by.mitsko.gymback.domain.dto.AuthDto;
import by.mitsko.gymback.domain.dto.RegistrationDto;
import by.mitsko.gymback.domain.dto.UserDto;

public interface AuthService {

    AuthDto signUp(final RegistrationDto registrationDto);

    AuthDto signIn(final UserDto authDto);

}
