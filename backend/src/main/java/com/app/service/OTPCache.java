package com.app.service;

import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.concurrent.ConcurrentTaskScheduler;
import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;
import java.util.Date;

@Component
public class OTPCache {

    private final Map<Long, String> otpMap = new ConcurrentHashMap<>();
    private final TaskScheduler scheduler = new ConcurrentTaskScheduler();

    public void put(Long customerId, String otp) {
        otpMap.put(customerId, otp);
        System.out.println("Generated new OTP : " + otp + " for customerId : " + customerId);
        long otpCreationTime = System.currentTimeMillis();
        scheduleRemoval(customerId, otpCreationTime + TimeUnit.MINUTES.toMillis(2));
    }

    public String get(Long customerId) {
        return otpMap.get(customerId);
    }

    private void scheduleRemoval(Long customerId, long expirationTime) {
        scheduler.schedule(() -> removeOTP(customerId), new Date(expirationTime));
    }

    private void removeOTP(Long customerId) {
        System.out.println("Removing OTP for customerId: " + customerId);
        String removedOTP = otpMap.remove(customerId);
        if (removedOTP != null) {
            System.out.println("OTP removed successfully for customerId: " + customerId);
        } else {
            System.out.println("No OTP found for customerId: " + customerId);
        }
    }
}
