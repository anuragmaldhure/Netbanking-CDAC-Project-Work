package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CustomerDao;
import com.app.dao.EmployeeDao;
import com.app.dao.ManagerDao;
import com.app.entities.BankEmployeeDetails;
import com.app.entities.CustomUserDetails;
import com.app.entities.CustomerDetails;
import com.app.entities.ManagerDetails;

@Service
@Transactional
public class CustomUserDetailsService implements UserDetailsService {
	
    @Autowired
    private CustomerDao customerDao;
    
    @Autowired
    private EmployeeDao employeeDao;
    
    @Autowired
    private ManagerDao managerDao;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    	// Search for the user in CustomerDao, EmployeeDao, and ManagerDao based on username
        CustomerDetails customer = customerDao.findByUsername(username);
        if (customer != null) {
            System.out.println("In CustomerUserDetailsService -> set as customer by loadUserByUsername");
            return new CustomUserDetails(customer);
        }
                   
        BankEmployeeDetails employee = employeeDao.findByUsername(username);
        if (employee != null) {
            System.out.println("In CustomerUserDetailsService -> set as employee by loadUserByUsername");
            return new CustomUserDetails(employee);
        }
        
        ManagerDetails manager = managerDao.findByUsername(username);
        if (manager != null) {
            System.out.println("In CustomerUserDetailsService -> set as manager by loadUserByUsername");
            return new CustomUserDetails(manager);
        }
        
        throw new UsernameNotFoundException("User with username " + username + " not found");
    }
}