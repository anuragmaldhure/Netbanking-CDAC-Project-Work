package com.app.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.BankEmployeeDetails;
import com.app.entities.CustomerDetails;
import com.app.service.CustomerService;

@RestController
@RequestMapping("/Employee")
public class EmployeeController {
	
	@Autowired
	private CustomerService customerService;
	
	@GetMapping("/Accounts/ViewCustomerDetails48/{customerId}")
	public Optional<CustomerDetails> getCustomerDetailsByAccountNumber(@PathVariable Long customerId) {
		System.out.println("in get Customer Details by Manager");
		return customerService.getCustomerDetailsByCustomerId(customerId);
	}
	
	//Get all list of pending customer KYC
//	@GetMapping("/Accounts/VerfiyOrApproveKYCPending50")
//	public Optional<CustomerDetails> getCustomerDetailsByAccountNumber(@PathVariable Long customerId) {
//		System.out.println("in get Customer Details by Manager");
//		return customerService.getCustomerDetailsByCustomerId(customerId);
//	}

	//Change the verification status
//	@PutMapping("/Accounts/VerfiyOrApproveKYC51/{customerId}")
//	public Optional<CustomerDetails> getCustomerDetailsByAccountNumber(@PathVariable Long customerId) {
//		System.out.println("in get Customer Details by Manager");
//		return customerService.getCustomerDetailsByCustomerId(customerId);
//	}
	

	//To get OTP on mobile/email and verify it
//	@PostMapping("/FundTransfer/DepositMoney44")
//	public Optional<CustomerDetails> (@PathVariable Long customerId) {

//	}
	
	//Deposit transaction after getting amount and remarks from request
//	@GetMapping("/FundTransfer/DepositMoney45")
//	public Optional<CustomerDetails> (@PathVariable Long customerId) {

//	}
}
