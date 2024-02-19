package com.app.service;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.modelmapper.ModelMapper;

import com.app.dao.CustomerAddressDao;
import com.app.dao.CustomerDao;
import com.app.dao.CustomerSavingsAccountDao;
import com.app.dto.customer.CreateNewCustomerDTO;
import com.app.dto.customer.CustomerDetailsDTO;
import com.app.entities.CustomerDetails;
import com.app.entities.CustomerSavingAccounts;
import com.app.entities.Role;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService{
	
	@Autowired
    ModelMapper mapper;
    
	@Autowired
	private CustomerDao customerDao;
	
	@Autowired
	CustomerSavingsAccountDao customerSavingsAccountDao;
	
	@Autowired
	CustomerAddressDao customerAddressDao;
	
	@Autowired
	EmailService emailService;
	
	@Override
	public CustomerDetails registerNewCustomer(CreateNewCustomerDTO customerDTO) {
		CustomerDetails customer = new CustomerDetails();
		customer.setAccountHolderFirstName(customerDTO.getAccountHolderFirstName());
		customer.setAccountHolderLastName(customerDTO.getAccountHolderLastName());
		customer.setUsername(customerDTO.getUsername());
		customer.setPassword(customerDTO.getPassword());
		customer.setEmailId(customerDTO.getEmailId());
		customer.setMobileNumber(customerDTO.getMobileNumber());
		customer.setRole(Role.CUSTOMER);
		customer.setAccountActiveStatus(true);
		customer.setKycStatus(false);
		System.out.println("created new customer" + customer);
		
		customer = customerDao.save(customer);
		
		CustomerSavingAccounts accountsdetail = new CustomerSavingAccounts(customer.getAccountNumber());
		System.out.println("Empty class created : "+accountsdetail);
		accountsdetail.setSignupTimestamp(new Timestamp(0));
		accountsdetail.setCustomer(customer);
		accountsdetail.setBalance(0.0);
		accountsdetail.setAccountOpeningDate(new Date());
		System.out.println("Added account details" + accountsdetail);
		customerSavingsAccountDao.save(accountsdetail);
		
		emailService.aacountOpenMail(customer.getEmailId() ,customer.getAccountHolderFirstName(), customer.getAccountHolderLastName(),
				customer.getAccountNumber(),accountsdetail.getBalance(), accountsdetail.getAccountOpeningDate(), customer.getUsername(),customer.getPassword());
		
		return customer;
	}

	
	@Override
	public Optional<CustomerDetailsDTO> getCustomerDetailsByCustomerId(Long customerId) {
		CustomerDetails customer = customerDao.findById(customerId)
                .orElseThrow(() -> new EntityNotFoundException("Customer not found with ID: " + customerId));

        // Map CustomerDetails entity to CustomerDetailsDTO
        CustomerDetailsDTO customerDTO = mapper.map(customer, CustomerDetailsDTO.class);

        return Optional.ofNullable(customerDTO);
	}
	
	@Override
	public Optional<CustomerDetailsDTO> getCustomerDetailsByAccountNumber(String accountNumber) {
		CustomerDetails customer = customerDao.findByAccountNumber(accountNumber)
                .orElseThrow(() -> new EntityNotFoundException("Customer not found with account number: " + accountNumber));

        // Map CustomerDetails entity to CustomerDetailsDTO
        CustomerDetailsDTO customerDTO = mapper.map(customer, CustomerDetailsDTO.class);

        return Optional.ofNullable(customerDTO);
	}
	
	@Override
	public List<CustomerDetailsDTO> getCustomerDetailsByFirstName(String fname) {
		
	    List<CustomerDetailsDTO> list = customerDao.findByAccountHolderFirstName(fname)
	            .stream()
	            .map(customer -> mapper.map(customer, CustomerDetailsDTO.class))
	            .collect(Collectors.toList());

	    return list;
	}

	@Override
	public List<CustomerDetailsDTO> getCustomerDetailsByLastName(String lname) {
	    List<CustomerDetailsDTO> list = customerDao.findByAccountHolderLastName(lname)
	            .stream()
	            .map(customer -> mapper.map(customer, CustomerDetailsDTO.class))
	            .collect(Collectors.toList());

	    return list;
	}


//	@Override
//    public void changePassword(Long customerId, String currentPassword, String newPassword) {
//        CustomerDetails customer = customerDao.findById(customerId)
//                .orElseThrow(() -> new EntityNotFoundException("Customer not found with ID: " + customerId));
//
//        // Perform any necessary validations or checks before updating the password
//        // Check if the old password matches the user's current password
//        if (!customer.getPassword().equals(currentPassword)) {
//            throw new RuntimeException("Your current password does not match!");
//        }
//
//        // Update the password
//        customer.setPassword(newPassword);
//
//        // Save the updated customer
//        customerDao.save(customer);
//    }
//
//
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
	public List<CustomerDetailsDTO> getAllCustomerDetails() {
		return customerDao.getAllCustomerDetails()
		            .stream()
		            .map(customer -> mapper.map(customer, CustomerDetailsDTO.class))
		            .collect(Collectors.toList());
	}

}
