package com.app.dao;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.app.entities.CustomerDetails;

public interface CustomerDao extends JpaRepository<CustomerDetails, Long>{
	// add a finder : JPQL : select e from Employee e where e.dept.id=:id
		Optional<CustomerDetails> findByCustomerId(Long customerId);
		
		Optional<CustomerDetails> findByAccountNumber(String accountNumber);
		
}
