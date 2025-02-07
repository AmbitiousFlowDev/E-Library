package dev.library.backend.dto.requests;

import lombok.Data;

@Data
public class LoginRequestDTO {
    private String username;
    private String password;
}
