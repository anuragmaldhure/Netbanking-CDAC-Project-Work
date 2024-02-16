package com.app.service;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;
import javax.validation.constraints.Null;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CustomerDao;
import com.app.entities.CustomerDetails;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService{
	@Autowired
	private CustomerDao customerDao;
	
	
	@Override
	public Optional<CustomerDetails> getCustomerDetailsByCustomerId(Long customerId) {
		return Optional.ofNullable(customerDao.findByCustomerId(customerId)
				.orElseThrow(() -> new RuntimeException("Customer not found")));
	}

	@Override
    public void changePassword(Long customerId, String currentPassword, String newPassword) {
        CustomerDetails customer = customerDao.findById(customerId)
                .orElseThrow(() -> new EntityNotFoundException("Customer not found with ID: " + customerId));

        // Perform any necessary validations or checks before updating the password
        // Check if the old password matches the user's current password
        if (!customer.getPassword().equals(currentPassword)) {
            throw new RuntimeException("Your current password does not match!");
        }

        // Update the password
        customer.setPassword(newPassword);

        // Save the updated customer
        customerDao.save(customer);
    }


	@Override
	public void changeKYCstatusReject(Long customerId) {
		CustomerDetails customer = customerDao.findById(customerId)
                .orElseThrow(() -> new EntityNotFoundException("Customer not found with ID: " + customerId));
		
//		System.out.println("*1**");
	
        if (customer.getKycStatus()== null || customer.getKycStatus()== true) {
//    		System.out.println("2***");
            // Update the kyc status
            customer.setKycStatus(false);
//    		System.out.println("3***");

            // Save the updated customer
            customerDao.save(customer);	       
        }
    	//Check if already rejected
        else if(customer.getKycStatus()==false) {
        	 throw new RuntimeException("KYC is already rejected! Please ask customer to reapply for KYC verification!");
        }	
	}


	@Override
	public void changeKYCstatusApproved(Long customerId) {
		CustomerDetails customer = customerDao.findById(customerId)
                .orElseThrow(() -> new EntityNotFoundException("Customer not found with ID: " + customerId));
		
		if(customer.getKycStatus()== null || customer.getKycStatus()== false) {
	        // Update the kyc status
	        customer.setKycStatus(true);

	        // Save the updated customer
	        customerDao.save(customer);	
		}
		//Check if already approved
		else if (customer.getKycStatus()==true) {
            throw new RuntimeException("KYC is already approved! Cannot process your request");
        }
	}

	@Override
	public CustomerDetails registerNewCustomer(CustomerDetails customer) {
		return customerDao.save(customer);
	}
}
