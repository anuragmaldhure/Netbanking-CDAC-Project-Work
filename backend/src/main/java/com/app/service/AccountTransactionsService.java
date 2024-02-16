package com.app.service;

import java.util.List;

import com.app.dto.AccountTransactionsDTO;

public interface AccountTransactionsService {
	
	List<AccountTransactionsDTO> getAllTransactionDetails(Long customerId);
	
	// get all transactions : pagination
	List<AccountTransactionsDTO> getAllTransactionDetailsByCustomer(Long customerId, int pageNumber, int pageSize);

	void depositMoney(Double amountToDepoosit, Long customerId, Long employeeId, String remarks);

}
