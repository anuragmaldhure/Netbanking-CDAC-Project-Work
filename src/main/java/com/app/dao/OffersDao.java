package com.app.dao;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entities.Offers;

public interface OffersDao extends JpaRepository<Offers, Long>{
	
	@Query(value = "select * from offers where offer_minimum_balance <= ?1", nativeQuery = true)
	List<Offers> getAllEligibleAndAvailableOffers(BigDecimal balance);
}
