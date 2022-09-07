package com.test.techtest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = {"com.itv.leedstech.techtest.models"})
public class TechtestApplication {

	public static void main(String[] args) {
		SpringApplication.run(TechtestApplication.class, args);
	}

}
