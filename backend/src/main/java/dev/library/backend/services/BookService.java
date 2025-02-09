package dev.library.backend.services;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import dev.library.backend.dto.BookDTO;
import dev.library.backend.dto.mappers.BookMapperService;
import dev.library.backend.dto.requests.BookRequestDto;
import dev.library.backend.dto.response.BookResponseDto;
import dev.library.backend.models.Category;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import dev.library.backend.models.Book;
import dev.library.backend.repositories.BookRepository;

@Service
public class BookService {
    private final BookMapperService bookResponseMapperService;
    private final BookRepository bookRepository;
    @Autowired
    public BookService(BookRepository bookRepository , BookMapperService bookResponseMapperService) {
        this.bookResponseMapperService = bookResponseMapperService;
        this.bookRepository = bookRepository;
    }
//    public List<Book> getBooks() {
//       List<Book> books = this.bookRepository.findAll();
//       return this.bookResponseMapperService.fromEntities(books);
//    }
//    public BookResponseDto getBook(Long id) {
//        if (this.bookRepository.existsById(id)) {
//            Book book = this.bookRepository.findById(id).orElseThrow(EntityNotFoundException::new);
//            return this.bookResponseMapperService.toBookDto(book);
//        }
//        return null;
//    }
//    public BookResponseDto createBook(BookRequestDto request) {
//        Book book = new Book();
//
//        book.setAuthor(request.getAuthor());
//        book.setCover(request.getCover());
//        book.setIsbn(request.getIsbn());
//        book.setCopies(request.getCopies());
//
//        Set<Category> categories = request.getCategories().stream().map(category -> this.categoryService.getCategory(category));
//
//        return this.bookResponseMapperService.toBookDto(this.bookRepository.save(book));
//    }
//    public Book updateBook(Book book) {
//        if (!this.bookRepository.existsById(book.getId())) {
//            throw new EntityNotFoundException("Book not found with ID: " + book.getId());
//        }
//        return this.bookRepository.save(book);
//    }
//    public void deleteBook(Long id) {
//        if (!this.bookRepository.existsById(id)) {
//            throw new RuntimeException("Cannot delete: Book not found with ID: " + id);
//        }
//        this.bookRepository.deleteById(id);
//    }
}
