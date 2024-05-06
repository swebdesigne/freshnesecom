package com.freshnesecom.app.model.convert;

import com.freshnesecom.app.model.Category;
import com.freshnesecom.app.model.dto.CategoryWithItemDto;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CategoryConverter implements Converter<Category, CategoryWithItemDto> {
	public CategoryWithItemDto fromTo(Category obj) {
		return createCategory(obj);
	}

	private CategoryWithItemDto createCategory(Category obj) {
		return CategoryWithItemDto.builder()
				.id(obj.getId())
				.name(obj.getName())
				.children(createChildrenCategory(obj.getChildren()))
				.customOrder(obj.getCustomOrder())
				.build();
	}

	private List<CategoryWithItemDto> createChildrenCategory(List<Category> children) {
		return children.stream()
				.map(this::createCategory)
				.toList();
	}
}
