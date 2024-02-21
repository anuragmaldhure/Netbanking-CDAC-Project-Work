package com.app.service;

import java.util.Random;

import org.springframework.cache.annotation.CacheConfig;
import javax.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import com.app.dao.CustomerDao;
import com.app.entities.CustomerDetails;
import org.springframework.stereotype.Service;
import org.springframework.cache.annotation.Cacheable;

@Service
@CacheConfig(cacheNames = "otpCache")
public class OTPServiceImpl implements OTPService{
	
	@Autowired
	private EmailService emailService;
	
	@Autowired
	private OTPCache otpCache;
	
	
	@Autowired
	private CustomerDao customerDao; 

    @Override
    //@Cacheable(value = "otpCache", key = "#customerId", unless = "#result == null")
    @Cacheable(value = "otpCache", key = "#customerId", unless = "#result == null", cacheManager = "cacheManager", cacheNames = "otpCache", sync = true)
    public String generateOTP(Long customerId) {
		CustomerDetails customer = customerDao.findById(customerId)
                .orElseThrow(() -> new EntityNotFoundException("Customer not found with ID: " + customerId));
        // Generate a 6-digit OTP
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);
        // Store OTP in cache
//        otpCache.put(customerId, String.valueOf(otp));
        otpCache.put(customerId, String.valueOf(otp));
        emailService.sendOtp(customer.getEmailId(), String.valueOf(otp));
        return String.valueOf(otp);
    }

    @Override
    public boolean verifyOTP(Long customerId, String otp) {
        String cachedOTP = otpCache.get(customerId);
        return otp.equals(cachedOTP);
    }

}
