package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CustomerSavingsAccountDao;
import com.app.dao.OffersDao;
import com.app.entities.Offers;

@Service
@Transactional
public class OffersServiceImpl implements OffersService {
	@Autowired
	private OffersDao offersDao;
	
	@Autowired
	private CustomerSavingsAccountDao customerSavingsAccountServiceDao;

	@Override
	public List<Offers> getAllOffersAvailableForMe(Long customerId) {
		
		//Optional<CustomerDetails> customer = customerDao.findByCustomerId(customerId);
		
		Double accountBalance =  customerSavingsAccountServiceDao.getCustomerAccountBalance(customerId);
		
		return offersDao.getAllEligibleAndAvailableOffers(accountBalance);
	}
}
