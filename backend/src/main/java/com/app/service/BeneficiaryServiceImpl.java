package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.BeneficiaryDao;
import com.app.dao.CustomerDao;
import com.app.entities.Beneficiary;
import com.app.entities.CustomerDetails;

@Service
@Transactional
public class BeneficiaryServiceImpl implements BeneficiaryService {
	
	@Autowired
	BeneficiaryDao beneficiaryDao;
	
	@Autowired
	CustomerDao customerDao;

	@Override
	public Beneficiary addBenDetails(Beneficiary beneficiary) {
		return beneficiaryDao.save(beneficiary);
	}

	@Override
	public List<Beneficiary> getAllBenificiariesDetails(Long customerId) {
		Optional<CustomerDetails> customer = customerDao.findByCustomerId(customerId);
		return beneficiaryDao.findByCustomer(customer);
	}

	@Override
	public String deleteBenificiary(Long benId) {
		if(beneficiaryDao.existsById(benId))
		{
			beneficiaryDao.deleteById(benId);
			return "deleted beneficiary details...";
		}
		return "deletion of beneficiary details failed !!!!!";
	}
	
}
