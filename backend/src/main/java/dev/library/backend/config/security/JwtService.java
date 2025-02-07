package dev.library.backend.config.security;

import dev.library.backend.constants.SecurityConstants;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Base64;

// Note : PLEASE WORK ! I BEG OF YOU :(

@Service
public class JwtService {
    public String extractUsername(String token) {
        return null;
    }
    private Claim extractAllClaims(String token) {
        return Jwts.parser().setSigningKey(this.getSignInKey()).parseClaimsJws(token).getBody();
    }
    private Key getSignInKey() {
        byte[] keyByte = Base64.getDecoder().decode(SecurityConstants.JWT_SECRET);
        return Keys
    }
}
