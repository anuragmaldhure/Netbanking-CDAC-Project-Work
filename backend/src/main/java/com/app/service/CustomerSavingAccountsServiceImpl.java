//package com.app.service;
//
//
//import java.math.BigDecimal;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import com.app.dao.CustomerSavingsAccountDao;
//import com.app.entities.CustomerSavingAccounts;
//
//@Service
//@Transactional
//public class CustomerSavingAccountsServiceImpl implements CustomerSavingsAccountService{
//
//    private final CustomerSavingsAccountDao customerSavingsAccountDao;
//
//    //Another startegy of autowired @Autowired
//    public CustomerSavingAccountsServiceImpl(CustomerSavingsAccountDao customerSavingsAccountDao) {
//        this.customerSavingsAccountDao = customerSavingsAccountDao;
//    }
//
//	@Override
//	public BigDecimal getAccountBalanceByCustomerId(Long customerId) {
//		 // Call the repository method to fetch the account details by customer id
//        CustomerSavingAccounts account = customerSavingsAccountDao.findByCustomerDetails_CustomerId(customerId);
//        if (account != null) {
//            // Return the balance from the fetched account details
//            return account.getBalance();
//        } else {
//            // Handle the case where the account is not found
//            throw new RuntimeException("Account not found with customer id: " + customerId);
//        }
//	}
//	
//}
