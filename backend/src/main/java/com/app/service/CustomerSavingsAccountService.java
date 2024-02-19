package com.app.service;

import java.math.BigDecimal;

public interface CustomerSavingsAccountService {
	
	Object [] getAccountBalanceAndAccountNumberByCustomerId(Long customerId);
	
	//	BigDecimal getAccountBalanceByCustomerId(Long customerId);

}
