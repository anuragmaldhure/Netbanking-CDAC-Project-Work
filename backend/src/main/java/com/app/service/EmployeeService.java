package com.app.service;

import java.util.Optional;

import com.app.entities.BankEmployeeDetails;

public interface EmployeeService {
	Optional<BankEmployeeDetails> getEmpDetails(Long empId);
	
	void addEmpDetails(BankEmployeeDetails empDetails);

	void delete(Long empID);
}
