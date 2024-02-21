package com.app.dto;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.validator.constraints.Length;

@Getter
@Setter
@ToString
public class SigninRequest {
	
    private String username;
    
    @Length(min = 3, max = 20, message = "Invalid password length (Should be between 3 - 20)")
    private String password;
    
}
