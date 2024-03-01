package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import com.app.dto.UserDto;
import com.app.dto.UserResult;
import com.app.entities.UserEntity;
import com.app.repository.UserRepository;

public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public String findUserId(String userName) {
		UserEntity user = userRepo.findByUsername(userName)
				.orElseThrow(()-> new RuntimeException("Invalid Username"));
		
		return user.getUsername();
	
	}

}
