package com.app.service;

import java.util.Optional;

import com.app.dto.customer.CustomerSavingAccountsDTO;


public interface CustomerSavingsAccountService {
	
	Object [] getAccountBalanceAndAccountNumberByCustomerId(Long customerId);

	Optional<CustomerSavingAccountsDTO> getCustomerAccountDetails(Long customerId);
	
}
