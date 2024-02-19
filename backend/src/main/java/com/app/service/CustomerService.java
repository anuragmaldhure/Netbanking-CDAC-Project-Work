package com.app.service;

import java.util.Optional;

import com.app.dto.customer.CreateNewCustomerDTO;
import com.app.dto.customer.CustomerDetailsDTO;
import com.app.entities.BankEmployeeDetails;
import com.app.entities.CustomerDetails;

public interface CustomerService {
	
	CustomerDetails registerNewCustomer(CreateNewCustomerDTO customerDTO);
	
	Optional<CustomerDetailsDTO> getCustomerDetailsByCustomerId(Long customerId);

//	void changePassword(Long customerId, String currentPassword, String newPassword);
//
//	void changeKYCstatusReject(Long customerId);
//
//	void changeKYCstatusApproved(Long customerId);
//
	
}
