package com.freshnesecom.app.model;


import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BreadCrumbs {
	private Long id;
	private String name;
}
