package com.freshnesecom.app.model.convert;

import com.freshnesecom.app.model.User;
import com.freshnesecom.app.model.dto.UserCreateDto;
import org.springframework.stereotype.Component;

@Component
public class UserCreateConverter implements Converter<UserCreateDto, User> {
	@Override
	public User fromTo(UserCreateDto obj) {
		return User.builder()
				.username(obj.username())
				.email(obj.email())
				.password(obj.password())
				.role(obj.role())
				.build();
	}
}
