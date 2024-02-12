package com.app.controller;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import com.app.entities.*;
import com.app.service.AccountTransactionsService;
import com.app.service.CustomerService;
import com.app.service.EmailService;
import com.app.service.SMSService;

import org.apache.tomcat.util.net.TLSClientHelloExtractor;
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
	
	@Autowired 
	SMSService smsService;
	
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
	@GetMapping("/Account")
	public ResponseEntity<?> getPagedTransactions(
            @RequestParam Long customerId,
            @RequestParam(defaultValue = "0") int pageNumber,
            @RequestParam(defaultValue = "3") int pageSize) {
		
		System.out.println("in get paged transaction by customer in customer controller");

        try {
            // Validate customerId (you may add more validation as needed)
            if (customerId <= 0) {
                return ResponseEntity.badRequest().body("Invalid customerId");
            }

            // Get transactions for the customer using the service
            Page<AccountTransactions> transactions = accountTransactionsService.getTransactionsByCustomerId(customerId, pageNumber, pageSize);

            // Check if transactions are found
            if (transactions.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NO_CONTENT).body("No transactions found for the customer");
            }

            return ResponseEntity.ok(transactions);
        } catch (Exception e) {
            // Log the exception or handle it according to your needs
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred");
        }
    }

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
	@GetMapping("/FundTransfer/SendMoney21")
	public void sendEmail(){
		emailService.sendOtp("anurag.maldhure@gmail.com");
		smsService.getOTP(emailService.getOtp());

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
