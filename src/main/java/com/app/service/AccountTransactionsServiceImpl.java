package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.app.dao.AccountTransactionsDao;
import com.app.dao.CustomerDao;
import com.app.dto.AccountTransactionsDTO;
import com.app.entities.AccountTransactions;

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
}
