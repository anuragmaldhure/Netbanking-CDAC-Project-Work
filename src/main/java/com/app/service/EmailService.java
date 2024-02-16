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
    
    public String sendKYCApprovedMail(String userEmail, String FirstName, String LastName) {
        try {
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setTo(userEmail);
            helper.setSubject("Aarna Bank : Your KYC verification was successfull!");
            String messageString = "Dear "+ FirstName + " "+ LastName +", Our bank employee has approved your application for KYC verification! You can login to your netbanking "
            		+ "account and carry put your transactions (Withdraw/ Depoit/ Send Money). In case of any issues, contact us via contact details given in Other Services / Contact Us "
            		+ "section."
            		+"\n"
            		+"Happy Banking :)"
            		+"\n"
            		+"\n"+ "© Aarna Bank ";
            helper.setText(messageString);

            javaMailSender.send(message);
            return messageString;
        } catch (MessagingException e) {
            e.printStackTrace();
            // Handle exception
        }
        return null;
    }
    
    public String sendKYCRejectionMail(String userEmail, String FirstName, String LastName) {
        try {
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setTo(userEmail);
            helper.setSubject("Aarna Bank : Your KYC verification was rejected!");
            String messageString = "Dear "+ FirstName + " "+ LastName +", Our bank employee has rejected KYC verification due to incorrect / incompliance of "
            		+ "submitted data!! Please login to your netbanking account and contact us via contact details given in Other Services / Contact Us "
            		+ "section."+"Please complete your KYC to carry out transaction (Withdraw/ Depoit/ Send Money)"
            		+"\n" + "© Aarna Bank ";
            helper.setText(messageString);

            javaMailSender.send(message);
            return messageString;
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