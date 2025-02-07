package dev.library.backend.config;

import dev.library.backend.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.UserDetailsService;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfiguration {
    private final UserRepository userRepository;
    @Bean
    public UserDetailsService userDetailsService() {
        return this.userRepository::findByUsername;
    }
}
