package com.app.controller;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.customer.CustomerAddressDTO;
import com.app.dto.customer.CustomerDetailsDTO;
import com.app.dto.customer.CustomerDocumentsDTO;
import com.app.dto.customer.CustomerPhotoDTO;
import com.app.dto.customer.CustomerSavingAccountsDTO;
import com.app.entities.BankEmployeeDetails;
import com.app.service.AccountTransactionsService;
import com.app.service.CustomerAddressService;
import com.app.service.CustomerDocumentsService;
import com.app.service.CustomerSavingsAccountService;
import com.app.service.CustomerService;
import com.app.service.EmailService;
import com.app.service.EmployeeService;

@RestController
@RequestMapping("/Employee")
public class EmployeeController {
	
	@Autowired
	private CustomerService customerService;
	
	@Autowired
	private CustomerAddressService cutstomerAddressService;
	
	@Autowired
	private CustomerSavingsAccountService customerSavingsAccountService;
	
	@Autowired 
	private CustomerDocumentsService customerDocumentsService;
	
	@Autowired
	private AccountTransactionsService accountTransactionsService;
	
	@Autowired
	private EmployeeService employeeService;
	
	@Autowired
	private EmailService emailService;
	
	public EmployeeController() {
		System.out.println("in ctor of " + getClass());
	}
	
//  put last login -> needs to be called from Frontend everytime user logs in
	@PutMapping("/updateLastLogin/{employeeId}")
	public  ResponseEntity<String>  updateLastLogin(@PathVariable Long employeeId) {
		System.out.println("in put last login of logged in employee "+ employeeId);	
		try {
			employeeService.updateLastLogin(employeeId);		
			return ResponseEntity.ok("Successfully updated last login of employee id: " + employeeId );
		} catch (EntityNotFoundException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error in updating last login ...");
		}
	}
	
	//	Get logged in employee's employeeId from Spring Security Security Context
	@GetMapping("/User")
	public Long getEmployeeID(){
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String username = authentication.getName(); // This gets the username
		System.out.println("in get employee details INTERNALLY by username from Security Context, USERNAME ->" + username );
		
		Optional<BankEmployeeDetails> bankEmployeeDetails = employeeService.getEmployeeDetailsByUsername(username);
		
		System.out.println("in get employee id INTERNALLY by username, Employee ID ->" + bankEmployeeDetails.get().getEmployeeId());
		return bankEmployeeDetails.get().getEmployeeId();
	}
	
//	Get logged in employee's details from Spring Security Security Context
	@GetMapping("/User/GetMyDetails")
	public BankEmployeeDetails getMyDetails(){
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String username = authentication.getName(); // This gets the username
		System.out.println("in get employee details INTERNALLY by username from Security Context, USERNAME ->" + username );
		
		Optional<BankEmployeeDetails> bankEmployeeDetails = employeeService.getEmployeeDetailsByUsername(username);
		
		System.out.println("in get employee details INTERNALLY by username, Employee object ->" + bankEmployeeDetails);
		return bankEmployeeDetails.get();
	}

	
	//SEARCH FUNCTIONALITIES
	//For getting customer details by account number
	@GetMapping("/Accounts/ViewCustomerDetails/{accountNumber}")
	public Optional<CustomerDetailsDTO> getCustomerDetailsByAccountNumber(@PathVariable String accountNumber) {
		System.out.println("in get Customer Details by account number in Employee");
		return customerService.getCustomerDetailsByAccountNumber(accountNumber);
	}
	
	@GetMapping("/Accounts/ViewCustomerDetailsByFname/{fname}")
	public List<CustomerDetailsDTO> getCustomerDetailsByFirstName(@PathVariable String fname) {
		System.out.println("in get Customer Details by fname in Employee");
		return customerService.getCustomerDetailsByFirstName(fname);
	}
	
	@GetMapping("/Accounts/ViewCustomerDetailsByLname/{lname}")
	public List<CustomerDetailsDTO> getCustomerDetailsByLastName(@PathVariable String lname) {
		System.out.println("in get Customer Details by lname in Employee");
		return customerService.getCustomerDetailsByLastName(lname);
	}
	
	
	//get all customer details details
	@GetMapping("/Accounts/GetAllCustomerDetails")
	public List<CustomerDetailsDTO> getAllCustomerDetails() {
		System.out.println("in get all customers details by c id in Employee");
		return customerService.getAllCustomerDetails();
	}
	
