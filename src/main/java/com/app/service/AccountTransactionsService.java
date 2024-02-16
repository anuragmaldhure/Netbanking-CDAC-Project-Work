package com.app.service;

import java.util.List;

import com.app.dto.AccountTransactionsDTO;
import com.app.entities.AccountTransactions;

public interface AccountTransactionsService {
	
	List<AccountTransactionsDTO> getAllTransactionDetails(Long customerId);
	
	// get all transactions : pagination
	List<AccountTransactionsDTO> getAllTransactionDetailsByCustomer(Long customerId, int pageNumber, int pageSize);

}
