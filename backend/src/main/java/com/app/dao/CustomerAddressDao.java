package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.CustomerAddress;

public interface CustomerAddressDao extends JpaRepository<CustomerAddress, Long>{
	
	CustomerAddress findByCustomerId(Long customerId);
	
}
