package com.app.dao;

import java.math.BigDecimal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entities.CustomerSavingAccounts;

public interface CustomerSavingsAccountServiceDao extends JpaRepository<CustomerSavingAccounts, Long> {

	//MYSQL
	
	@Query(value = "SELECT balance FROM customer_saving_accounts csa INNER JOIN customer_details cd ON cd.customer_id = csa.customer_id WHERE cd.customer_id = ?1", nativeQuery = true)
	BigDecimal getCustomerAccountBalance(Long customerId);


}
