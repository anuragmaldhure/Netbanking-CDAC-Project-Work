package com.app.service;

import java.sql.Timestamp;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.app.dao.AccountTransactionsDao;
import com.app.dao.CustomerDao;
import com.app.dao.EmployeeDao;
import com.app.dto.AccountTransactionsDTO;
import com.app.entities.AccountTransactions;
import com.app.entities.BankEmployeeDetails;
import com.app.entities.CustomerDetails;

import org.apache.catalina.mapper.Mapper;
import org.modelmapper.ModelMapper;

@Service
@Transactional
public class AccountTransactionsServiceImpl implements AccountTransactionsService {

	@Autowired
	private CustomerDao customerDao;
	
	@Autowired 
	private AccountTransactionsDao accountTransactionsDao;
	
	@Autowired
	private EmployeeDao bankEmployeeDao;
	
	@Autowired
	private  ModelMapper mapper;
	
	@Override
	public List<AccountTransactionsDTO> getAllTransactionDetails(Long customerId) {
	    List<AccountTransactionsDTO> list = accountTransactionsDao.findAllTransactionsWithCustomerIdInCustomerDetails(customerId)
	            .stream()
	            .map(transaction -> mapper.map(transaction, AccountTransactionsDTO.class))
	            .collect(Collectors.toList());

	    return list;
	}

	@Override
	public List<AccountTransactionsDTO> getAllTransactionDetailsByCustomer(Long customerId, int pageNumber, int pageSize) {
//		 Creates a PageRequest(imple class of Pageable : i/f for pagination) based
//		 upon page no n size
		Pageable pageable = PageRequest.of(pageNumber, pageSize);
		
		
		// fetches the Page of Transactions --> getContent() --> List<AccountTransactions>
//		List<AccountTransactions> transactionsList = accountTransactionsDao.findAll(pageable).getContent();
		
		Page<AccountTransactions> transactionsPage = accountTransactionsDao.findAllTransactionsWithCustomerIdInCustomerDetailsPagable(customerId, pageable);
		
		// Retrieves the content from the Page
	    List<AccountTransactions> transactionsList = transactionsPage.getContent();
		
		return transactionsList.stream()
//				.filter(trans -> trans.getTransactionById()==customerId)
					.map(trans -> mapper.map(trans, AccountTransactionsDTO.class))
							.collect(Collectors.toList());
		 
	}

	@Override
	public void depositMoney(Double amountToDepoosit, Long customerId, Long employeeId, String remarks) {
		CustomerDetails customer = customerDao.findById(customerId)
                .orElseThrow(() -> new EntityNotFoundException("Customer not found with ID: " + customerId));
		
		BankEmployeeDetails bankEmployee = bankEmployeeDao.findById(employeeId)
                .orElseThrow(() -> new EntityNotFoundException("Employee not found with ID: " + employeeId));
		
		if(customer.getKycStatus()== null) {
	        // KYC error
	        throw new RuntimeException("Customer KYC error! Please verify the KYC first...");
		}
		 // KYC error
		else if (customer.getKycStatus()== false) {
            throw new RuntimeException("KYC is already rejected! Ask the customer to reapply for KYC verification...");
        }
		//if KYC is already approved
		else {
			AccountTransactions transaction = new AccountTransactions();
			transaction.setCustomer(customer);
			transaction.setRecipientId(customerId);
			transaction.setTransactionAmount(amountToDepoosit);
			transaction.setTransactionById(employeeId);
			transaction.setTransactionRemarks(remarks);
			transaction.setTransactionTimestamp(new Timestamp(System.currentTimeMillis()));
			transaction.setTransactionType("+");
			accountTransactionsDao.save(transaction);
		}
	}
}
