package by.mitsko.gymback.service.impl;

import by.mitsko.gymback.auth.jwt.JwtProvider;
import by.mitsko.gymback.domain.dto.AuthDto;
import by.mitsko.gymback.domain.dto.RegistrationDto;
import by.mitsko.gymback.domain.dto.UserDto;
import by.mitsko.gymback.domain.enums.Role;
import by.mitsko.gymback.domain.model.User;
import by.mitsko.gymback.exception.EntityAlreadyExistsException;
import by.mitsko.gymback.exception.ValidationException;
import by.mitsko.gymback.repository.UserRepository;
import by.mitsko.gymback.service.AuthService;
import by.mitsko.gymback.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final UserService userService;
    private final BCryptPasswordEncoder passwordEncoder;
    private final JwtProvider jwtProvider;

    @Override
    public AuthDto signUp(RegistrationDto registrationDto) {
        if (userRepository.findByEmail(registrationDto.getEmail()) != null) {
            throw new EntityAlreadyExistsException("Пользователь с такой почтой " + registrationDto.getEmail() + " уже существует", 409);
        }

        User user = new User();
        user.setId(UUID.randomUUID());
        user.setRole(Role.CUSTOMER);
        user.setName(registrationDto.getName());
        user.setPassword(passwordEncoder.encode(registrationDto.getPassword()));
        user.setEmail(registrationDto.getEmail());

        user = userRepository.save(user);

        String token = jwtProvider.generateToken(registrationDto.getEmail());
        return new AuthDto(new UserDto(user), token);
    }

    @Override
    public AuthDto signIn(UserDto dto) {
        User user = userService.getByEmail(dto.getEmail());

        if (!passwordEncoder.matches(dto.getPassword(), user.getPassword())) {
            throw new ValidationException("Не верный пароль", 403);
        }

        String token = jwtProvider.generateToken(dto.getEmail());
        return new AuthDto(new UserDto(user), token);
    }
}
