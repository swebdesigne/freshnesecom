package com.freshnesecom.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CatalogFreshnesecomApplication {

	public static void main(String[] args) {
		SpringApplication.run(CatalogFreshnesecomApplication.class, args);
		System.out.println("http://localhost:8080");
	}

}
