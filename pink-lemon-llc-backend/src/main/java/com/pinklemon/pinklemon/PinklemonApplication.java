package com.pinklemon.pinklemon;

import com.stripe.Stripe;
import jakarta.validation.constraints.NotNull;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class PinklemonApplication {
	public static void main(String[] args) {
		Stripe.apiKey = "sk_test_51NQSChCNXWohRZKPQSGT3skasW9Rz6cwqWvGHwxxaZiH6wNKmmNMz05akIclMfaE22bH7Om0LS2g8amxSsGya89l00OS8sqGXk";
		SpringApplication.run(PinklemonApplication.class, args);
		System.out.println("Server is running...");
	}
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(@NotNull CorsRegistry registry) {
				registry.addMapping("/api/**").allowedOrigins("*");
			}
		};
	}
}
