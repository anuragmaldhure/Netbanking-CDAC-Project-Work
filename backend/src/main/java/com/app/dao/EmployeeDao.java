package com.app.dao;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.BankEmployeeDetails;

public interface EmployeeDao extends JpaRepository<BankEmployeeDetails, Long>{
	// add a finder : JPQL : select e from Employee e where e.dept.id=:id
	Optional<BankEmployeeDetails> findByEmployeeId(Long empId);
	
	void deleteById(Long empId);
		
}
