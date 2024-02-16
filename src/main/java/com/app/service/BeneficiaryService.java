package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.entities.Beneficiary;

public interface BeneficiaryService {
	
	Beneficiary addBenDetails(Beneficiary beneficiary);

	List<Beneficiary> getAllBenificiariesDetails(Long customerId);

	String deleteBenificiary(Long benId);
}
