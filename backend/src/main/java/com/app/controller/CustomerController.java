package com.app.controller;

import static org.springframework.http.MediaType.IMAGE_GIF_VALUE;
import static org.springframework.http.MediaType.IMAGE_JPEG_VALUE;
import static org.springframework.http.MediaType.IMAGE_PNG_VALUE;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import com.app.entities.*;
import com.app.service.AccountTransactionsService;
import com.app.service.BeneficiaryService;
import com.app.service.CustomerService;
import com.app.service.EmailService;
import com.app.service.ImageHandlingService;
import com.app.service.OffersService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/Customer")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {
	
	@Autowired
	CustomerService customerService;
	
	@Autowired
	AccountTransactionsService accountTransactionsService;
	
	@Autowired
	EmailService emailService;
	
	@Autowired
	OffersService offersService;
	
	@Autowired 
	BeneficiaryService beneficiaryService;
	
	@Autowired
	@Qualifier("image_db")
	private ImageHandlingService imgService;
	
	public CustomerController() {
		System.out.println("in ctor of " + getClass());
	}
	
//  Page 1 => /public 
//	Page 2 => /login 
	
//  Page 3 => /register
	@PostMapping("/CreateNewAccount")
	public CustomerDetails registerNewCustomer(@RequestBody CustomerDetails customer) {
		System.out.println("in add new customer " + customer);
		return customerService.registerNewCustomer(customer);
	}
	
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
	
	
	
	//********************************
	
	//KYC
//  upload image from clnt n saving it either on db or in server side folder
	// http://host:port/customer/documents/photo/{customerId} ,
	// method=POST , req param :
	// multipart file(image data)
	@PostMapping(value = "/documents/photo/{customerId}", consumes = "multipart/form-data")
	public ResponseEntity<?> uploadCustomerPhoto(@PathVariable Long customerId, @RequestParam MultipartFile imageFile)
			throws IOException, RuntimeException {
		System.out.println("in upload customer photo " + customerId);
		return ResponseEntity.status(HttpStatus.CREATED).body(imgService.uploadCustomerPhoto(customerId, imageFile));
	}

	// serve(download image) of specific customer
	// http://host:port/employees/images/{empId} , method=GET
	@GetMapping(value =  "/documents/photo/{customerId}", produces = { IMAGE_GIF_VALUE, IMAGE_JPEG_VALUE, IMAGE_PNG_VALUE })
	public ResponseEntity<?> serveCustomerPhoto(@PathVariable Long customerId) throws IOException {
		System.out.println("in download customer photo " + customerId);
		return ResponseEntity.ok(imgService.downloadCustomerPhoto(customerId));
	}
	
	
	//********************************
	
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
	@PostMapping("/FundTransfer/AddBenificiary24")
	public Beneficiary addEmpDetails(@RequestBody Beneficiary beneficiary) {
		System.out.println("in add beneficiary customer controller : " + beneficiary);
		return beneficiaryService.addBenDetails(beneficiary);
	}

	//Get All Beneficiaries
	@GetMapping("/FundTransfer/ViewAllBeneficiaries/{customerId}")
	List<Beneficiary> getAllBenificiaries(@PathVariable Long customerId){
		System.out.println("in get all beinifiaries by customer id in customer controller");
		return beneficiaryService.getAllBenificiariesDetails(customerId);
	}
	
	//Get Beneficiary
//	@GetMapping("/FundTransfer/ViewBeneficiaryDetails/{benId}")


	//Delete Beneficiary
	@DeleteMapping("/FundTransfer/DeleteBeneficiary/{benId}")
	public String deleteBenDetails(@PathVariable Long benId)
	{
		System.out.println("in del beneficiary "+benId);
		return beneficiaryService.deleteBenificiary(benId);
	}

//Page 29 =>  Customer/OtherServices/MessageAndEmailAlerts29 -> NEED TO IMPLEMENT AND REFACTOR DB
	
	//Change Password
	@PutMapping("/OtherServices/ChangePassword30/{customerId}")
    public ResponseEntity<String> changePassword(@PathVariable Long customerId,
    											@RequestParam String currentPassword,
    											@RequestParam String newPassword) {
        try {
        	customerService.changePassword(customerId, currentPassword, newPassword);
            return ResponseEntity.ok("Password changed successfully.");
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error changing password.");
        }
	}
	
	//Get All available offers
	@GetMapping("/OtherServices/OffersAvailableForMe31/{customerId}")
	List<Offers> getAllOffersAvailableForMe(@PathVariable Long customerId){
		System.out.println("in get all offers for customer " + customerId);
		return offersService.getAllOffersAvailableForMe(customerId);
	}

	//Get Contact Details 
//	@GetMapping("/OtherServices/ContactUs37")  -> NEED TO IMPLEMENT AND REFACTOR DB
	
	//Get Tutorials Video links 
//	@GetMapping("/OtherServices/ContactUs37")  -> NEED TO IMPLEMENT AND REFACTOR DB

	
//			Page 39 =>  Customer/Logout39
//			Page 40 =>  Customer/LogoutSuccess40

}
