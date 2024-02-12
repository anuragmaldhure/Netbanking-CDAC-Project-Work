package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.app.dao.AccountTransactionsDao;
import com.app.dao.CustomerDao;
import com.app.entities.AccountTransactions;

@Service
@Transactional
public class AccountTransactionsServiceImpl implements AccountTransactionsService {

	@Autowired
	CustomerDao customerDao;
	
	@Autowired 
	AccountTransactionsDao accountTransactionsDao;
	
	@Override
	public List<AccountTransactions> getAllTransactionDetails(Long customerId) {
		return accountTransactionsDao.findAllTransactionsWithCustomerIdInCustomerDetails(customerId);
	}

	@Override
    public Page<AccountTransactions> getTransactionsByCustomerId(Long customerId, int pageNumber, int pageSize) {
        // Add validation for customerId as needed
        if (customerId <= 0) {
            throw new IllegalArgumentException("Invalid customerId");
        }

        // Create a PageRequest based on page number and size
        Pageable pageable = PageRequest.of(pageNumber, pageSize);

        // Fetch transactions from the repository
        Page<AccountTransactions> transactionsPage = accountTransactionsDao.findByCustomer_CustomerId(customerId, pageable);

        // Map the Page of entities to a Page of DTOs
        //return transactionsPage.map(transaction -> mapper.map(transaction, AccountTransactionsDTO.class));
        return transactionsPage;
    }
}
