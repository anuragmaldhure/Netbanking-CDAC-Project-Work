package com.app.dao;

import java.math.BigDecimal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.CustomerSavingAccounts;
import java.util.List;
import com.app.entities.CustomerDetails;


public interface CustomerSavingsAccountDao extends JpaRepository<CustomerSavingAccounts, String> {

	//MYSQL
	
	@Query(value = "SELECT balance FROM saving_account_details sad INNER JOIN customer_details cd ON cd.customer_id = sad.customer_id WHERE cd.customer_id = ?1", nativeQuery = true)
	Double getCustomerAccountBalance(Long customerId);
	
	@Query(value = "SELECT account_number FROM saving_account_details where customer_id = ?1", nativeQuery = true)
	String getCustomerAccountNumber(Long customerId);
	

}
