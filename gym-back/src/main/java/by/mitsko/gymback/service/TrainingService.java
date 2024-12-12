package by.mitsko.gymback.service;

import by.mitsko.gymback.domain.dto.TrainingDto;
import by.mitsko.gymback.domain.dto.TrainingList;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public interface TrainingService {

    List<TrainingDto> getClientsCalender(UUID clientId, LocalDate startDate);

    List<TrainingDto> getTrainersCalendar(UUID trainerId, LocalDate startDate);

    void add(TrainingDto dto);

    List<TrainingList> getTrainings(UUID trainerId, LocalDate startDate);

}
