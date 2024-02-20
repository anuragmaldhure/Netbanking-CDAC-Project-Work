package com.app.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.EmployeeDao;
import com.app.dto.BankEmployeeDTO;
import com.app.dto.customer.CustomerDetailsDTO;
import com.app.entities.BankEmployeeDetails;
import com.app.entities.Role;

@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService{
	@Autowired
	private EmployeeDao empDao;
	
	@Override
	public Optional<BankEmployeeDetails> getEmpDetails(Long empId) {
		return empDao.findByEmployeeId(empId);
	}
	
	@Override
	public BankEmployeeDetails addEmpDetails(BankEmployeeDTO empDetails) {
		BankEmployeeDetails employee = new BankEmployeeDetails();
		employee.setEmployeeFirstName(empDetails.getEmployeeFirstName());
		employee.setEmployeeLastName(empDetails.getEmployeeLastName());
		employee.setRole(Role.EMPLOYEE);
		employee.setMobileNumber(empDetails.getMobileNumber());
		employee.setEmailId(empDetails.getEmailId());
		employee.setUsername(empDetails.getUsername());
		employee.setPassword(empDetails.getPassword());
		employee.setDateOfBirth(empDetails.getDateOfBirth());
		employee.setJoiningTimestamp(new Date());
		return empDao.save(employee);
	}

	@Override
	public String deleteEmp(Long empId) {
		if(empDao.existsById(empId))
		{
			// If the employee exists, delete them
			empDao.deleteById(empId);
			return "Successfully deleted employee...";
		}
		else {
		  // If the employee does not exist, you might want to throw an exception or handle the situation accordingly
          throw new EntityNotFoundException("Employee with ID " + empId + " not found");
		}
	}

	@Override
	public List<BankEmployeeDetails> getAllEmployeeDetails() {
		return empDao.getAllEmployeeDetails();
	}
}
