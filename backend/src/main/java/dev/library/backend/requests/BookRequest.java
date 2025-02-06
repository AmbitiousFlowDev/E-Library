package dev.library.backend.requests;

import lombok.Data;

@Data
public class BookRequest {
    private String title;
    private String author;
    private String publisher;
    private String isbn;
    private String cover;
}
