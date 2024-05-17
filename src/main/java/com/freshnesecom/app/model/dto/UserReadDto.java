package com.freshnesecom.app.model.dto;

import com.freshnesecom.app.utils.Role;
import lombok.Builder;

@Builder
public record UserReadDto(
		Long id,
		String username,
		String email,
		Role role
) {
}
