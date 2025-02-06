package dev.library.backend.services.mappers;

import dev.library.backend.dto.CategoryDTO;
import dev.library.backend.models.Category;
import org.springframework.stereotype.Service;

@Service
public class CategoryMapperService {
    public CategoryDTO toCategoryDTO(Category category) {
        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setId(category.getId());
        categoryDTO.setName(category.getName());
        return categoryDTO;
    }
    public Category toCategory(CategoryDTO categoryDTO) {
        Category category = new Category();
        category.setId(categoryDTO.getId());
        category.setName(categoryDTO.getName());
        return category;
    }
}
