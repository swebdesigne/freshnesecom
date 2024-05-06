package com.freshnesecom.app.repository;


import com.freshnesecom.app.model.Item;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends CrudRepository<Item, Long> {
	List<Item> findByCategoryId(Long categoryId, Pageable pageable);

	@Query("select count(i.id) from Item i where i.categoryId = :categoryId")
	long getCountByCategoryId(@Param("categoryId") long categoryId);

	@Query("from Item i where i.id in (:ids)")
	List<Item> findByIds(Long[] ids);
}
