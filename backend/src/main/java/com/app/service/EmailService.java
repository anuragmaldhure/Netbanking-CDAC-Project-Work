package com.app.service;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.app.entities.CustomerDetails;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import java.math.BigDecimal;
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
            		+"\nHappy Banking :)"
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
    
    public String sendMoneyDepositMail(String userEmail, String FirstName, String LastName, Double amountDeposited,
    		Long employeeId) {
        try {
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setTo(userEmail);
            helper.setSubject("Aarna Bank : ₹ "+ amountDeposited +" deposited in your bank account!");
            String messageString = "Dear "+ FirstName + " "+ LastName +", Our bank employee with id : " + employeeId + " has successfully deposited  ₹"+ amountDeposited +" in your bank account!"
            		+ " In case of any suspicious activity, contact us."
            		+"\n"
            		+"\nAlso checkout our latest offers crafted just for for you in Offers Section."
            		+"\n"
            		+"\nHappy Banking :)"
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
      
    public String withdrawMoneyMail(String emailId, String firstName, String lastName, Double amountToWithdraw) {
        try {
            MimeMessage message = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setTo(emailId);
            helper.setSubject("Aarna Bank: ₹" + amountToWithdraw + " Successfully Withdrawn from Your Bank Account");

            String messageString = "Dear " + firstName + " " + lastName + ",\n\n" +
                    "We are writing to inform you that an amount of ₹" + amountToWithdraw + " has been successfully withdrawn from your bank account.\n\n" +
                    "If you have any concerns regarding this transaction or notice any suspicious activity, please contact us immediately.\n\n" +
                    "We also invite you to explore our latest offers, specially curated for you in the Offers Section.\n\n" +
                    "Thank you for banking with us!\n\n" +
                    "Best Regards,\n\n" +
                    "Aarna Bank";

            helper.setText(messageString);

            javaMailSender.send(message);
            return messageString;
        } catch (MessagingException e) {
            e.printStackTrace();
        }
        return null;
    }

	public String sendMoneyMail(String emailId, String accountHolderFirstName, String accountHolderLastName,
            String beneficiaryFirstName, String beneficiaryLastName, CustomerDetails beneficiaryAccountNumber) {
			try {
			MimeMessage message = javaMailSender.createMimeMessage();
			MimeMessageHelper helper = new MimeMessageHelper(message, true);
			
			helper.setTo(emailId);
			helper.setSubject("Aarna Bank: New Beneficiary Added to Your Bank Account");
			
			String messageString = "Dear "+ accountHolderFirstName + " "+ accountHolderLastName +",\n\n" +
				"We are pleased to inform you that a new beneficiary has been successfully added to your bank account!\n\n" +
			    "Beneficiary Account Number: "+ beneficiaryAccountNumber.getAccountNumber() +"\n\n" +
			    "As per our records, this account belongs to " + beneficiaryFirstName + " " + beneficiaryLastName + ".\n\n" +
			    "You have the flexibility to delete this beneficiary at any time through our net banking portal.\n\n" +
			    "Should you notice any suspicious activity, please do not hesitate to contact us.\n\n" +
			    "We also invite you to explore our latest offers, exclusively designed for you, in the Offers Section.\n\n" +
			    "Happy Banking! 😊\n\n" +
			    "Best Regards,\n\n" +
			    "Aarna Bank";
			
			helper.setText(messageString);
			
			javaMailSender.send(message);
			return messageString;
			} catch (MessagingException e) {
			e.printStackTrace();
			// Handle exception
			}
			return null;
		}

      
}