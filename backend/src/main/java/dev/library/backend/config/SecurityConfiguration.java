package dev.library.backend.config;

import dev.library.backend.security.JwtAuthenticationEntryPoint;
import dev.library.backend.security.JwtAuthenticationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import dev.library.backend.services.UserService;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {


    private final JwtAuthenticationEntryPoint jwtAuthEntryPoint;
    private final UserService userService;

    @Autowired
    public SecurityConfiguration(UserService userService , JwtAuthenticationEntryPoint jwtAuthEntryPoint) {
        this.jwtAuthEntryPoint = jwtAuthEntryPoint;
        this.userService = userService;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(register -> {
                    register.requestMatchers(HttpMethod.GET , "/api/v1/**").permitAll()
                            .requestMatchers(HttpMethod.GET , "/api/v1/**").permitAll()
                            .requestMatchers("/api/v1/auth/**").permitAll()
                            .requestMatchers(HttpMethod.POST, "/api/v1/books/create").hasRole("LIBRARIAN")
                            .requestMatchers(HttpMethod.GET, "/api/v1/categories/**").permitAll()
                            .requestMatchers(HttpMethod.POST, "/api/v1/categories/create").hasRole("LIBRARIAN")
                            .requestMatchers(HttpMethod.POST, "/api/v1/**").authenticated();

                })
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .build();
    }
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    @Bean
    public JwtAuthenticationFilter authenticationFilter() {
        return new JwtAuthenticationFilter();
    }
}
