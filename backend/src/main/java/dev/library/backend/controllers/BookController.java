package dev.library.backend.controllers;

import dev.library.backend.dto.BookDTO;
import dev.library.backend.models.Book;
import dev.library.backend.repositories.BookRepository;
import dev.library.backend.services.BookService;
import java.util.List;

import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/books")
public class BookController {

    private final BookService bookService;
    private final BookRepository bookRepository;

    @Autowired
    public BookController(BookService bookService , BookRepository bookRepository) {
        this.bookService = bookService;
        this.bookRepository = bookRepository;
    }

    @GetMapping("/")
    public ResponseEntity<List<BookDTO>> getBooks() {
        return new ResponseEntity<>(this.bookService.getBooks(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBook(@PathVariable Long id) {
       if (this.bookService.getBook(id) == null) {
           return new ResponseEntity<>(null , HttpStatus.NOT_FOUND);
       }
        return new ResponseEntity<>(this.bookService.getBook(id) , HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Book> createBook(@RequestBody Book book) {
        return new ResponseEntity<>(this.bookService.createBook(book) , HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public Book updateBook( @RequestBody Book book) {
        return this.bookService.updateBook(book);
    }
    @DeleteMapping("/delete/{id}")
    public void deleteBook(@PathVariable Long id) {
        this.bookService.deleteBook(id);
    }
}
