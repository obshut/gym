package by.mitsko.gymback.service.impl;

import by.mitsko.gymback.domain.enums.Role;
import by.mitsko.gymback.domain.model.Training;
import by.mitsko.gymback.domain.model.User;
import by.mitsko.gymback.repository.TrainingRepository;
import by.mitsko.gymback.repository.UserRepository;
import by.mitsko.gymback.service.AnalyticService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class AnalyticServiceImpl implements AnalyticService {

    private final UserRepository userRepository;
    private final TrainingRepository trainingRepository;

    @Override
    public Map<String, Map<LocalDate, Long>> getTrainingsAnalytic() {
        List<User> trainers = userRepository.findAllByRole(Role.TRAINER);
        Map<String, Map<LocalDate, Long>> result = new LinkedHashMap<>();

        LocalDate endDate = LocalDate.now();
        LocalDate startDate = endDate.minusMonths(1);

        List<LocalDate> allDates = startDate.datesUntil(endDate.plusDays(1)).sorted().toList();

        trainers.forEach(trainer -> {
            List<Training> trainings = trainingRepository.getTrainingsByTrainerAndStartTimeBetween(trainer,
                    startDate.atStartOfDay(), endDate.atStartOfDay());

            // Группируем события по дню
            Map<LocalDate, Long> eventCountByDate = trainings.stream()
                    .collect(Collectors.groupingBy(
                            training -> training.getStartTime().toLocalDate(), // Группируем по дате
                            Collectors.counting()                    // Считаем количество событий
                    ));

            // Заполняем все дни в месяце с 0, если не было событий
            Map<LocalDate, Long> filledEventCount = new LinkedHashMap<>();

            for (LocalDate date : allDates) {
                // Если события есть для этого дня, добавляем их, иначе ставим 0
                filledEventCount.put(date, eventCountByDate.getOrDefault(date, 0L));
            }

            result.put(trainer.getName(), filledEventCount);
        });
        return result;
    }
}
