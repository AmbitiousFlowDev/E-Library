package dev.library.backend.services;

import dev.library.backend.dto.mappers.BookMapperService;
import dev.library.backend.dto.response.BookResponseDto;
import dev.library.backend.models.Book;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import dev.library.backend.repositories.BookRepository;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookService {
    private final BookMapperService bookResponseMapperService;
    private final FileUploadService fileUploadService;
    private final BookRepository bookRepository;
    @Autowired
    public BookService(BookRepository bookRepository , BookMapperService bookResponseMapperService , FileUploadService fileUploadService) {
        this.bookResponseMapperService = bookResponseMapperService;
        this.fileUploadService = fileUploadService;
        this.bookRepository = bookRepository;
    }
    public Page<BookResponseDto> getBooks(int page , int size , String sortBy , String direction)
    {
        Sort sort = direction.equalsIgnoreCase("asc") ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();
        Pageable pageable = PageRequest.of(page, size, sort);
        Page<Book> books = this.bookRepository.findAll(pageable);
        return books.map(this.bookResponseMapperService::toDataTransferObject);
    }
    public BookResponseDto getBook(Long id)
    {
        Book book = this.bookRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        return this.bookResponseMapperService.toDataTransferObject(book);
    }
    public BookResponseDto createBook() {
        // null
    }
}
