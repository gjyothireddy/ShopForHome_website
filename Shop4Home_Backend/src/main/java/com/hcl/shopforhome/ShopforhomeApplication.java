package com.hcl.shopforhome;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@SpringBootApplication(scanBasePackages = "com.hcl.shopforhome")
@EntityScan(basePackages = "com.hcl.shopforhome.model")							
@EnableJpaRepositories(basePackages = "com.hcl.shopforhome.repository")

public class ShopforhomeApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShopforhomeApplication.class, args);
		System.err.println("Server running on port number 9123");

	}

}
