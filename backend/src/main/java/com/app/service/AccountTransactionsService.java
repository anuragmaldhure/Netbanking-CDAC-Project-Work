package com.app.service;

import java.util.List;

import com.app.dto.AccountTransactionsDTO;
//import com.app.entities.Beneficiary;

public interface AccountTransactionsService {
	
	List<AccountTransactionsDTO> getAllTransactionDetails(Long customerId);
	
	// get all transactions : pagination
	List<AccountTransactionsDTO> getAllTransactionDetailsByCustomer(Long customerId, int pageNumber, int pageSize);

	void withdrawMoney(Long customerId ,Double amountToWithdraw, String remarks);
	
	void depositMoney(Long employeeId, String accountNumber, Double amountToDeposit, String remarks);

	void sendMoney(Long customerId, String receiverAccountNumber, Double amountToSend, String remarks);



}
