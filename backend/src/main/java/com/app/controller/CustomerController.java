package com.app.controller;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import com.app.entities.*;
import com.app.service.AccountTransactionsService;
import com.app.service.CustomerService;
import com.app.service.EmailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Customer")
public class CustomerController {
	
	@Autowired
	CustomerService customerService;
	
	@Autowired
	AccountTransactionsService accountTransactionsService;
	
	@Autowired
	EmailService emailService;
	
//  Page 1 => /public 
//	Page 2 => /login 
//  Page 3 => /register
//	Page 4 => /registerSuccess

//	Get all transactions of a customer
	@GetMapping("/Account/{customerId}")
	List<AccountTransactions> getAllTransaction(@PathVariable Long customerId){
		System.out.println("in get all transaction by customer id in customer controller");
		return accountTransactionsService.getAllTransactionDetails(customerId);
	}
	
//	Pagination to get last 3 transactions set - INTERNAL SERVER ERROR 500
//	@GetMapping("/transactions/{customerId}")


	//Get account balance
//	@GetMapping("/FundTransfer/WithdrawMoney6")

	
	//To get OTP on mobile/email and verify it
//	@PostMapping("/FundTransfer/WithdrawMoney7")

	
	//Withdraw transaction after getting amount and remarks from request
//	@GetMapping("/FundTransfer/WithdrawMoney8")
//	public Optional<CustomerDetails> (@PathVariable Long customerId) {

//	}
	
	//Get Account statement period details
//	@PostMapping("/Account/AccountStatement9")

	
	//Post Account statement period details
//	@PostMapping("/Account/AccountStatement9")

	
	//Get all transaction details of given period
//	@GetMapping("/Account/GenerateAccountStatement10")

	//Get all transaction details of given period
//	@GetMapping("/Account/KYC11")
	
	//Get String response of pending KYC if KYC status = 0
//	@GetMapping("/Account/KYCPending12")

	//Get String response of pending KYC if KYC status = 0
//	@PostMapping("/FundTransfer/TransferWithinBank20")
	
	//Get account balance
	@GetMapping("/FundTransfer/SendMoney21/{customerId}")
	public ResponseEntity<String> sendOtpToCustomer(@PathVariable Long customerId) {
        Optional<CustomerDetails> customerDetails = customerService.getCustomerDetailsByCustomerId(customerId);
        if(!customerDetails.isEmpty()){
        	String email = customerDetails.get().getEmailId();
            System.out.println("Sending OTP as email to "+email);
            String otpSentToCustomer = emailService.sendOtp(email); 		//OTP generated : otpSentToCustomer 
            System.out.println("OTP sent to customer : "+ otpSentToCustomer);
            return ResponseEntity.ok("OTP sent successfully to " + email);
        }
        return ResponseEntity.ok("Customer not found!");
	}
	
	//To get OTP on mobile/email and verify it
//	@PostMapping("/FundTransfer/SendMoney22")

	
	//Withdraw transaction after getting amount and remarks from request
//	@GetMapping("/FundTransfer/SendMoney23")

	//Add Beneficiary
//	@PostMapping("/FundTransfer/AddBenificiary24")

	//Get All Beneficiaries
//	@GetMapping("/FundTransfer/ViewAllBeneficiaries")

	
	//Get Beneficiary
//	@GetMapping("/FundTransfer/ViewBeneficiaryDetails/{benId}")


	//Delete Beneficiary
//	@DeleteMapping("/FundTransfer/DeleteBeneficiary/{benId}")

//Page 29 =>  Customer/OtherServices/MessageAndEmailAlerts29 -> NEED TO IMPLEMENT AND REFACTOR DB
	
	//Change Password
	@PostMapping("/OtherServices/ChangePassword30/{customerId}")
    public ResponseEntity<String> changePassword(@PathVariable Long customerId,
                                                @RequestParam String newPassword) {
        try {
        	customerService.changePassword(customerId, newPassword);
            return ResponseEntity.ok("Password changed successfully.");
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error changing password.");
        }
	}
	
	//Get All available offers
//	@GetMapping("/OtherServices/OffersAvailableForMe31/{customerID}")

	//Get Contact Details 
//	@GetMapping("/OtherServices/ContactUs37")  -> NEED TO IMPLEMENT AND REFACTOR DB
	
	//Get Tutorials Video links 
//	@GetMapping("/OtherServices/ContactUs37")  -> NEED TO IMPLEMENT AND REFACTOR DB

	
//			Page 39 =>  Customer/Logout39
//			Page 40 =>  Customer/LogoutSuccess40

}
