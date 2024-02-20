package com.app.dto;
import com.app.entities.UserEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
@AllArgsConstructor
@Getter
@Setter
public class UserResult {
	    private UserEntity user;
	    private boolean success;
	    private String errorMessage;
}