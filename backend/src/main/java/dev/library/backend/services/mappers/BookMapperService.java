package dev.library.backend.services.mappers;

import dev.library.backend.dto.BookDTO;
import dev.library.backend.models.Book;
import dev.library.backend.models.Category;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class BookMapperService {
    public BookDTO toDto(Book book) {
        BookDTO bookDTO = new BookDTO();
        bookDTO.setId(book.getId());
        bookDTO.setTitle(book.getTitle());
        bookDTO.setAuthor(book.getAuthor());
        bookDTO.setDescription(book.getDescription());
        bookDTO.setCopies(book.getCopies());
        bookDTO.setIsbn(book.getIsbn());
        bookDTO.setCover(book.getCover());

        Set<Category> categoriesCopy = new HashSet<>(book.getCategories());
        bookDTO.setCategories(categoriesCopy.stream().map(Category::getName).collect(Collectors.toSet()));
        return bookDTO;
    }
}
