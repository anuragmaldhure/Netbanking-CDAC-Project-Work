package com.aarna.controller;

import com.aarna.entity.CustomerDetails;
import com.aarna.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EmployeeController {

    @Autowired
    private CustomerService customerService;

    @GetMapping("/Employee/Accounts/SearchCustomer47")
    public List<CustomerDetails> searchCustomers(@RequestParam("keyword") String keyword) {
        return customerService.searchCustomers(keyword);
    }

    @GetMapping("/Employee/Accounts/ViewCustomerDetails48/{customerId}")
    public CustomerDetails getCustomerDetails(@PathVariable Long customerId) {
        return customerService.getCustomerById(customerId);
    }
}
