package com.freshnesecom.app.config;

import com.freshnesecom.app.utils.Role;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import static com.freshnesecom.app.utils.Role.*;
import static org.springframework.http.HttpMethod.*;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity(securedEnabled = true, jsr250Enabled = true)
public class SecurityConfiguration {
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.csrf().disable()
				.authorizeHttpRequests(urlConfig -> urlConfig
						.requestMatchers("/login/**").permitAll()

						.requestMatchers(GET, "/category", "/category/{id}").permitAll()

						.requestMatchers("/product/{id}", "/product/related/{ids}").permitAll()
						.requestMatchers("/product", "/product/delete/{id}").hasAuthority(ADMIN.getAuthority())

						.anyRequest().authenticated()
				)
//				.formLogin(login -> login.loginPage("/login"))
//				.authorizeHttpRequests(authorizationManagerRequestMatcherRegistry ->
//								authorizationManagerRequestMatcherRegistry
////								.requestMatchers(HttpMethod.DELETE).hasAnyRole("ADMIN")
////								.requestMatchers("/admin/**").hasAnyRole("ADMIN")
////								.requestMatchers("/user/**").hasAnyRole("USER", "ADMIN")
//										.requestMatchers("/login/**").permitAll()
//										.requestMatchers(POST, "/login").permitAll()
//										.anyRequest().authenticated()
//				)
//				.formLogin(login -> login.loginPage("/login").permitAll())
				.httpBasic(Customizer.withDefaults())
				.sessionManagement(httpSecuritySessionManagementConfigurer ->
						httpSecuritySessionManagementConfigurer.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
				);

		return http.build();
	}
}
