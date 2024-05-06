package com.freshnesecom.app.service;

import com.freshnesecom.app.model.Item;
import com.freshnesecom.app.repository.ItemRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ItemService {
	private ItemRepository itemRepository;

	public Optional<Item> findById(Long id) {
		return itemRepository.findById(id);
	}

	@Transactional
	public boolean delete(Long id) {
		return itemRepository.findById(id)
				.map(entity -> {
					itemRepository.delete(entity);
					return true;
				}).orElse(false);
	}

	public List<Item> findByCategoryId(long id, Pageable pageable) {
		return itemRepository.findByCategoryId(id, pageable);
	}

	public long getCountById(long id) {
		return itemRepository.getCountByCategoryId(id);
	}

	public List<Item> findByIds(Long[] ids) {
		return itemRepository.findByIds(ids);
	}
}
