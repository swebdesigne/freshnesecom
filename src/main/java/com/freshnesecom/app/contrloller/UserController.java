package com.freshnesecom.app.contrloller;

import com.freshnesecom.app.model.dto.UserCreateDto;
import com.freshnesecom.app.model.dto.UserCredentialsDto;
import com.freshnesecom.app.model.dto.UserReadDto;
import com.freshnesecom.app.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@AllArgsConstructor
@RestController
@RequestMapping("/users")
class UserController {
	private UserService userService;

	@PostMapping("create")
	public UserReadDto create(@RequestBody UserCreateDto user) {
		return userService.create(user);
	}

	@PostMapping("login")
	public ResponseEntity<UserReadDto> findByUsername(@RequestBody UserCredentialsDto credentials) {
		return ResponseEntity.of(userService.findByUsername(credentials));
	}

	@PreAuthorize("hasAnyAuthority('USER', 'ADMIN')")
	@GetMapping("{id}")
	public ResponseEntity<UserReadDto> findById(@PathVariable Long id) {
		return ResponseEntity.of(userService.findById(id));
	}
}
