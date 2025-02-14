package dev.library.backend.dto.mappers;


import dev.library.backend.dto.response.UserResponseDto;
import dev.library.backend.models.User;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User toEntity(UserResponseDto userResponseDto);
    UserResponseDto toDataTransferObject(User user);
    List<UserResponseDto> totoDataTransferObjects(List<User> userList);
}
