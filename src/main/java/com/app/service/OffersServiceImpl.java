package com.app.service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.CustomerDao;
import com.app.dao.CustomerSavingsAccountServiceDao;
import com.app.dao.OffersDao;
import com.app.entities.CustomerDetails;
import com.app.entities.Offers;

@Service
@Transactional
public class OffersServiceImpl implements OffersService {
	@Autowired
	private OffersDao offersDao;
	
	@Autowired
	private CustomerSavingsAccountServiceDao customerSavingsAccountServiceDao;

	@Override
	public List<Offers> getAllOffersAvailableForMe(Long customerId) {
		
		//Optional<CustomerDetails> customer = customerDao.findByCustomerId(customerId);
		
		BigDecimal accountBalance =  customerSavingsAccountServiceDao.getCustomerAccountBalance(customerId);
		
		return offersDao.getAllEligibleAndAvailableOffers(accountBalance);
	}
}
