package dev.library.backend.services;

import java.util.List;
import java.util.stream.Collectors;

import dev.library.backend.dto.CategoryDTO;
import dev.library.backend.services.mappers.CategoryMapperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.persistence.EntityNotFoundException;
import dev.library.backend.models.Category;
import dev.library.backend.repositories.CategoryRepository;

@Service
public class CategoryService {
    private final CategoryMapperService categoryMapperService;
    private final CategoryRepository categoryRepository;
    @Autowired
    public CategoryService(CategoryRepository categoryRepository , CategoryMapperService categoryMapperService) {
        this.categoryRepository = categoryRepository;
        this.categoryMapperService = categoryMapperService;
    }
    public List<CategoryDTO> getCategories() {
        return this.categoryRepository.findAll().stream().map(this.categoryMapperService::toCategoryDTO).collect(Collectors.toList());
    }
    public CategoryDTO getCategory(Long id) {
        if (this.categoryRepository.existsById(id)) {
            Category category = this.categoryRepository.findById(id).orElseThrow();
            return this.categoryMapperService.toCategoryDTO(category);
        }
        return null;
    }
    public CategoryDTO createCategory(CategoryDTO categoryDTO) {
        Category category = new Category();
        category.setName(categoryDTO.getName());
        this.categoryRepository.save(category);
        return this.categoryMapperService.toCategoryDTO(category);
    }
    public CategoryDTO updateCategory(Long id, CategoryDTO categoryDTO) {
        if (!this.categoryRepository.existsById(id)) {
            return null;
        }
        Category category = this.categoryRepository.findById(id).orElseThrow();
        category.setName(categoryDTO.getName());
        return this.categoryMapperService.toCategoryDTO(this.categoryRepository.save(category));
    }
    public void deleteCategory(Long id) {
        if (this.getCategory(id) == null) {
            throw new EntityNotFoundException("Category not found with ID: " + id);
        }
        this.categoryRepository.deleteById(id);
    }
}
