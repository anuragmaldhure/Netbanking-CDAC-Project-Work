package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.CustomerDocuments;

public interface CustomerDocumentsDao extends JpaRepository<CustomerDocuments, Long>{

	@Query(value = "SELECT * FROM customer_documents cd WHERE cd.customer_id = ?1", nativeQuery = true)
	CustomerDocuments findByCustomerId(Long customerId);
}
