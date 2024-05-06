package com.freshnesecom.app.service;

import com.freshnesecom.app.model.BreadCrumbs;
import com.freshnesecom.app.model.convert.BreadCrumbsConverter;
import com.freshnesecom.app.repository.BreadCrumbsRepository;
import lombok.AllArgsConstructor;
import net.jcip.annotations.ThreadSafe;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Service
@ThreadSafe
@AllArgsConstructor
public class BreadCrumbsServer {
	private BreadCrumbsConverter breadCrumbsConverter;
	private BreadCrumbsRepository breadCrumbsRepository;

	@Transactional
	public List<BreadCrumbs> createBreadCrumbs(Long id) {
		return breadCrumbsRepository.findById(id)
				.map(breadCrumbsConverter::fromTo)
				.orElse(new ArrayList<>())
				.stream()
				.sorted(Comparator.comparing(BreadCrumbs::getId))
				.toList();
	}
}
