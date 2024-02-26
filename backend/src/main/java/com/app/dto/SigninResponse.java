package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SigninResponse {
	
    private String jwt;
    
    private String mesg;
    
    private Long userId;
    
    private String role;

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("SigninResponse [jwt=").append(jwt).append(", mesg=").append(mesg).append(", userId=")
				.append(userId).append(", role=").append(role).append("]");
		return builder.toString();
	}
}

