package com.freshnesecom.app.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;

@Data
@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Item {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name = "category_id")
	private Long categoryId;
	@Column(name = "header")
	private String name;
	private float price;
	private String description;
	private String img;
	private String parameters;
	private Long customOrder;
	@ToString.Exclude
	@OneToOne(cascade = { CascadeType.PERSIST, CascadeType.ALL })
	@JoinColumn(name = "recipe_id")
	private Recipe recipe;
}
