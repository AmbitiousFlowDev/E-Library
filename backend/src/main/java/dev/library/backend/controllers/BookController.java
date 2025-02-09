package dev.library.backend.controllers;

import dev.library.backend.dto.mappers.BookMapperService;
import dev.library.backend.dto.response.BookResponseDto;
import dev.library.backend.models.Book;
import dev.library.backend.repositories.BookRepository;
import java.util.List;
import java.util.stream.Collectors;

import dev.library.backend.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/books")
public class BookController {
    private final BookService bookService;
    @Autowired
    public BookController(BookService bookService) {
       this.bookService = bookService;
    }
    @GetMapping("/")
    public ResponseEntity<Page<BookResponseDto>> getBooks(@RequestParam(defaultValue = "0") int page ,
            @RequestParam(defaultValue = "10") int size , @RequestParam(defaultValue = "title") String sortBy,
            @RequestParam(defaultValue = "asc") String direction
    ) {
        return new ResponseEntity<>(this.bookService.getBooks(page , size , sortBy , direction), HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<BookResponseDto> getBook(@PathVariable Long id) {
        return new ResponseEntity<>(bookService.getBook(id), HttpStatus.OK);
    }
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
