package dev.library.backend.dto.mappers;

import dev.library.backend.dto.response.UserResponseDto;
import dev.library.backend.models.User;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-02-14T16:48:58+0100",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 17.0.12 (Oracle Corporation)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User toEntity(UserResponseDto userResponseDto) {
        if ( userResponseDto == null ) {
            return null;
        }

        User.UserBuilder user = User.builder();

        user.id( userResponseDto.getId() );
        user.username( userResponseDto.getUsername() );
        user.password( userResponseDto.getPassword() );
        user.email( userResponseDto.getEmail() );
        user.fullName( userResponseDto.getFullName() );
        user.role( userResponseDto.getRole() );

        return user.build();
    }

    @Override
    public UserResponseDto toDataTransferObject(User user) {
        if ( user == null ) {
            return null;
        }

        UserResponseDto.UserResponseDtoBuilder userResponseDto = UserResponseDto.builder();

        userResponseDto.id( user.getId() );
        userResponseDto.username( user.getUsername() );
        userResponseDto.password( user.getPassword() );
        userResponseDto.email( user.getEmail() );
        userResponseDto.fullName( user.getFullName() );
        userResponseDto.role( user.getRole() );

        return userResponseDto.build();
    }

    @Override
    public List<UserResponseDto> totoDataTransferObjects(List<User> userList) {
        if ( userList == null ) {
            return null;
        }

        List<UserResponseDto> list = new ArrayList<UserResponseDto>( userList.size() );
        for ( User user : userList ) {
            list.add( toDataTransferObject( user ) );
        }

        return list;
    }
}
