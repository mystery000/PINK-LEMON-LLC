package com.pinklemon.pinklemon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PinklemonApplication {

	public static void main(String[] args) {
		SpringApplication.run(PinklemonApplication.class, args);
		System.out.println("Server started...");
	}

}
