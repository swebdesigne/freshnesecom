package com.freshnesecom.app.model.convert;

import com.freshnesecom.app.model.User;
import com.freshnesecom.app.model.dto.UserReadDto;
import org.springframework.stereotype.Component;

@Component
public class UserReadConverter implements Converter<User, UserReadDto> {
	@Override
	public UserReadDto fromTo(User obj) {
		return UserReadDto.builder()
				.id(obj.getId())
				.username(obj.getUsername())
				.email(obj.getEmail())
				.role(obj.getRole())
				.build();
	}
}
