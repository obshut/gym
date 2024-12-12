package by.mitsko.gymback.repository;

import by.mitsko.gymback.domain.enums.Role;
import by.mitsko.gymback.domain.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.UUID;

public interface UserRepository extends CrudRepository<User, UUID> {

    User findByEmail(String email);

    List<User> findAllByRole(Role role);

}
