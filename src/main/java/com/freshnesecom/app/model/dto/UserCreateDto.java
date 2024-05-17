package com.freshnesecom.app.model.dto;

import com.freshnesecom.app.utils.Role;

public record UserCreateDto(
		String username,
		String email,
		String password,
		Role role
) {
}
