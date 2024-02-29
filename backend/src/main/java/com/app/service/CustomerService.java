package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.app.dto.customer.CreateNewCustomerDTO;
import com.app.dto.customer.CustomerDetailsDTO;
import com.app.dto.customer.CustomerEssentialDataDTO;
import com.app.entities.CustomerDetails;

public interface CustomerService {
	
	CustomerDetails registerNewCustomer(CreateNewCustomerDTO customerDTO);
	
	Optional<CustomerDetailsDTO> getCustomerDetailsByCustomerId(Long customerId);

	Optional<CustomerDetailsDTO> getCustomerDetailsByAccountNumber(String accountNumber);

	List<CustomerDetailsDTO> getCustomerDetailsByFirstName(String fname);

	List<CustomerDetailsDTO> getCustomerDetailsByLastName(String lname);

	void changePassword(Long customerId, String currentPassword, String newPassword);

	void changeKYCstatusReject(Long customerId);

	void changeKYCstatusApproved(Long customerId);

	List<CustomerDetailsDTO> getAllCustomerDetails();

	void deactivateAccountTemporarily(String accountNumber);

	void reactivateAccount(String accountNumber);

	void addCustomerEssentialData(Long customerId, CustomerEssentialDataDTO customerEssentialData);

	Optional<CustomerDetailsDTO> getCustomerDetailsByUsername(String username);

	void updateLastLogin(Long customerId);

	void doPasswordResetAndSendMailToCustomer(String accountNumber);

	String getTotalNumberOfCustomers();

//	Optional<CustomerDetails> findByCustomerId(Long customerId);
}
