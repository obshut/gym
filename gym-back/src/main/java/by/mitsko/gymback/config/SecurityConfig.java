package by.mitsko.gymback.config;

import by.mitsko.gymback.auth.command.AuthenticationAction;
import by.mitsko.gymback.auth.filter.AuthFilter;
import by.mitsko.gymback.exception.AuthException;
import by.mitsko.gymback.exception.GeneralException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(
        securedEnabled = true
)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final AuthenticationAction authenticationAction;


    @Autowired
    public SecurityConfig(AuthenticationAction authenticationAction) {
        this.authenticationAction = authenticationAction;

    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .cors().and()
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .logout().disable()
                .addFilterBefore(
                        new AuthFilter("/**", authenticationAction),
                        UsernamePasswordAuthenticationFilter.class)
                .exceptionHandling().authenticationEntryPoint(((httpServletRequest, httpServletResponse, e) -> {
                    if (e instanceof AuthException) {
                        throw new GeneralException(e.getMessage(), ((AuthException) e).getStatus());
                    }
                    throw new GeneralException("User can't be authorized", 401);
                })
        );

    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        web
                .ignoring()
                .antMatchers(
                        "/auth/signIn",
                        "/auth/signUp",
                        "/swagger*/**",
                        "/v2/api-docs",
                        "/sockets/**",
                        "/webjars/**"
                )
                .antMatchers(HttpMethod.OPTIONS, "/**");
    }

    @Bean
    public BCryptPasswordEncoder bCrypt() {
        return new BCryptPasswordEncoder();
    }
}
