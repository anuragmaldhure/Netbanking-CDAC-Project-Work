package com.app.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.CustomerSavingAccounts;



public interface CustomerSavingsAccountDao extends JpaRepository<CustomerSavingAccounts, String> {

	//MYSQL
	
	@Query(value = "SELECT balance FROM saving_account_details sad INNER JOIN customer_details cd ON cd.customer_id = sad.customer_id WHERE cd.customer_id = ?1", nativeQuery = true)
	Double getCustomerAccountBalance(Long customerId);
	
	@Query(value = "SELECT account_number FROM saving_account_details where customer_id = ?1", nativeQuery = true)
	String getCustomerAccountNumber(Long customerId);

	@Query(value = "SELECT * FROM saving_account_details sad INNER JOIN customer_details cd ON cd.customer_id = sad.customer_id WHERE cd.customer_id = ?1", nativeQuery = true)
	CustomerSavingAccounts findByCustomer(Long customerId);

	@Query(value = "SELECT SUM(balance) AS total_balance FROM saving_account_details;\n", nativeQuery = true)
	Double findAllBalances();
}
