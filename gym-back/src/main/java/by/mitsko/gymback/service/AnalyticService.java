package by.mitsko.gymback.service;

import java.time.LocalDate;
import java.util.Map;

public interface AnalyticService {

    Map<String, Map<LocalDate, Long>> getTrainingsAnalytic();

}
