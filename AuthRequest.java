package com.app.dto;
import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AuthRequest {
	@NotBlank(message = "Username can't be blank or null")
	private String username;
	@NotBlank(message = "password can't be blank or null")
	private String password;
}