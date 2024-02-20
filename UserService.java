package com.app.service;
import java.util.List;

import org.springframework.http.ResponseEntity;

import com.app.dto.UserDto;
import com.app.dto.UserResult;
import com.app.entities.UserEntity;

public interface UserService {
	String findUserId(String userName);
}