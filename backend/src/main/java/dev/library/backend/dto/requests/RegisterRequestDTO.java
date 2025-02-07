package dev.library.backend.dto.requests;

import lombok.Data;

@Data
public class RegisterRequestDTO {
    private String username;
    private String password;
    private String email;
    private String fullName;
}
