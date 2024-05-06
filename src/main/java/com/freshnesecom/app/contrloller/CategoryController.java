package com.freshnesecom.app.contrloller;

import com.freshnesecom.app.model.Category;
import com.freshnesecom.app.model.dto.CategoryWithItemDto;
import com.freshnesecom.app.service.CategoryService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@AllArgsConstructor
@RequestMapping(path = "/category")
public class CategoryController {
	private CategoryService categoryService;

	@GetMapping(produces = "application/json")
	public ResponseEntity<List<Category>> getCategoryWithoutItem() {
		return ResponseEntity.ok(categoryService.findAll());
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<CategoryWithItemDto> getCategory(
			@PathVariable Long id,
			@PageableDefault(value = 3, page = 0) Pageable pageable
	) {
		return ResponseEntity.of(categoryService.findById(id, pageable));
	}
}
