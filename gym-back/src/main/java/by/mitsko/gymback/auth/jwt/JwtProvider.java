package by.mitsko.gymback.auth.jwt;

import by.mitsko.gymback.exception.AuthException;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtProvider {

    private static final Logger logger = LoggerFactory.getLogger(JwtProvider.class);

    @Value("$(jwt.secret)")
    private String jwtSecret;

    public String generateToken(String email) {
        Date now = new Date();
        Date validity = new Date(now.getTime() + 900000000);
        return Jwts.builder()
                .setSubject(email)
                .setExpiration(validity)
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
    }

    public void validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token);
        } catch (ExpiredJwtException expEx) {
            logger.error("Срок действия токена истек");
            throw new AuthException("Срок действия токена истек", 401);
        } catch (UnsupportedJwtException unsEx) {
            logger.error("Неподдерживаемый jwt");
            throw new AuthException("Неподдерживаемый jwt", 401);
        } catch (MalformedJwtException mjEx) {
            logger.error("Неверный формат jwt");
            throw new AuthException("Неверный формат jwt", 401);
        } catch (Exception e) {
            logger.error("Недействительный токен");
            throw new AuthException("Недействительный токен", 401);
        }
    }

    public String getLoginFromToken(String token) {
        Claims claims = Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody();
        return claims.getSubject();
    }
}
