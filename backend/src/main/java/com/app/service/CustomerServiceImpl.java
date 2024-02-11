package com.app.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CustomerDao;
import com.app.entities.CustomerDetails;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService{
	@Autowired
	CustomerDao customerDao;

	@Override
	public Optional<CustomerDetails> getCustomerDetailsByCustomerId(Long accountNumber) {
		return customerDao.findByCustomerId(accountNumber);
	}

}
