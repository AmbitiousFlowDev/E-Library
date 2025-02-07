package dev.library.backend.services;

import dev.library.backend.dto.response.AuthResponseDTO;
import dev.library.backend.models.User;
import dev.library.backend.models.enums.Role;
import dev.library.backend.dto.requests.LoginRequestDTO;
import dev.library.backend.dto.requests.RegisterRequestDTO;
import dev.library.backend.security.JwtGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;
    private final JwtGenerator jwtGenerator;
    private final UserService userService;
    @Autowired
    public AuthService(
            AuthenticationManager authenticationManager,
            PasswordEncoder passwordEncoder,
            UserService userService ,
            JwtGenerator jwtGenerator
    ) {
        this.authenticationManager = authenticationManager;
        this.passwordEncoder = passwordEncoder;
        this.jwtGenerator = jwtGenerator;
        this.userService = userService;
    }

    public AuthResponseDTO login(LoginRequestDTO loginRequestDTO) {
        Authentication authentication = this.authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequestDTO.getUsername(), loginRequestDTO.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = this.jwtGenerator.generateToken(authentication);
        return new AuthResponseDTO(token);
    }

    public boolean register(RegisterRequestDTO registerRequestDTO) {
        User user = new User();
        if (this.userService.findUser(registerRequestDTO.getUsername()) != null) {
            return false;
        }
        user.setUsername(registerRequestDTO.getUsername());
        user.setFullName(registerRequestDTO.getFullName());
        user.setEmail(registerRequestDTO.getEmail());
        user.setPassword(this.passwordEncoder.encode(registerRequestDTO.getPassword()));
        user.setRole(Role.USER);
        this.userService.create(user);
        return true;
    }
}
