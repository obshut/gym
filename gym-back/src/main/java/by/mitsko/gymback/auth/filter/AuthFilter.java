package by.mitsko.gymback.auth.filter;

import by.mitsko.gymback.auth.command.AuthenticationAction;
import by.mitsko.gymback.auth.domain.AuthenticationToken;
import by.mitsko.gymback.domain.dto.ExceptionDto;
import by.mitsko.gymback.exception.AuthException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.util.MimeTypeUtils;
import org.springframework.util.ObjectUtils;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static org.springframework.http.HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN;
import static org.springframework.web.cors.CorsConfiguration.ALL;

public class AuthFilter extends AbstractAuthenticationProcessingFilter {

    private static final String AUTHORIZATION = "Authorization";

    private final AuthenticationAction authenticationAction;

    public AuthFilter(String defaultFilterProcessesUrl, AuthenticationAction authenticationAction) {
        super(new AntPathRequestMatcher(defaultFilterProcessesUrl));
        this.authenticationAction = authenticationAction;
    }


    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        String token = request.getHeader(AUTHORIZATION);

        if (ObjectUtils.isEmpty(token)) {
            throw new AuthException("Authorization header is required.", 401);
        }

        return authenticationAction.authenticate(token);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        if (authResult instanceof AuthenticationToken && (((AuthenticationToken) authResult).getAuthInfo() != null || authResult.isAuthenticated())) {
            SecurityContextHolder.getContext().setAuthentication(authResult);
        }

        chain.doFilter(request, response);
    }

    private String convertObjectToJson(Object object) throws JsonProcessingException {
        if (object == null) {
            return null;
        }
        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(object);
    }

    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response, AuthenticationException failed) throws IOException {
        if (failed instanceof AuthException) {
            AuthException e = ((AuthException) failed);
            response.setStatus(e.getStatus());
            response.setContentType(MimeTypeUtils.APPLICATION_JSON_VALUE);
            response.setHeader(ACCESS_CONTROL_ALLOW_ORIGIN, ALL);
            response.getWriter()
                    .write(convertObjectToJson(new ExceptionDto(e.getStatus(), e.getMessage())));
        } else {
            response.sendError(401, failed.getMessage());
        }
    }
}
