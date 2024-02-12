package com.app.dto;

import java.time.LocalDateTime;

import lombok.NoArgsConstructor;

//DTO :  resp DTO : to send API resp from rest server ---> rest clnt
public class ApiResponse {
	
	private LocalDateTime timeStamp;
	private String message;
	
	public ApiResponse(String message) {
		super();
		this.message = message;
		this.timeStamp=LocalDateTime.now();
	}
	
	public ApiResponse() {
		super();
	}
	
	public LocalDateTime getTimeStamp() {
		return timeStamp;
	}
	public ApiResponse(LocalDateTime timeStamp, String message) {
		super();
		this.timeStamp = timeStamp;
		this.message = message;
	}
	public void setTimeStamp(LocalDateTime timeStamp) {
		this.timeStamp = timeStamp;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
}

