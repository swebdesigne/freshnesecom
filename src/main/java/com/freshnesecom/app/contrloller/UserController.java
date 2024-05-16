package com.freshnesecom.app.contrloller;

import com.freshnesecom.app.model.dto.UserCreateDto;
import com.freshnesecom.app.model.dto.UserCredentialsDto;
import com.freshnesecom.app.model.dto.UserReadDto;
import com.freshnesecom.app.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@AllArgsConstructor
@RestController
@RequestMapping("/login")
class UserController {
	private PasswordEncoder passwordEncoder;
	private UserService userService;

	@PostMapping(path = "create")
	public UserReadDto create(UserCreateDto user) {
		return userService.create(user);
	}

	@PostMapping
	public UserDetails findByUsername(@RequestBody UserCredentialsDto credentials) {
		return userService.loadUserByUsername(credentials.username());
	}
}
