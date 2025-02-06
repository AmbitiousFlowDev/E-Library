package dev.library.backend.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Set;

@Data
@NoArgsConstructor
public class BookDTO {
    private Long id;
    private String cover;
    private String title;
    private String author;
    private String description;
    private String isbn;
    private int copies;
    private Set<String> categories;
}
