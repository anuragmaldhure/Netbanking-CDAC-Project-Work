package com.app.service;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.BeneficiaryDao;
import com.app.dao.CustomerDao;
import com.app.dto.AddBeneficiaryDTO;
import com.app.entities.Beneficiary;
import com.app.entities.CustomerDetails;

@Service
@Transactional
public class BeneficiaryServiceImpl implements BeneficiaryService {
	
	@Autowired
	private BeneficiaryDao beneficiaryDao;
	
	@Autowired
	private CustomerDao customerDao;


	@Override
	public Beneficiary addBeneficiaryDetails(AddBeneficiaryDTO beneficiaryDTO, Long customerId) {
		Optional<CustomerDetails> beneficiaryAsExistingCustomer =  Optional.ofNullable(customerDao.findByAccountNumber(beneficiaryDTO.getBeneficiaryAccountNumber()))
				.orElseThrow(() -> new RuntimeException("Beneficiary is not an existing customer of the bank"));
		
		Optional<CustomerDetails> customer =  Optional.ofNullable(customerDao.findByCustomerId(customerId))
				.orElseThrow(() -> new RuntimeException("Current logged in customer not found"));
		
		if(beneficiaryAsExistingCustomer.get().getAccountNumber().equals(customer.get().getAccountNumber())) {
			throw new RuntimeException("Cannot add yourself as beneficiary");
		}

		
		Beneficiary beneficiary = new Beneficiary();
		beneficiary.setBeneficiaryNickname(beneficiaryDTO.getBeneficiaryNickname());
		beneficiary.setBeneficiaryFirstName(beneficiaryAsExistingCustomer.get().getAccountHolderFirstName());
		beneficiary.setBeneficiaryLastName(beneficiaryAsExistingCustomer.get().getAccountHolderLastName());
		//referring to self as existing customer
		beneficiary.setBeneficiaryAccountNumber(beneficiaryAsExistingCustomer.get());
		beneficiary.setBeneficiaryEmail(beneficiaryAsExistingCustomer.get().getEmailId());
		beneficiary.setBeneficiaryTimestamp(new Timestamp(0));
		//referring to customer who has added this beneficiary
		beneficiary.setCustomer(customer.get());
		return beneficiaryDao.save(beneficiary);
	}

	@Override
	public List<Beneficiary> getAllBenificiariesDetails(Long customerId) {
//		Optional<CustomerDetails> customer = customerDao.findByCustomerId(customerId).
		return beneficiaryDao.findByCustomerId(customerId);
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
	
	
	//not used
	@Override
	public Optional<Beneficiary> getBeneficiaryDetailsByBeneficiaryId(Long beneficiaryId) {
		return Optional.ofNullable(beneficiaryDao.findById(beneficiaryId)
				.orElseThrow(() -> new RuntimeException("beneficiary not found with id "+beneficiaryId)));
	}
	
	@Override
	public Optional<Beneficiary> getBenificiaryDetailsByAccountNumber(String AccountNumber) {
		return Optional.ofNullable(beneficiaryDao.findByBeneficiaryAccountNumber(AccountNumber)
				.orElseThrow(() -> new RuntimeException("beneficiary not found with account number "+ AccountNumber)));
	}
	
}
