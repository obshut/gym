package by.mitsko.gymback.auth.jwt;

import by.mitsko.gymback.auth.domain.AuthInfo;
import by.mitsko.gymback.domain.model.User;
import by.mitsko.gymback.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService {
    private final UserService userService;

    @Autowired
    public JwtUserDetailsService(UserService userService) {
        this.userService = userService;
    }

    public AuthInfo loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userService.getByEmail(username);

        if (user == null) {
            throw new UsernameNotFoundException("Пользователь не найден");
        }

        return new AuthInfo(user);
    }
}
