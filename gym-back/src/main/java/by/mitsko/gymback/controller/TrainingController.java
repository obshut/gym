package by.mitsko.gymback.controller;

import by.mitsko.gymback.domain.dto.TrainingDto;
import by.mitsko.gymback.domain.dto.TrainingList;
import by.mitsko.gymback.service.TrainingService;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.sun.istack.NotNull;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import static by.mitsko.gymback.auth.constants.SecurityConfigurationConstants.Roles.CUSTOMER;
import static by.mitsko.gymback.auth.constants.SecurityConfigurationConstants.Roles.TRAINER;

@RestController
@RequestMapping("/trainings")
@RequiredArgsConstructor
public class TrainingController {

    private final TrainingService trainingService;

    @GetMapping("/{trainerId}/trainer")
    @Secured(TRAINER)
    public List<TrainingDto> getTrainerCalendar(@PathVariable UUID trainerId, @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate) {
        return trainingService.getTrainersCalendar(trainerId, startDate);
    }

    @GetMapping("/{clientId}/client")
    @Secured(CUSTOMER)
    public List<TrainingDto> getClientCalendar(@PathVariable UUID clientId, @RequestParam @NotNull @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate) {
        return trainingService.getClientsCalender(clientId, startDate);
    }

    @GetMapping("/{trainerId}/trainer/list")
    public List<TrainingList> getTrainings(@PathVariable UUID trainerId, @RequestParam @NotNull @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate) {
        return trainingService.getTrainings(trainerId, startDate);
    }

    @PostMapping
    @Secured(CUSTOMER)
    public void addTraining(@RequestBody TrainingDto trainingDto) {
        trainingService.add(trainingDto);
    }


}
