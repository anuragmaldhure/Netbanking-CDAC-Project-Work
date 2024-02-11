package com.app.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.EmployeeDao;
import com.app.entities.BankEmployeeDetails;

@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService{
	@Autowired
	EmployeeDao empDao;
	
	@Override
	public Optional<BankEmployeeDetails> getEmpDetails(Long empId) {
		return empDao.findByEmployeeId(empId);
	}
	
	@Override
	public void addEmpDetails(BankEmployeeDetails empDetails) {
		empDao.save(empDetails);
	}

	@Override
	public void delete(Long empID) {
		empDao.deleteById(empID);
	}

}
