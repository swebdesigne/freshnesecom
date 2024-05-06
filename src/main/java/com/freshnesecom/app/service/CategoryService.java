package com.freshnesecom.app.service;

import com.freshnesecom.app.model.Category;
import com.freshnesecom.app.model.convert.CategoryConverter;
import com.freshnesecom.app.model.dto.CategoryWithItemDto;
import com.freshnesecom.app.repository.CategoryRepository;
import lombok.AllArgsConstructor;
import net.jcip.annotations.ThreadSafe;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@ThreadSafe
@AllArgsConstructor
public class CategoryService {
	private ItemService itemService;
	private CategoryConverter categoryConverter;
	private CategoryRepository categoryRepository;

	public List<Category> findAll() {
		return categoryRepository.findAllWhereParentIsNull();
	}

	@Transactional
	public Optional<CategoryWithItemDto> findById(Long id, Pageable pageable) {
		final var categoryWithItemDto = categoryRepository.findById(id).map(categoryConverter::fromTo);
		categoryWithItemDto.ifPresent((cat) -> {
					final long catId = cat.getId();
					cat.setCountItems(itemService.getCountById(catId));
					cat.setItems(itemService.findByCategoryId(catId, pageable));
				}
		);
		return categoryWithItemDto;
	}
}
