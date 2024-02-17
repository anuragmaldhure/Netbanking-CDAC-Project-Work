package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.AddBeneficiaryDTO;
import com.app.entities.Beneficiary;

public interface BeneficiaryService {

//	List<Beneficiary> getAllBenificiariesDetails(Long customerId);

	String deleteBenificiary(Long benId);
	
	
	///not used
	public Optional<Beneficiary> getBeneficiaryDetailsByBeneficiaryId(Long beneficiaryId);

	Optional<Beneficiary> getBenificiaryDetailsByAccountNumber(String AccountNumber);

	Beneficiary addBeneficiaryDetails(AddBeneficiaryDTO beneficiaryDTO, Long customerId);
}
