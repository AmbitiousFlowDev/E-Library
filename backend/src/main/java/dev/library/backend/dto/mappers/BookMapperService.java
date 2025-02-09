package dev.library.backend.dto.mappers;

import dev.library.backend.dto.BookDTO;
import dev.library.backend.dto.response.BookResponseDto;
import dev.library.backend.dto.response.CategoryResponseDto;
import dev.library.backend.models.Book;
import dev.library.backend.models.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class BookMapperService {
    private final CategoryMapperService categoryMapperService;

    @Autowired
    public BookMapperService(CategoryMapperService categoryMapperService) {
        this.categoryMapperService = categoryMapperService;
    }

    public BookResponseDto toDataTransferObject(Book book) {
        BookResponseDto bookResponseDto = new BookResponseDto();

        bookResponseDto.setId(book.getId());
        bookResponseDto.setTitle(book.getTitle());
        bookResponseDto.setAuthor(book.getAuthor());
        bookResponseDto.setDescription(book.getDescription());

        // Create a copy of the categories collection to avoid concurrent modification
        Set<CategoryResponseDto> categoryDtos = book.getCategories()
                .stream()
                .map(this.categoryMapperService::toDataTransferObject)
                .collect(Collectors.toSet());

        bookResponseDto.setCategories(categoryDtos);

        return bookResponseDto;
    }

    public List<BookResponseDto> toDataTransferObjects(List<Book> books) {
        return books.stream()
                .map(this::toDataTransferObject)
                .collect(Collectors.toList());
    }
}
