package by.mitsko.gymback.auth.domain;

import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;

import java.util.List;

public class AuthenticationToken extends AbstractAuthenticationToken {
    private AuthInfo authInfo;

    public AuthenticationToken(AuthInfo authInfo, List<GrantedAuthority> authorities) {
        super(authorities);
        setAuthenticated(true);
        this.authInfo = authInfo;
    }

    @Override
    public Object getCredentials() {
        return null;
    }

    @Override
    public Object getPrincipal() {
        return null;
    }

    public AuthInfo getAuthInfo() {
        return authInfo;
    }

    public void setAuthInfo(AuthInfo authInfo) {
        this.authInfo = authInfo;
    }
}
