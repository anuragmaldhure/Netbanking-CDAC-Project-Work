package com.app.service;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

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
	public Optional<CustomerDetails> getCustomerDetailsByCustomerId(Long customerId) {
		return Optional.ofNullable(customerDao.findByCustomerId(customerId)
				.orElseThrow(() -> new RuntimeException("Customer not found")));
	}

	
	@Override
    public void changePassword(Long customerId, String newPassword) {
        CustomerDetails customer = customerDao.findById(customerId)
                .orElseThrow(() -> new EntityNotFoundException("Customer not found with ID: " + customerId));

        // Perform any necessary validations or checks before updating the password

        // Update the password
        customer.setPassword(newPassword);

        // Save the updated customer
        customerDao.save(customer);
    }
	
}
