package com.app.dao;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.BankEmployeeDetails;

public interface EmployeeDao extends JpaRepository<BankEmployeeDetails, Long>{
	// add a finder : JPQL : select e from Employee e where e.dept.id=:id
	Optional<BankEmployeeDetails> findByEmployeeId(Long empId);
//	

	@Query(value = "SELECT * FROM bank_employee_details", nativeQuery = true)
	List<BankEmployeeDetails> getAllEmployeeDetails();

	BankEmployeeDetails findByUsername(String username);
		
}
