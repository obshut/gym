package by.mitsko.gymback.auth.command;

import by.mitsko.gymback.auth.domain.AuthInfo;
import by.mitsko.gymback.auth.domain.AuthenticationToken;
import by.mitsko.gymback.auth.jwt.JwtUserDetailsService;
import by.mitsko.gymback.auth.jwt.JwtProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;


@Component
public class AuthenticationAction {

    private final JwtUserDetailsService userDetailsService;
    private final JwtProvider jwtProvider;

    @Autowired
    public AuthenticationAction(JwtUserDetailsService userDetailsService,
                                JwtProvider jwtProvider) {
        this.userDetailsService = userDetailsService;
        this.jwtProvider = jwtProvider;
    }


    public Authentication authenticate(String token) {

//        if(!jwtProvider.validateToken(token)) {
//            throw new AuthException(TOKEN_IS_EXPIRED);
//        }
        jwtProvider.validateToken(token);

        AuthInfo authInfo = userDetailsService.loadUserByUsername(jwtProvider.getLoginFromToken(token));

        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_" + authInfo.getRole()));

        return new AuthenticationToken(authInfo, authorities);
    }
}
