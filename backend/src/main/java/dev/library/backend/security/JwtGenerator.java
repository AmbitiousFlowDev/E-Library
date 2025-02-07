package dev.library.backend.security;

import dev.library.backend.config.security.constants.SecurityConstants;
import io.jsonwebtoken.*;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import java.util.Date;

@Component
public class JwtGenerator {
    public String generateToken(Authentication auth) {
        String username = auth.getName();
        Date currentDate = new Date();
        Date expirationDate = new Date(currentDate.getTime() + SecurityConstants.JWT_TOKEN_EXPIRATION_TIME);
        return Jwts.builder().setSubject(username).setIssuedAt(new Date()).signWith(SignatureAlgorithm.HS512 , SecurityConstants.JWT_SECRET).compact();
    }
    public String getUsernameFromToken(String token) {
        Claims claims = Jwts.parser().setSigningKey(SecurityConstants.JWT_SECRET).parseClaimsJws(token).getBody();
        return claims.getSubject();
    }
    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(SecurityConstants.JWT_SECRET).parseClaimsJws(token);
            return true;
        } catch (ExpiredJwtException e) {
            throw new AuthenticationCredentialsNotFoundException("JWT token has expired");
        } catch (SignatureException | MalformedJwtException e) {
            throw new AuthenticationCredentialsNotFoundException("Invalid JWT token");
        } catch (Exception e) {
            throw new AuthenticationCredentialsNotFoundException("JWT token verification failed");
        }
    }
}
