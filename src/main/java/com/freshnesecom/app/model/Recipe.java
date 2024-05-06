package com.freshnesecom.app.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
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

	@OneToMany(mappedBy = "recipeId", cascade = CascadeType.ALL)
	private List<Ingredient> ingredient;

	@OneToOne
	@JsonBackReference
	@JoinColumn(name = "item_id", referencedColumnName = "id")
	private Item item;
}