	//Reject KYC
	@PutMapping("/Accounts/RejectKYC/{customerId}")
    public ResponseEntity<String> rejectKYC(@PathVariable Long customerId) {
		try {
		customerService.changeKYCstatusReject(customerId);
		Optional<CustomerDetailsDTO> customer = customerService.getCustomerDetailsByCustomerId(customerId);
		System.out.println(customer);
		
		emailService.sendKYCRejectionMail(customer.get().getEmailId(),  
				customer.get().getAccountHolderFirstName(),
				customer.get().getAccountHolderLastName());
		
		return ResponseEntity.ok("Customer KYC rejected!");
		} catch (EntityNotFoundException e) {
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		} catch (RuntimeException e) {
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		} catch (Exception e) {
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error changing KYC status...");
		}
	}
	
	
	//Approve KYC
	@PutMapping("/Accounts/ApproveKYC/{customerId}")
    public ResponseEntity<String> approveKYC(@PathVariable Long customerId) {
		try {
		customerService.changeKYCstatusApproved(customerId);
		Optional<CustomerDetailsDTO> customer = customerService.getCustomerDetailsByCustomerId(customerId);
		
		
		emailService.sendKYCApprovedMail(customer.get().getEmailId(),
				customer.get().getAccountHolderFirstName(),
				customer.get().getAccountHolderLastName());
		
		return ResponseEntity.ok("Customer KYC approved");
		} catch (EntityNotFoundException e) {
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		} catch (RuntimeException e) {
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		} catch (Exception e) {
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error changing KYC status...");
		}
	}
	
	//Freeze account - deactivate
	@PutMapping("/Accounts/DeactivateOrFreezeAccountTemporarily/{accountNumber}")
    public ResponseEntity<String> DeactivateOrFreezeAccount(@PathVariable String accountNumber) {
		try {
		customerService.deactivateAccountTemporarily(accountNumber);
		
		return ResponseEntity.ok("Customer Account deactivated!");
		} catch (EntityNotFoundException e) {
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		} catch (RuntimeException e) {
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		} catch (Exception e) {
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error de - activating / freezing Account...");
		}
	}
	
	//Re-activate account
	@PutMapping("/Accounts/ReactivateAccount/{accountNumber}")
    public ResponseEntity<String> ReactivateAccount(@PathVariable String accountNumber) {
		try {
		customerService.reactivateAccount(accountNumber);
		
		return ResponseEntity.ok("Customer account reactivated!");
		} catch (EntityNotFoundException e) {
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		} catch (RuntimeException e) {
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		} catch (Exception e) {
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error reactivating Account...");
		}
	}
	
	//get address details
	@GetMapping("/Accounts/ViewCustomerAddress/{customerId}")
	public Optional<CustomerAddressDTO> getAddressDetails(@PathVariable Long customerId) {
		System.out.println("in get Customer address by c id in Employee");
		return cutstomerAddressService.getAddressDetails(customerId);
	}
	
	//get documents
	@GetMapping("/Accounts/GetDocuments/{customerId}")
	public Optional<CustomerDocumentsDTO> getCustomerDocuments(@PathVariable Long customerId) {
		System.out.println("in get Customer Documents Aadhaar And Pan by c id in Employee");
		return customerDocumentsService.getDocumentsAadhaarAndPan(customerId);
	}
	
	//get customer photo
	@GetMapping("/Accounts/GetCustomerPhoto/{customerId}")
	public Optional<CustomerPhotoDTO> getCustomerPhoto(@PathVariable Long customerId) {
		System.out.println("in get Customer Photo by c id in Employee");
		return customerDocumentsService.getCustomerPhoto(customerId);
	}
	
	//get customer savings account details
	@GetMapping("/Accounts/GetSavingAccountsDetails/{customerId}")
	public Optional<CustomerSavingAccountsDTO> getCustomerAccountDetails(@PathVariable Long customerId) {
		System.out.println("in get Customer saving account details by c id in Employee");
		return customerSavingsAccountService.getCustomerAccountDetails(customerId);
	}
	
	//from to
	@PostMapping("/FundTransfer/DepositMoney/{employeeId}/{accountNumber}")
	public ResponseEntity<String> depositMoneyDetails44 (@PathVariable String employeeId, @PathVariable String accountNumber,
			@RequestParam String amountToDeposit, @RequestParam String remarks) {
		try {
			accountTransactionsService.depositMoney(Long.valueOf(employeeId), accountNumber,Double.valueOf(amountToDeposit), remarks);
			
		return ResponseEntity.ok("Successfully deposited " + amountToDeposit + " in account of customer account number: "+ accountNumber);
		} catch (EntityNotFoundException e) {
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		} catch (RuntimeException e) {
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		} catch (Exception e) {
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error in depositing money...");
		}
	}
		
	//to
	@PostMapping("/sendFeebackMail/{customerId}")
	public ResponseEntity<String> sendFeedbackMail (@PathVariable Long customerId, @RequestParam String emailSubject, @RequestBody String emailBody) {
		try {
			Optional<CustomerDetailsDTO> customerDetailsDTO = customerService.getCustomerDetailsByCustomerId(customerId);
			
			emailService.sendFeedbackMailWithSubjectAndBody(customerDetailsDTO.get().getEmailId(), emailSubject, emailBody);
			
			return ResponseEntity.ok("Successfully sent feedbackto customer id : " + customerId);
		} catch (EntityNotFoundException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error in sending feedback...");
		}
	}
}
