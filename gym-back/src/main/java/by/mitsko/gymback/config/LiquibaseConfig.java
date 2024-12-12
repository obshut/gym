package by.mitsko.gymback.config;

import by.mitsko.gymback.config.properties.LiquibaseProperties;
import liquibase.integration.spring.SpringLiquibase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
@EnableConfigurationProperties
public class LiquibaseConfig {

    private final DataSource dataSource;
    private final LiquibaseProperties liquibaseProperties;

    @Autowired
    public LiquibaseConfig(DataSource dataSource, LiquibaseProperties liquibaseProperties) {
        this.dataSource = dataSource;
        this.liquibaseProperties = liquibaseProperties;
    }

    @Bean
    public SpringLiquibase liquibase() {
        SpringLiquibase liquibase = new SpringLiquibase();
        liquibase.setDataSource(dataSource);
        liquibase.setChangeLog(liquibaseProperties.getChangeLog());
        liquibase.setContexts(liquibaseProperties.getContexts());
        liquibase.setDefaultSchema(liquibaseProperties.getDefaultSchema());

        return liquibase;
    }
}
