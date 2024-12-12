package by.mitsko.gymback.controller;

import by.mitsko.gymback.service.AnalyticService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.Map;

@RestController
@RequestMapping("/analytic")
@RequiredArgsConstructor
public class AnalyticController {

    private final AnalyticService analyticService;

    @GetMapping
    public Map<String, Map<LocalDate, Long>> getTrainingsAnalytic() {
        return analyticService.getTrainingsAnalytic();
    }

}
