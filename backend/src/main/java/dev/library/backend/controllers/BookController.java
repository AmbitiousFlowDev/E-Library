package dev.library.backend.controllers;

import dev.library.backend.dto.mappers.BookMapperService;
import dev.library.backend.dto.response.BookResponseDto;
import dev.library.backend.models.Book;
import dev.library.backend.repositories.BookRepository;
import dev.library.backend.services.BookService;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/books")
public class BookController {
    private final BookService bookService;
    private final BookMapperService bookMapperService;
    private final BookRepository bookRepository;
    @Autowired
    public BookController(BookService bookService , BookRepository bookRepository , BookMapperService bookMapperService) {
        this.bookService       = bookService;
        this.bookRepository    = bookRepository;
        this.bookMapperService = bookMapperService;
    }
    @Transactional(readOnly = true)
    @GetMapping("/")
    public ResponseEntity<List<BookResponseDto>> getBooks() {
        List<Book> books = this.bookRepository.findAll();
        List<BookResponseDto> bookResponseDtos = books.stream()
                .map(this.bookMapperService::toDataTransferObject)
                .toList();
        return new ResponseEntity<>(bookResponseDtos, HttpStatus.OK);
    }
//    @GetMapping("/{id}")
//    public ResponseEntity<BookResponseDto> getBook(@PathVariable Long id) {
//       if (this.bookService.getBook(id) == null) {
//           return new ResponseEntity<>(null , HttpStatus.NOT_FOUND);
//       }
//        return new ResponseEntity<>(this.bookService.getBook(id) , HttpStatus.OK);
//    }
//    @PreAuthorize("hasRole('LIBRARIAN')")
//    @PostMapping("/create")
//    public ResponseEntity<Book> createBook(@RequestBody Book book) {
//        return new ResponseEntity<>(this.bookService.createBook(book) , HttpStatus.OK);
//    }
//    @PreAuthorize("hasRole('LIBRARIAN')")
//    @PutMapping("/update/{id}")
//    public Book updateBook( @RequestBody Book book) {
//        return this.bookService.updateBook(book);
//    }
//    @PreAuthorize("hasRole('LIBRARIAN')")
//    @DeleteMapping("/delete/{id}")
//    public void deleteBook(@PathVariable Long id) {
//        this.bookService.deleteBook(id);
//    }
}
