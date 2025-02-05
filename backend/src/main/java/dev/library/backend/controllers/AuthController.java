package dev.library.backend.controllers;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.library.backend.models.User;
import dev.library.backend.models.enums.Role;
import dev.library.backend.repositories.UserRepository;
import dev.library.backend.requests.RegisterRequest;
import dev.library.backend.services.UserService;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/auth")
public class AuthController {
    
    private AuthenticationManager authenticationManager;
    private UserService userService;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public AuthController(UserService userService , AuthenticationManager authenticationManager , PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest registerRequest) {

        if (this.userService.findUser(registerRequest.getUsername()) != null) {
            return new ResponseEntity<>("Username is taken !" , HttpStatus.BAD_REQUEST);
        }
        User user = new User();

        user.setUsername(registerRequest.getUsername());
        user.setFullName(registerRequest.getFullName());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(this.passwordEncoder.encode(registerRequest.getPassword()));
        user.setRole(Role.USER);

        this.userService.create(user);

        return new ResponseEntity<>("User Registered Successfully" , HttpStatus.OK);
    }
}
