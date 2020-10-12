package com.springboot.web.springbootfirstwebapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = "com.medicare.web")
@EntityScan(basePackages = "com.medicare.entity")
@EnableJpaRepositories(basePackages="com")
public class SpringbootFirstwebappApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootFirstwebappApplication.class, args);
	}
}
	