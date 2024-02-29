package com.app.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.modelmapper.ModelMapper;

import com.app.dao.CustomerDao;
import com.app.dao.CustomerSavingsAccountDao;
import com.app.dto.customer.CreateNewCustomerDTO;
import com.app.dto.customer.CustomerDetailsDTO;
import com.app.dto.customer.CustomerEssentialDataDTO;
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
	private CustomerSavingsAccountDao customerSavingsAccountDao;
	
	@Autowired
	private EmailService emailService;
	
    @Autowired
    private BCryptPasswordEncoder encoder;
	
//	@Autowired
//	private PasswordEncoder encoder;
	
	@Override
	public CustomerDetails registerNewCustomer(CreateNewCustomerDTO customerDTO) {
		CustomerDetails customer = new CustomerDetails();
		customer.setAccountHolderFirstName(customerDTO.getAccountHolderFirstName());
		customer.setAccountHolderLastName(customerDTO.getAccountHolderLastName());
		customer.setUsername(customerDTO.getUsername());
		customer.setPassword(encoder.encode(customerDTO.getPassword()));  //pwd : Encode the raw password. Generally, a good encoding algorithm applies a SHA-1 or greater hash combined with an 8-byte or greater randomly generated salt.
//		customer.setPassword(customerDTO.getPassword());
//		System.out.println(customer.getPassword());
		customer.setEmailId(customerDTO.getEmailId());
		customer.setMobileNumber(customerDTO.getMobileNumber());
		customer.setRole(Role.CUSTOMER);
		customer.setAccountActiveStatus(true);
		customer.setKycStatus(false);
		System.out.println("created new customer" + customer);
		
		customer = customerDao.save(customer);
		
		CustomerSavingAccounts accountsdetail = new CustomerSavingAccounts(customer.getAccountNumber());
		System.out.println("Empty class created : "+accountsdetail);
		accountsdetail.setSignupTimestamp(new Date(System.currentTimeMillis()));
		accountsdetail.setCustomer(customer);
		accountsdetail.setBalance(0.0);
		accountsdetail.setAccountOpeningDate(new Date());
		System.out.println("Added account details" + accountsdetail);
		customerSavingsAccountDao.save(accountsdetail);
		
		emailService.aacountOpenMail(customer.getEmailId() ,customer.getAccountHolderFirstName(), customer.getAccountHolderLastName(),
				customer.getAccountNumber(),accountsdetail.getBalance(), accountsdetail.getAccountOpeningDate(), customer.getUsername(),customerDTO.getPassword());
		
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


	@Override
    public void changePassword(Long customerId, String currentPassword, String newPassword) {
        CustomerDetails customer = customerDao.findById(customerId)
                .orElseThrow(() -> new EntityNotFoundException("Customer not found with ID: " + customerId));

        // Perform any necessary validations or checks before updating the password
        // Check if the old password matches the user's current password
        
//		  Verify the encoded password obtained from storage matches the submitted raw password after 
//        it too is encoded. Returns true if the passwords match, false if they do not. 
//        The stored password itself is never decoded.

//        if (!customer.getPassword().equals(currentPassword)) {
        
        if(!encoder.matches(currentPassword, customer.getPassword())) {
            throw new RuntimeException("Your current password does not match!");
        }

        // Update the password
        customer.setPassword(encoder.encode(newPassword));

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
	public List<CustomerDetailsDTO> getAllCustomerDetails() {
		return customerDao.getAllCustomerDetails()
		            .stream()
		            .map(customer -> mapper.map(customer, CustomerDetailsDTO.class))
		            .collect(Collectors.toList());
	}


	@Override
	public void deactivateAccountTemporarily(String accountNumber) {
		CustomerDetails customer = customerDao.findByAccountNumber(accountNumber)
                .orElseThrow(() -> new EntityNotFoundException("Customer not found with account number : " + accountNumber));
	
        if (customer.getAccountActiveStatus() == true) {
            customer.setAccountActiveStatus(false);
            System.out.println("Successfully deactivated / freezed  account number : " + accountNumber);
            customerDao.save(customer);	 
            	
    		emailService.accountDeactivationMail(
    				customer.getEmailId(),
    				customer.getAccountHolderFirstName(),
    				customer.getAccountHolderLastName(),
    				customer.getAccountNumber()
    		);
    		
        }
    	//Check if already rejected
        else {
        	 throw new RuntimeException("Account is already deactivated or freezed!");
        }
	}


	@Override
	public void reactivateAccount(String accountNumber) {
		CustomerDetails customer = customerDao.findByAccountNumber(accountNumber)
                .orElseThrow(() -> new EntityNotFoundException("Customer not found with account number : " + accountNumber));
	
        if (customer.getAccountActiveStatus() == false) {
            customer.setAccountActiveStatus(true);
            System.out.println("Successfully re - activated a/c with account number : " + accountNumber);
            customerDao.save(customer);	 
            
            emailService.accountReactivationMail(
            		customer.getEmailId(),
            		customer.getAccountHolderFirstName(),
            		customer.getAccountHolderLastName(),
            		customer.getAccountNumber()
            );
        }
    	//Check if already rejected
        else {
        	 throw new RuntimeException("Account is already activated!");
        }
	}


	@Override
	public void addCustomerEssentialData(Long customerId, CustomerEssentialDataDTO customerEssentialData) {
		CustomerDetails customer = customerDao.findById(customerId)
                .orElseThrow(() -> new EntityNotFoundException("Customer not found with ID: " + customerId));

		 customer.setGender(customerEssentialData.getGender());
		 customer.setDateOfBirth(customerEssentialData.getDateOfBirth());
		 customer.setPanNumber(customerEssentialData.getPanNumber());
		 customer.setAdhaarNumber(customerEssentialData.getAdhaarNumber());
		 customer.setOccupation(customerEssentialData.getOccupation());
		 customer.setAnnualIncome(customerEssentialData.getAnnualIncome());
	     
		 // Save the updated address
	     customerDao.save(customer);
	}


	@Override
	public Optional<CustomerDetailsDTO> getCustomerDetailsByUsername(String username) {
		CustomerDetails customer = customerDao.findByUsername(username);
		if (customer != null) {
	        // Map CustomerDetails entity to CustomerDetailsDTO
	        CustomerDetailsDTO customerDetailsDTO = mapper.map(customer, CustomerDetailsDTO.class);
	        return Optional.of(customerDetailsDTO);
	    } else {
	        throw new EntityNotFoundException("Customer not found with username: " + username);
	    }
	}

	@Override
	public Optional<CustomerDetailsDTO> getCustomerDetailsByUsernameIfPresent(String username) {
		CustomerDetails customer = customerDao.findByUsername(username);
		if (customer != null) {
			// Map CustomerDetails entity to CustomerDetailsDTO
			CustomerDetailsDTO customerDetailsDTO = mapper.map(customer, CustomerDetailsDTO.class);
			return Optional.of(customerDetailsDTO);
		} else {
			return Optional.empty(); // Customer not found, return empty Optional
		}
	}



	@Override
	public void updateLastLogin(Long customerId) {
		CustomerDetails customer = customerDao.findById(customerId)
                .orElseThrow(() -> new EntityNotFoundException("Customer not found with ID: " + customerId));
		
		customer.setLastLoginTimestamp(new Date(System.currentTimeMillis()));
		 // Save the updated entity
	     customerDao.save(customer);	
	}


	@Override
	public void doPasswordResetAndSendMailToCustomer(String accountNumber) {
		
		CustomerDetails customer = customerDao.findByAccountNumber(accountNumber)
                .orElseThrow(() -> new EntityNotFoundException("Customer not found with account number : " + accountNumber));
		
		String chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        StringBuilder password = new StringBuilder();

        Random random = new Random();
        for (int i = 0; i < 5; i++) {
            int index = random.nextInt(chars.length());
            password.append(chars.charAt(index));
        }

        String newlyGeneratedPassword = password.toString();
		
        customer.setPassword(encoder.encode(newlyGeneratedPassword));
        
        emailService.sendResetPasswordMail(customer.getEmailId(), customer.getAccountHolderFirstName(), 
        		customer.getAccountHolderLastName(), newlyGeneratedPassword);
	}

	@Override
	public String getTotalNumberOfCustomers() {
		return String.valueOf(customerDao.getAllCustomerDetails()
				.stream()
				.map(customer -> mapper.map(customer, CustomerDetailsDTO.class))
				.collect(Collectors.toList()).size());
	}
}
