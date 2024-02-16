package com.aarna.service;

import com.aarna.entity.CustomerDetails;

import java.util.List;

public interface CustomerService {
    List<CustomerDetails> searchCustomers(String keyword);
    CustomerDetails getCustomerById(Long customerId);
    // Add other service methods as needed
}
