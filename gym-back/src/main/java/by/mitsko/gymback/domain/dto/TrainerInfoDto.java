package by.mitsko.gymback.domain.dto;

import by.mitsko.gymback.domain.model.TrainerInfo;
import lombok.Data;

import java.util.UUID;

@Data
public class TrainerInfoDto {

    private UUID trainerId;

    private String specialisation;

    private String education;

    private String achievement;

    private String experience;

    private String instagram;

    private String phone;

    private String position;

    private String name;

    public TrainerInfoDto(TrainerInfo trainerInfo) {
        this.trainerId = trainerInfo.getTrainer().getId();
        this.specialisation = trainerInfo.getSpecialisation();
        this.education = trainerInfo.getEducation();
        this.achievement = trainerInfo.getAchievement();
        this.experience = trainerInfo.getExperience();
        this.instagram = trainerInfo.getInstagram();
        this.phone = trainerInfo.getPhone();
        this.position = trainerInfo.getPosition();
        this.name = trainerInfo.getTrainer().getName();
    }

    public TrainerInfoDto() {
    }
}
