package com.app.service;

import java.util.Optional;


import com.app.entities.BankEmployeeDetails;

public interface EmployeeService {
	Optional<BankEmployeeDetails> getEmpDetails(Long empId);
	
	BankEmployeeDetails addEmpDetails(BankEmployeeDetails empDetails);

	// Method to delete an employee by their ID
	String deleteEmp(Long empId);
    
}
