package com.app.service;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Random;

@Service
public class EmailService {

    private final JavaMailSender javaMailSender;
    
    private String otp;

    public EmailService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void sendOtp(String userEmail) {
        setOtp(generateOtp());

        try {
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setTo(userEmail);
            helper.setSubject("Aarna Bank : Secure OTP for your transaction");
            helper.setText("Your OTP is: " + otp +"\n Please do not share this OTP with anyone. In case of any suspicious activity, contact us");

            javaMailSender.send(message);
        } catch (MessagingException e) {
            e.printStackTrace();
            // Handle exception
        }
    }

    private String generateOtp() {
        // Generate a 6-digit OTP
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);
        return String.valueOf(otp);
    }

	public String getOtp() {
		return otp;
	}

	public void setOtp(String otp) {
		this.otp = otp;
	}
      
}