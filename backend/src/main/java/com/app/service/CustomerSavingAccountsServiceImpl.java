package com.app.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CustomerSavingsAccountDao;
import com.app.entities.CustomerSavingAccounts;

@Service
@Transactional
public class CustomerSavingAccountsServiceImpl implements CustomerSavingsAccountService{

    private final CustomerSavingsAccountDao customerSavingsAccountDao;

    //Another startegy of autowired @Autowired
    
    public CustomerSavingAccountsServiceImpl(CustomerSavingsAccountDao customerSavingsAccountDao) {
        this.customerSavingsAccountDao = customerSavingsAccountDao;
    }

	@Override
	public Object[] getAccountBalanceAndAccountNumberByCustomerId(Long customerId) {
		 // Call the repository method to fetch the account details by customer id
        Double balance = customerSavingsAccountDao.getCustomerAccountBalance(customerId);
        String accountNumber = customerSavingsAccountDao.getCustomerAccountNumber(customerId);
        if (accountNumber != null) {
            // Return the balance from the fetched account details
            return new Object[] {balance, accountNumber};
        } else {
            // Handle the case where the account is not found
            throw new RuntimeException("Account not found with customer id: " + customerId);
        }
	}
	
}
