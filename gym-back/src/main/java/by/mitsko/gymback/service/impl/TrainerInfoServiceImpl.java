package by.mitsko.gymback.service.impl;

import by.mitsko.gymback.domain.dto.TrainerInfoDto;
import by.mitsko.gymback.domain.model.User;
import by.mitsko.gymback.exception.EntityNotFoundException;
import by.mitsko.gymback.repository.TrainerInfoRepository;
import by.mitsko.gymback.repository.UserRepository;
import by.mitsko.gymback.service.TrainerInfoService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.StreamSupport;

@Service
@RequiredArgsConstructor
public class TrainerInfoServiceImpl implements TrainerInfoService {

    private final TrainerInfoRepository trainerInfoRepository;
    private final UserRepository userRepository;

    @Override
    public List<TrainerInfoDto> getAll() {
        return StreamSupport.stream(trainerInfoRepository.findAll().spliterator(), false).map(TrainerInfoDto::new).toList();
    }

    @Override
    public TrainerInfoDto getTrainer(UUID trainerId) {
        User trainer = userRepository.findById(trainerId).orElseThrow(() -> new EntityNotFoundException("Не найден пользователь с id:" + trainerId, 404));
        return trainerInfoRepository.findByTrainer(trainer).map(TrainerInfoDto::new).orElseThrow(() -> new EntityNotFoundException("Не найден тренер с id:" + trainerId, 404));
    }
}
