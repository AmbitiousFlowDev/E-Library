package dev.library.backend.controllers;

import dev.library.backend.dto.AuthResponseDTO;
import dev.library.backend.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.library.backend.requests.LoginRequest;
import dev.library.backend.requests.RegisterRequest;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/auth")
public class AuthController {
    private final AuthService authService;
    @Autowired
    public AuthController(AuthService authService) {
       this.authService = authService;
    }
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest registerRequest) {
        boolean result = this.authService.register(registerRequest);
        if (!result) {
            return new ResponseEntity<>("Registration error", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Registration successful", HttpStatus.OK);
    }
    @PostMapping("/login")
    public ResponseEntity<AuthResponseDTO> login(@RequestBody LoginRequest loginRequest) {
        AuthResponseDTO result = this.authService.login(loginRequest);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
