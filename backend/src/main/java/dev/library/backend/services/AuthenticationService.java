package dev.library.backend.services;

import dev.library.backend.config.security.JwtService;
import dev.library.backend.dto.requests.AuthenticationRequestDto;
import dev.library.backend.dto.requests.RegisterRequestDto;
import dev.library.backend.dto.response.AuthenticationResponseDto;
import dev.library.backend.models.enums.Role;
import dev.library.backend.repositories.UserRepository;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final JwtService jwtService;
    @Autowired
    public AuthenticationService(UserRepository userRepository , PasswordEncoder passwordEncoder , JwtService jwtService)
    {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    public AuthenticationResponseDto authenticate(AuthenticationRequestDto request) {
        return null;
    }
    public AuthenticationResponseDto register(RegisterRequestDto request) {
        var user = User.builder()
                .username(request.getUsername())
                .password(this.passwordEncoder.encode(request.getPassword()))
                .roles("USER")
                .build();
        this.userRepository.save(user);
        var jwtToken = this.jwtService.generateToken(user);
        return AuthenticationResponseDto.builder().token(jwtToken).build();
    }
}
