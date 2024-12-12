package by.mitsko.gymback.service;

import by.mitsko.gymback.domain.model.User;

public interface UserService {

    User getByEmail(final String email);

}
