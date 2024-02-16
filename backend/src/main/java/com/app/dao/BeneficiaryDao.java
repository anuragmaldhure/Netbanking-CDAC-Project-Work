package com.app.dao;



import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Beneficiary;
import com.app.entities.CustomerDetails;

public interface BeneficiaryDao extends JpaRepository<Beneficiary, Long>{

	List<Beneficiary> findByCustomer(Optional<CustomerDetails> customer);

	Optional<Beneficiary> findByBeneficiaryAccountNumber(String accountNumber);
	
//	List<Beneficiary> findByCustomerByUsername(CustomerDetails customerByUsername);
}
