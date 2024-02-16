package com.aarna.dao;



import com.aarna.entity.CustomerDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CustomerDao extends JpaRepository<CustomerDetails, Long> {

    // Custom query to search for customers by keyword in various fields
    @Query("SELECT c FROM CustomerDetails c WHERE " +
            "LOWER(c.username) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
            "LOWER(c.accountHolderFirstName) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
            "LOWER(c.accountHolderLastName) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
            "LOWER(c.emailId) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<CustomerDetails> searchCustomers(@Param("keyword") String keyword);

    // Method to get customer details by ID
    CustomerDetails getCustomerById(Long customerId);
}
