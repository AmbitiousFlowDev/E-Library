package dev.library.backend.services;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

import dev.library.backend.dto.mappers.UserMapper;
import dev.library.backend.dto.requests.UserRequestDto;
import dev.library.backend.dto.response.UserResponseDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import dev.library.backend.models.User;
import dev.library.backend.models.enums.Role;
import dev.library.backend.repositories.UserRepository;
import jakarta.persistence.EntityNotFoundException;

@Service
public class UserService implements UserDetailsService
{
    private PasswordEncoder passwordEncoder;
    private UserRepository userRepository;
    private UserMapper userMapper;
    @Autowired
    public UserService(UserRepository userRepository , UserMapper userMapper , PasswordEncoder passwordEncoder)
    {
        this.passwordEncoder = passwordEncoder;
        this.userRepository  = userRepository;
        this.userMapper      = userMapper;
    }
    public List<UserResponseDto> getAllUsers()
    {
        return this.userMapper.totoDataTransferObjects(this.userRepository.findAll());
    }
    public UserResponseDto getUser(Long id)
    {
        return this.userRepository.existsById(id) ? this.userMapper.toDataTransferObject(this.userRepository.findById(id).orElseThrow()) : null;
    }
    public UserResponseDto createUser(UserRequestDto userRequestDto)
    {
        User user = User.builder()
                .email(userRequestDto.getEmail())
                .password(this.passwordEncoder.encode(userRequestDto.getPassword()))
                .fullName(userRequestDto.getFullName())
                .role(userRequestDto.getRole())
                .build();

        return this.userMapper.toDataTransferObject(this.userRepository.save(user));
    }
    public UserResponseDto updateUser(UserRequestDto userRequestDto)
    {
        if (!userRepository.existsById(userRequestDto.getId()))
        {
            throw new EntityNotFoundException();
        }
        User user = User.builder().build();
        return this.userMapper.toDataTransferObject(this.userRepository.save(user));
    }
    public void deleteUser(Long id)
    {
        if (!userRepository.existsById(id)) {
            throw new EntityNotFoundException("User not found with id: " + id);
        }
        userRepository.deleteById(id);
    }
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
    {
        User user = this.userRepository.findByUsername(username);
        return new org.springframework.security.core.userdetails
                .User(user.getUsername(),user.getPassword(),this.mapRolesToAuthorities(user.getRole()));
    }
    private Collection<GrantedAuthority> mapRolesToAuthorities(Role role)
    {
        return Collections.singletonList(new SimpleGrantedAuthority(role.name()));
    }
}
