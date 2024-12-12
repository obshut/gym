package by.mitsko.gymback.service.impl;

import by.mitsko.gymback.domain.model.User;
import by.mitsko.gymback.exception.EntityNotFoundException;
import by.mitsko.gymback.repository.UserRepository;
import by.mitsko.gymback.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public User getByEmail(final String email) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new EntityNotFoundException("Не найден пользователя с электронной почтой " + email, 404);
        }
        return user;
    }

}
