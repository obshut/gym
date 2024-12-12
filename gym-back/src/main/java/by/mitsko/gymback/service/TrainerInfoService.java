package by.mitsko.gymback.service;

import by.mitsko.gymback.domain.dto.TrainerInfoDto;

import java.util.List;
import java.util.UUID;

public interface TrainerInfoService {

    List<TrainerInfoDto> getAll();

    TrainerInfoDto getTrainer(UUID trainerId);

}
