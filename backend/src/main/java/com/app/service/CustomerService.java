package com.app.service;

import java.util.Optional;

import com.app.entities.BankEmployeeDetails;
import com.app.entities.CustomerDetails;

public interface CustomerService {
	Optional<CustomerDetails> getCustomerDetailsByCustomerId(Long customerId);

	void changePassword(Long customerId, String currentPassword, String newPassword);

	void changeKYCstatusReject(Long customerId);

	void changeKYCstatusApproved(Long customerId);

	CustomerDetails registerNewCustomer(CustomerDetails customer);

}
