package com.freshnesecom.app.model.dto;

import com.freshnesecom.app.model.Item;
import lombok.Builder;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
public class CategoryWithItemDto {
	private Long id;
	private String name;
	private int customOrder;
	private Long countItems;
	private List<Item> items = new ArrayList<>();
	private List<CategoryWithItemDto> children = new ArrayList<>();
}
