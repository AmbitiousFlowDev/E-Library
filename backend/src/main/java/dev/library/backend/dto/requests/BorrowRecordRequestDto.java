package dev.library.backend.dto.requests;

import dev.library.backend.entities.enums.Status;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Date;

@Data
public class BorrowRecordRequestDto {
    private long id;
    private LocalDateTime returnDate;
    private Long userId;
    private Long bookId;
}
