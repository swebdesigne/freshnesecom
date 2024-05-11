package com.freshnesecom.app.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Ingredient {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String value;
}