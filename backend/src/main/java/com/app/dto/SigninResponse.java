package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
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

	public String getJwt() {
		return jwt;
	}

	public void setJwt(String jwt) {
		this.jwt = jwt;
	}

	public String getMesg() {
		return mesg;
	}

	public void setMesg(String mesg) {
		this.mesg = mesg;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public SigninResponse(String jwt, String mesg, Long userId, String role) {
		this.jwt = jwt;
		this.mesg = mesg;
		this.userId = userId;
		this.role = role;
	}

	public SigninResponse() {
	}
}

