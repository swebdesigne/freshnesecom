package com.freshnesecom.app.model.convert;

import com.freshnesecom.app.model.User;
import com.freshnesecom.app.model.dto.UserCreateDto;
import com.freshnesecom.app.utils.Role;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Optional;

@AllArgsConstructor
@Component
public class UserCreateConverter implements Converter<UserCreateDto, User> {

	@Override
	public User fromTo(UserCreateDto obj) {
		return User.builder()
				.username(obj.username())
				.email(obj.email())
				.password(obj.password())
				.role(Optional.ofNullable(obj.role()).orElse(Role.USER))
				.build();
	}
}
