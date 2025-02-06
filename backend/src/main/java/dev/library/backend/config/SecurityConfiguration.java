package dev.library.backend.config;

import dev.library.backend.security.JwtAuthenticationEntryPoint;
import dev.library.backend.security.JwtAuthenticationFilter;
import dev.library.backend.security.JwtGenerator;
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
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {
    private final JwtAuthenticationEntryPoint authenticationEntryPoint;
    @Autowired
    public SecurityConfiguration(JwtAuthenticationEntryPoint authenticationEntryPoint) {
        this.authenticationEntryPoint = authenticationEntryPoint;
    }
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
         http.csrf(AbstractHttpConfigurer::disable)
                 .authorizeHttpRequests(
                         authorizeRequests -> {
                             authorizeRequests
                                     .requestMatchers(HttpMethod.POST , "/api/v1/auth/**")
                                     .permitAll()
                                     .requestMatchers(HttpMethod.GET , "/api/v1/**").permitAll()
                                     .requestMatchers(HttpMethod.POST, "/api/v1/books/create").hasRole("LIBRARIAN")
                                     .requestMatchers(HttpMethod.GET, "/api/v1/categories/**").hasAnyRole("USER", "LIBRARIAN")
                                     .requestMatchers(HttpMethod.POST, "/api/v1/categories/create").hasRole("LIBRARIAN")
                                     .requestMatchers(HttpMethod.POST, "/api/v1/**").authenticated()
                                     .anyRequest().denyAll();
                         }
                 )
                 .exceptionHandling(
                         exception -> exception.authenticationEntryPoint(authenticationEntryPoint)
                 )
                .sessionManagement(
                        session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                ).addFilterBefore(
                         jwtAuthenticationFilter() ,
                         UsernamePasswordAuthenticationFilter.class
                 );
        return http.build();
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
    public JwtAuthenticationFilter jwtAuthenticationFilter() {
        return new JwtAuthenticationFilter();
    }
}
