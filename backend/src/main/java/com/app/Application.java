package com.app;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.modelmapper.Conditions;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean // equivalent to <bean id ..../> in xml file
	public ModelMapper mapper() {
		System.out.println("in model mapper bean creation");
		ModelMapper modelMapper = new ModelMapper();		
		modelMapper.getConfiguration()
		.setMatchingStrategy(MatchingStrategies.STRICT) // only MATCHING prop names n data types
														// between src n dest will be
														// transferred , during the
														// mapping
				.setPropertyCondition(Conditions.isNotNull()); // only non null properties will be transferred from src
																// --> dest , during the mapping
		return modelMapper; //configured model mapper instance related to SC
	}

}
