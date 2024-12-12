package by.mitsko.gymback.repository;

import by.mitsko.gymback.domain.model.TrainerInfo;
import by.mitsko.gymback.domain.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;
import java.util.UUID;

public interface TrainerInfoRepository extends CrudRepository<TrainerInfo, UUID> {
    Optional<TrainerInfo> findByTrainer(User trainer);
}
