package by.mitsko.gymback.service.impl;

import by.mitsko.gymback.domain.dto.TrainingDto;
import by.mitsko.gymback.domain.dto.TrainingList;
import by.mitsko.gymback.domain.model.Training;
import by.mitsko.gymback.domain.model.User;
import by.mitsko.gymback.exception.EntityAlreadyExistsException;
import by.mitsko.gymback.exception.EntityNotFoundException;
import by.mitsko.gymback.repository.TrainingRepository;
import by.mitsko.gymback.repository.UserRepository;
import by.mitsko.gymback.service.TrainingService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

@Service
@RequiredArgsConstructor
public class TrainingServiceImpl implements TrainingService {

    private final UserRepository userRepository;
    private final TrainingRepository trainingRepository;

    @Override
    public List<TrainingDto> getClientsCalender(UUID clientId, LocalDate startDate) {
        User client = userRepository.findById(clientId).orElseThrow(() -> new EntityNotFoundException("Не найден пользователь с id:" + clientId, 404));
        List<Training> trainings = trainingRepository.getTrainingsByClientAndStartTimeBetween(client, startDate.atStartOfDay(), startDate.plusDays(7).atStartOfDay());
        return trainings.stream().map(TrainingDto::new).toList();
    }

    @Override
    public List<TrainingDto> getTrainersCalendar(UUID trainerId, LocalDate startDate) {
        User trainer = userRepository.findById(trainerId).orElseThrow(() -> new EntityNotFoundException("Не найден пользователь с id:" + trainerId, 404));
        List<Training> trainings = trainingRepository.getTrainingsByTrainerAndStartTimeBetween(trainer, startDate.atStartOfDay(), startDate.plusDays(7).atStartOfDay());
        return trainings.stream().map(TrainingDto::new).toList();
    }

    @Override
    public void add(TrainingDto dto) {
        User client = userRepository.findById(dto.getClientId()).orElseThrow(() -> new EntityNotFoundException("Не найден пользователь с id:" + dto.getClientId(), 404));
        User trainer = userRepository.findById(dto.getTrainerId()).orElseThrow(() -> new EntityNotFoundException("Не найден пользователь с id:" + dto.getTrainerId(), 404));
        if (trainingRepository.existsByClientAndTrainerAndStartTime(client, trainer, dto.getStartTime())) {
            throw new EntityAlreadyExistsException("Запись на это время уже существует", 409);
        }
        if (trainingRepository.existsByTrainerAndStartTime(trainer, dto.getStartTime())) {
            throw new EntityAlreadyExistsException("Этот тренер уже занят в это время", 409);
        }

        Training training = new Training();
        training.setId(UUID.randomUUID());
        training.setTrainer(trainer);
        training.setClient(client);
        training.setStartTime(dto.getStartTime());

        trainingRepository.save(training);
    }

    @Override
    public List<TrainingList> getTrainings(UUID trainerId, LocalDate startDate) {
        List<TrainingList> result = new ArrayList<>();

//        Map<LocalDate, List<LocalDateTime>> result = new HashMap<>();
        User trainer = userRepository.findById(trainerId).orElseThrow(() -> new EntityNotFoundException("Не найден пользователь с id:" + trainerId, 404));
        List<Training> trainings = trainingRepository.getTrainingsByTrainerAndStartTimeBetween(trainer, startDate.atStartOfDay(), startDate.plusDays(7).atStartOfDay());

        LocalDate endDate = startDate.plusDays(7);
        LocalDate current = startDate;
        while (current.isBefore(endDate)) {
            LocalDate temp = current;
            List<LocalDateTime> list = trainings.stream().map(Training::getStartTime).filter(startTime -> startTime.toLocalDate().equals(temp)).toList();
//            result.put(current, list);
            TrainingList trainingList = new TrainingList();
            trainingList.setDate(current);
            trainingList.setTime(list);
            result.add(trainingList);
            current = current.plusDays(1);
        }

        return result;
    }
}
