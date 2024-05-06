package com.freshnesecom.app.repository;

import com.freshnesecom.app.model.Category;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BreadCrumbsRepository extends CrudRepository<Category, Long> {
}
