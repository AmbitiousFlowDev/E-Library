package dev.library.backend.dto.mappers;


import dev.library.backend.dto.BookDTO;
import dev.library.backend.models.Book;
import dev.library.backend.models.Category;

import java.util.stream.Collectors;

public class BookMapper {
    public static BookDTO toBookDTO(Book book) {
        BookDTO bookDTO = new BookDTO();
        bookDTO.setId(book.getId());
        bookDTO.setTitle(book.getTitle());
        bookDTO.setAuthor(book.getAuthor());
        bookDTO.setDescription(book.getDescription());
        bookDTO.setCopies(book.getCopies());
        bookDTO.setIsbn(book.getIsbn());
        bookDTO.setCover(book.getCover());
        bookDTO.setCategories(book.getCategories().stream().map(Category::getName).collect(Collectors.toSet()));
        return bookDTO;
    }
}
