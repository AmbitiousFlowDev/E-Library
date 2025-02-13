package dev.library.backend.dto.mappers;

import dev.library.backend.dto.response.BorrowRecordResponseDto;
import dev.library.backend.models.Book;
import dev.library.backend.models.BorrowRecord;
import dev.library.backend.models.User;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-02-12T23:47:45+0100",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 17.0.12 (Oracle Corporation)"
)
@Component
public class BorrowRecordMapperImpl implements BorrowRecordMapper {

    @Override
    public BorrowRecord toEntity(BorrowRecordResponseDto responseDto) {
        if ( responseDto == null ) {
            return null;
        }

        BorrowRecord borrowRecord = new BorrowRecord();

        borrowRecord.setUser( borrowRecordResponseDtoToUser( responseDto ) );
        borrowRecord.setBook( borrowRecordResponseDtoToBook( responseDto ) );
        borrowRecord.setId( responseDto.getId() );
        if ( responseDto.getBorrowDate() != null ) {
            borrowRecord.setBorrowDate( new Date( responseDto.getBorrowDate().getTime() ) );
        }
        if ( responseDto.getReturnDate() != null ) {
            borrowRecord.setReturnDate( new Date( responseDto.getReturnDate().getTime() ) );
        }
        borrowRecord.setStatus( responseDto.getStatus() );

        return borrowRecord;
    }

    @Override
    public BorrowRecordResponseDto toDataTransferObject(BorrowRecord entity) {
        if ( entity == null ) {
            return null;
        }

        BorrowRecordResponseDto borrowRecordResponseDto = new BorrowRecordResponseDto();

        borrowRecordResponseDto.setUserId( entityUserId( entity ) );
        borrowRecordResponseDto.setBookId( entityBookId( entity ) );
        if ( entity.getId() != null ) {
            borrowRecordResponseDto.setId( entity.getId() );
        }
        borrowRecordResponseDto.setBorrowDate( entity.getBorrowDate() );
        borrowRecordResponseDto.setReturnDate( entity.getReturnDate() );
        borrowRecordResponseDto.setStatus( entity.getStatus() );

        return borrowRecordResponseDto;
    }

    @Override
    public List<BorrowRecordResponseDto> toDataTransferObjects(List<BorrowRecord> borrowRecords) {
        if ( borrowRecords == null ) {
            return null;
        }

        List<BorrowRecordResponseDto> list = new ArrayList<BorrowRecordResponseDto>( borrowRecords.size() );
        for ( BorrowRecord borrowRecord : borrowRecords ) {
            list.add( toDataTransferObject( borrowRecord ) );
        }

        return list;
    }

    protected User borrowRecordResponseDtoToUser(BorrowRecordResponseDto borrowRecordResponseDto) {
        if ( borrowRecordResponseDto == null ) {
            return null;
        }

        User.UserBuilder user = User.builder();

        user.id( borrowRecordResponseDto.getUserId() );

        return user.build();
    }

    protected Book borrowRecordResponseDtoToBook(BorrowRecordResponseDto borrowRecordResponseDto) {
        if ( borrowRecordResponseDto == null ) {
            return null;
        }

        Book book = new Book();

        book.setId( borrowRecordResponseDto.getBookId() );

        return book;
    }

    private Long entityUserId(BorrowRecord borrowRecord) {
        if ( borrowRecord == null ) {
            return null;
        }
        User user = borrowRecord.getUser();
        if ( user == null ) {
            return null;
        }
        Long id = user.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }

    private Long entityBookId(BorrowRecord borrowRecord) {
        if ( borrowRecord == null ) {
            return null;
        }
        Book book = borrowRecord.getBook();
        if ( book == null ) {
            return null;
        }
        Long id = book.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }
}
