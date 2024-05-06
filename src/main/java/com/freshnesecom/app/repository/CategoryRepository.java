package com.freshnesecom.app.repository;

import com.freshnesecom.app.model.Category;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Long> {
	@Query("from Category c where c.parent is null")
	List<Category> findAllWhereParentIsNull();
}
