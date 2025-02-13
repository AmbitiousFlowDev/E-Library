package dev.library.backend.controllers;

import dev.library.backend.dto.requests.AuthenticationRequestDto;
import dev.library.backend.dto.requests.RegisterRequestDto;
import dev.library.backend.dto.response.AuthenticationResponseDto;
import dev.library.backend.services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthenticationController {
    private final AuthenticationService authenticationService;
    @Autowired
    public AuthenticationController(AuthenticationService authenticationService)
    {
        this.authenticationService = authenticationService;
    }
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponseDto> register(@RequestBody RegisterRequestDto request)
    {
        try
        {
            return new ResponseEntity(this.authenticationService.register(request) , HttpStatus.CREATED);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponseDto> authenticate(@RequestBody AuthenticationRequestDto request)
    {
        try
        {
            return ResponseEntity.ok(this.authenticationService.authenticate(request));
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
