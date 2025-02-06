package dev.library.backend.services;

import java.util.List;
import java.util.stream.Collectors;

import dev.library.backend.dto.BookDTO;
import dev.library.backend.services.mappers.BookMapperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import dev.library.backend.models.Book;
import dev.library.backend.repositories.BookRepository;



@Service
public class BookService {
    private final BookRepository    bookRepository;
    private final BookMapperService bookMapperService;
    @Autowired
    public BookService(BookRepository bookRepository , BookMapperService bookMapperService) {
        this.bookRepository = bookRepository;
        this.bookMapperService = bookMapperService;
    }
    public List<BookDTO> getBooks() {
        return this.bookRepository.findAll().stream().map(this.bookMapperService::toDto).collect(Collectors.toList());
    }
    public Book getBook(Long id) {
        return this.bookRepository.findById(id).orElseThrow(() -> new RuntimeException("Book not found with ID: " + id));
    }
    public Book createBook(Book book) {
        return this.bookRepository.save(book);
    }
    public Book updateBook(Book book) {
        if (!this.bookRepository.existsById(book.getId())) {
            throw new EntityNotFoundException("Book not found with ID: " + book.getId());
        }
        return this.bookRepository.save(book);
    }
    public void deleteBook(Long id) {
        if (!this.bookRepository.existsById(id)) {
            throw new RuntimeException("Cannot delete: Book not found with ID: " + id);
        }
        this.bookRepository.deleteById(id);
    }
}
