package by.mitsko.gymback.domain.model;

import lombok.Data;

import javax.persistence.*;
import java.util.UUID;

@Data
@Entity
@Table(name = "trainer_info")
public class TrainerInfo {

    @Id
    @Column(name = "id")
    private UUID id;

    @Column(name = "specialisation")
    private String specialisation;

    @Column(name = "education")
    private String education;

    @Column(name = "achievement")
    private String achievement;

    @Column(name = "experience")
    private String experience;

    @Column(name = "instagram")
    private String instagram;

    @Column(name = "phone")
    private String phone;

    @Column(name = "position")
    private String position;

    @OneToOne
    @JoinColumn(referencedColumnName = "id", name = "trainer")
    private User trainer;

}
