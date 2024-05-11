package com.freshnesecom.app.service;

import com.freshnesecom.app.model.BreadCrumbs;
import com.freshnesecom.app.model.convert.BreadCrumbConverter;
import com.freshnesecom.app.repository.BreadCrumbRepository;
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
public class BreadCrumbService {
	private BreadCrumbConverter breadCrumbConverter;
	private BreadCrumbRepository breadCrumbRepository;

	@Transactional
	public List<BreadCrumbs> createBreadCrumbs(Long id) {
		return breadCrumbRepository.findById(id)
				.map(breadCrumbConverter::fromTo)
				.orElse(new ArrayList<>())
				.stream()
				.sorted(Comparator.comparing(BreadCrumbs::getId))
				.toList();
	}
}
