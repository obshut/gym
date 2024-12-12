package by.mitsko.gymback.domain.dto;

import by.mitsko.gymback.domain.model.Training;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
public class TrainingDto {

    private UUID trainerId;

    private UUID clientId;

    private String clientName;

    private String trainerName;

    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private LocalDateTime startTime;

    public TrainingDto(Training training) {
        this.trainerId = training.getTrainer().getId();
        this.clientId = training.getClient().getId();
        this.startTime = training.getStartTime();
        this.clientName = training.getClient().getName();
        this.trainerName = training.getTrainer().getName();
    }

    public TrainingDto() {
    }
}
