package dev.library.backend.services.mappers;

import dev.library.backend.dto.response.CategoryResponseDto;
import dev.library.backend.models.Category;
import org.springframework.stereotype.Service;

@Service
public class CategoryMapperService {

    public CategoryResponseDto toCategoryDTO(Category category) {
        CategoryResponseDto categoryResponseDto = new CategoryResponseDto();
        categoryResponseDto.setId(category.getId());
        categoryResponseDto.setName(category.getName());
        return categoryResponseDto;
    }
//    public Category toCategory(CategoryDTO categoryDTO) {
//        Category category = new Category();
//        category.setId(categoryDTO.getId());
//        category.setName(categoryDTO.getName());
//        return category;
//    }
}
