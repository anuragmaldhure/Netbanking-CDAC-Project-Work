package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.AccountTransactionsDTO;
//import com.app.entities.Beneficiary;
import com.app.entities.CustomerDetails;

public interface AccountTransactionsService {
	
	List<AccountTransactionsDTO> getAllTransactionDetails(Long customerId);
	
	// get all transactions : pagination
	List<AccountTransactionsDTO> getAllTransactionDetailsByCustomer(Long customerId, int pageNumber, int pageSize);

	void withdrawMoney(Long customerId ,Double amountToWithdraw, String remarks);
	
	void depositMoney(Long employeeId, String accountNumber, Double amountToDeposit, String remarks);

//	void sendMoney(Double amountToSend, Optional<CustomerDetails> customer, Optional<Beneficiary> beneficiary,
//			String remarks);

}
