package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.AccountTransactionsDTO;
import com.app.entities.Beneficiary;
import com.app.entities.CustomerDetails;

public interface AccountTransactionsService {
	
	List<AccountTransactionsDTO> getAllTransactionDetails(Long customerId);
	
	// get all transactions : pagination
	List<AccountTransactionsDTO> getAllTransactionDetailsByCustomer(Long customerId, int pageNumber, int pageSize);

	void depositMoney(Double amountToDepoosit, Long customerId, Long employeeId, String remarks);

	void withdrawMoney(Double amountToWithdraw, Long customerId, String remarks);

	void sendMoney(Double amountToSend, Optional<CustomerDetails> customer, Optional<Beneficiary> beneficiary,
			String remarks);

}
