package by.mitsko.gymback.repository;

import by.mitsko.gymback.domain.model.Training;
import by.mitsko.gymback.domain.model.User;
import org.springframework.data.repository.CrudRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

public interface TrainingRepository extends CrudRepository<Training, UUID> {

    boolean existsByClientAndTrainerAndStartTime(User client, User trainer, LocalDateTime startTime);

    boolean existsByTrainerAndStartTime(User trainer, LocalDateTime startTime);

    List<Training> getTrainingsByClientAndStartTimeBetween(User client, LocalDateTime startTime, LocalDateTime endTime);

    List<Training> getTrainingsByTrainerAndStartTimeBetween(User trainer, LocalDateTime startTime, LocalDateTime endTime);

}
