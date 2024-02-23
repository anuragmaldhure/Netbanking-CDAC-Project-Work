//package com.app.dao;
//
//import java.util.List;
//import java.util.Optional;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//
//import com.app.entities.Beneficiary;
//
//public interface BeneficiaryDao extends JpaRepository<Beneficiary, Long>{
//
//	@Query(value = "select * from beneficiary where customer_id = ?1", nativeQuery = true)
//	List<Beneficiary> findByCustomerId(Long customerId);
//
//	Optional<Beneficiary> findByBeneficiaryAccountNumber(String accountNumber);
//	
//}
