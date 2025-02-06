package dev.library.backend.controllers;

import java.util.List;

import dev.library.backend.dto.CategoryDTO;
import dev.library.backend.services.mappers.CategoryMapperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.library.backend.models.Category;
import dev.library.backend.services.CategoryService;

@RestController
@CrossOrigin 
@RequestMapping("/api/v1/categories")
public class CategoryController {

    private final CategoryMapperService categoryMapperService;
    private final CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService , CategoryMapperService categoryMapperService) {
        this.categoryMapperService = categoryMapperService;
        this.categoryService = categoryService;
    }
    @GetMapping
    public List<CategoryDTO> getCategories() {
        return this.categoryService.getCategories();
    }
    @GetMapping("/{id}")
    public CategoryDTO getCategory(@PathVariable("id") Long id) {
        return this.categoryService.getCategory(id);
    }
    @PostMapping("/create")
    public CategoryDTO createCategory(@RequestBody CategoryDTO categoryDTO) {
        Category category = new Category();
        category.setName(categoryDTO.getName());
        return this.categoryService.createCategory(categoryDTO);
    }

    @PutMapping("/update/{id}")
    public CategoryDTO updateCategory(@RequestBody CategoryDTO categoryDTO , @PathVariable("id") Long id) {
        return this.categoryService.updateCategory(id , categoryDTO);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteCategory(@PathVariable Long id) {
        this.categoryService.deleteCategory(id);
    }
}