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
	
	//Ascending
//	@Query(value = "SELECT * FROM account_transactions WHERE Customer_ID IN (SELECT Customer_ID FROM Customer_Details WHERE Customer_ID = ?1)", nativeQuery = true)
//    Page<AccountTransactions> findAllTransactionsWithCustomerIdInCustomerDetailsPagable(Long customerId, Pageable pageable);
	
	//Descending
	@Query(value = "SELECT * FROM account_transactions WHERE Customer_ID IN (SELECT Customer_ID FROM Customer_Details WHERE Customer_ID = ?1) ORDER BY transaction_timestamp DESC", nativeQuery = true)
    Page<AccountTransactions> findAllTransactionsWithCustomerIdInCustomerDetailsPagable(Long customerId, Pageable pageable);
	
}
