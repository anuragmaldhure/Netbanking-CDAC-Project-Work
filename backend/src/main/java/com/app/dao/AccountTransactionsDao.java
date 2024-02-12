package com.app.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.AccountTransactions;

public interface AccountTransactionsDao extends JpaRepository<AccountTransactions, Long>{
	
	@Query(value = "SELECT * FROM account_transactions WHERE Customer_ID IN (SELECT Customer_ID FROM Customer_Details WHERE Customer_ID = ?1)", nativeQuery = true)
    List<AccountTransactions> findAllTransactionsWithCustomerIdInCustomerDetails(Long customerId);
	
	Page<AccountTransactions> findByCustomer_CustomerId(Long customerId, Pageable pageable);

}
