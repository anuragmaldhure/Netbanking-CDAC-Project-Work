package com.app.service;

import java.math.BigDecimal;

public interface CustomerSavingsAccountService {
	
	BigDecimal getAccountBalanceByCustomerId(Long customerId);

}
