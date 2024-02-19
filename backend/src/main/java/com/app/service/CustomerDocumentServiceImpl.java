package com.app.service;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CustomerDocumentsDao;
import com.app.dto.customer.CustomerDocumentsDTO;
import com.app.dto.customer.CustomerPhotoDTO;
import com.app.entities.CustomerDocuments;

@Service
@Transactional
public class CustomerDocumentServiceImpl implements CustomerDocumentsService{
	
	@Autowired
    ModelMapper mapper;

	@Autowired
	CustomerDocumentsDao customerDocumentsDao;

	@Override
	public Optional<CustomerDocumentsDTO> getDocumentsAadhaarAndPan(Long customerId) {
	    CustomerDocuments documents = customerDocumentsDao.findByCustomer(customerId);
	    
	    // Check if address is not null before mapping
	    if (documents != null) {
	        // Map CustomerAddress entity to CustomerAddressDTO
	    	CustomerDocumentsDTO documentsDTO = mapper.map(documents, CustomerDocumentsDTO.class);
	        return Optional.of(documentsDTO);
	    } else {
	        throw new EntityNotFoundException("Customer not found with id: " + customerId);
	    }
	}
	

	@Override
	public Optional<CustomerPhotoDTO> getCustomerPhoto(Long customerId) {
	    CustomerDocuments documents = customerDocumentsDao.findByCustomer(customerId);
	    
	    // Check if address is not null before mapping
	    if (documents != null) {
	        // Map CustomerAddress entity to CustomerAddressDTO
	    	CustomerPhotoDTO photoDTO = mapper.map(documents, CustomerPhotoDTO.class);
	        return Optional.of(photoDTO);
	    } else {
	        throw new EntityNotFoundException("Customer not found with id: " + customerId);
	    }
	}
}
