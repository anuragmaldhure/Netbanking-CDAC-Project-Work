package com.app.service;

import com.app.service.SMSService;

import com.twilio.Twilio;
import com.twilio.converter.Promoter;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

import java.net.URI;

import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class SMSService {
  // Find your Account Sid and Token at twilio.com/console
  public static final String ACCOUNT_SID = "ACbe316e29457e1f007a11509be44d15f0";
  public static final String AUTH_TOKEN = "18639d7ed01e10118298c321bd42c98a";
  
  public static void getOTP(String otp) {
    Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
    Message message = Message.creator(
      new com.twilio.type.PhoneNumber("+919673597718"),  // Replace with your Twilio phone number
      new PhoneNumber("+919765020344"),  // Replace with the recipient's phone number
      "Aarna Bank : Secure OTP for your transaction  => "+otp+ "  Please do not share this OTP with anyone")
    .create();
  }
}