package com.freshnesecom.app.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class Recipe {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String description;
	@OneToMany
	@JoinColumn(name = "recipe_id")
	private List<Ingredient> ingredient;
}
