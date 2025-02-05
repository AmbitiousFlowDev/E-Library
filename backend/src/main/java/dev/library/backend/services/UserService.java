package dev.library.backend.services;

import java.util.Collection;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import dev.library.backend.models.User;
import dev.library.backend.models.enums.Role;
import dev.library.backend.repositories.UserRepository;

@Service
public class UserService implements UserDetailsService{
    private final UserRepository userRepository;
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = this.userRepository.findByUsername(username);
        return new org.springframework.security.core.userdetails.User(user.getUsername() , user.getPassword() , this.mapRolesToAuthorities(user.getRole()));
    }
    private Collection<GrantedAuthority> mapRolesToAuthorities(Role role) {
        return Collections.singletonList(new SimpleGrantedAuthority(role.name()));
    }
    public User create(User user) {
        return this.userRepository.save(user);
    }
    public User findUser(String username) {
        return this.userRepository.findByUsername(username);
    }
}
