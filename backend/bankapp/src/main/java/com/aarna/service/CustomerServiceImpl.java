package com.aarna.service;

import com.aarna.dao.CustomerDao;
import com.aarna.entity.CustomerDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerDao customerDao;

    @Override
    public List<CustomerDetails> searchCustomers(String keyword) {
        return customerDao.searchCustomers(keyword);
    }

    @Override
    public CustomerDetails getCustomerById(Long customerId) {
        return customerDao.getCustomerById(customerId);
    }

    // Implement other service methods as needed
}
