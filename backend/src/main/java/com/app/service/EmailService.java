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

    public String sendOtp(String userEmail) {
        setOtp(generateOtp());

        try {
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setTo(userEmail);
            helper.setSubject("Aarna Bank : Secure OTP for your transaction");
            helper.setText("Your OTP is: " + otp +"\nPlease do not share OTP for security reasons. In case of any suspicious activity, contact us"+
            "\n"
            + "© Aarna Bank ");
            

            javaMailSender.send(message);
            return otp;
        } catch (MessagingException e) {
            e.printStackTrace();
            // Handle exception
        }
        return null;
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