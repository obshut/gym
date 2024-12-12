package by.mitsko.gymback.controller;

import by.mitsko.gymback.domain.dto.TrainerInfoDto;
import by.mitsko.gymback.service.TrainerInfoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/trainer/info")
@RequiredArgsConstructor
public class TrainerInfoController {

    private final TrainerInfoService trainerInfoService;

    @GetMapping
    public List<TrainerInfoDto> getTrainerInfo() {
        return trainerInfoService.getAll();
    }

    @GetMapping("/{trainerId}")
    public TrainerInfoDto getTrainer(@PathVariable UUID trainerId) {
        return trainerInfoService.getTrainer(trainerId);
    }

}
