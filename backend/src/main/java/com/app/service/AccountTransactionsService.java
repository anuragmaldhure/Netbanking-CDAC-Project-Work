package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;

import com.app.entities.AccountTransactions;

public interface AccountTransactionsService {
	
	List<AccountTransactions> getAllTransactionDetails(Long customerId);

	Page<AccountTransactions> getTransactionsByCustomerId(Long customerId, int pageNumber, int pageSize);

}
