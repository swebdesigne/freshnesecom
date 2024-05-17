package com.freshnesecom.app.service;

import com.freshnesecom.app.model.convert.UserCreateConverter;
import com.freshnesecom.app.model.convert.UserReadConverter;
import com.freshnesecom.app.model.dto.UserCreateDto;
import com.freshnesecom.app.model.dto.UserCredentialsDto;
import com.freshnesecom.app.model.dto.UserReadDto;
import com.freshnesecom.app.model.dto.UserSecurityDto;
import com.freshnesecom.app.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import net.jcip.annotations.ThreadSafe;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Optional;

@AllArgsConstructor
@ThreadSafe
@Service
public class UserService implements UserDetailsService {
	private UserRepository userRepository;
	private UserCreateConverter userCreateConverter;
	private UserReadConverter userReadConverter;
	private PasswordEncoder passwordEncoder;

	@Transactional
	public UserReadDto create(UserCreateDto user) {
		return Optional.of(user)
				.map(userCreateConverter::fromTo)
				.map(u -> {
							u.setPassword(passwordEncoder.encode(u.getPassword()));
							userRepository.save(u);
							return userReadConverter.fromTo(u);
						}
				).orElseThrow();
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		return userRepository.findByUsername(username)
				.map(user -> new UserSecurityDto(
						user.getUsername(),
						user.getPassword(),
						Collections.singleton(user.getRole())
				))
				.orElseThrow(() -> new UsernameNotFoundException("Failed to retrieve user:" + username));
	}

	public Optional<UserReadDto> findByUsername(UserCredentialsDto credentialsDto) {
		return userRepository.findByUsername(credentialsDto.username())
				.filter(user -> passwordEncoder.matches(credentialsDto.password(), user.getPassword()))
				.map(userReadConverter::fromTo);
	}

	public Optional<UserReadDto> findById(Long id) {
		return userRepository.findById(id).map(userReadConverter::fromTo);
	}
}
