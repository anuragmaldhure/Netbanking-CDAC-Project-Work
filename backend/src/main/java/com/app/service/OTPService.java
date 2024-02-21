package com.app.service;

public interface OTPService {
	
    String generateOTP(Long customerId);
    
    boolean verifyOTP(Long customerId, String otp);
}
