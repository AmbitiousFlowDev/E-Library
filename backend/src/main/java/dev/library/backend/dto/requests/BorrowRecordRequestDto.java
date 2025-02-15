package dev.library.backend.dto.requests;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class BorrowRecordRequestDto {
    private long id;
    private LocalDateTime returnDate;
    private Long userId;
    private Long bookId;
}
