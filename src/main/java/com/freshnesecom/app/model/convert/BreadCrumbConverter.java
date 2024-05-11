package com.freshnesecom.app.model.convert;

import com.freshnesecom.app.model.BreadCrumbs;
import com.freshnesecom.app.model.Category;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Component
public class BreadCrumbConverter implements Converter<Category, List<BreadCrumbs>> {
	private final Set<BreadCrumbs> breadCrumbs = new HashSet<>();

	public List<BreadCrumbs> fromTo(Category obj) {
		breadCrumbs.clear();
		createCategory(obj);
		return breadCrumbs.stream().toList();
	}

	private void createCategory(Category obj) {
		final var breadCrumbs = BreadCrumbs.builder()
				.id(obj.getId())
				.name(obj.getName())
				.build();
		this.breadCrumbs.add(breadCrumbs);
		Optional.ofNullable(obj.getParent()).ifPresent(this::createCategory);
	}
}
