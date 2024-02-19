package com.app.service;
import java.io.IOException;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.CustomerDao;
import com.app.dao.CustomerDocumentsDao;
import com.app.dto.ApiResponse;
import com.app.entities.CustomerDetails;
import com.app.entities.CustomerDocuments;

@Service("image_db")
@Transactional
public class ImageHandlingServiceImplDB implements ImageHandlingService {
    @Autowired
    private CustomerDao customerDao;
    
    @Autowired
    private CustomerDocumentsDao customerDocumentsDao;

    @Override
    public ApiResponse uploadCustomerPhoto(Long customerId, MultipartFile image) throws IOException {        
        //check for valid customer
    	CustomerDetails customer = customerDao.findById(customerId)
                .orElseThrow(() -> new EntityNotFoundException("Customer not found with ID: " + customerId));
    	
    	// Retrieve the customer from the database using the customer ID if any document is present
    	CustomerDocuments documentDetails = customerDocumentsDao.findByCustomerId(customerId);
	    
	    // Check if documentDetails is not null before mapping
	    if (documentDetails != null) {
	    	// Set the image data to the Documents entity
	    	documentDetails.setCustomerPhoto(image.getBytes());
	    	// Save the updated entity
	    	customerDocumentsDao.save(documentDetails);  
	    	return new ApiResponse("Customer Photo uploaded successfully for customer ID: " + customerId);
	    } else {
	    	
	    	CustomerDocuments newEntryCustomerDocuments = new CustomerDocuments();
	    	newEntryCustomerDocuments.setCustomerPhoto(image.getBytes());
	    	newEntryCustomerDocuments.setCustomerDetails(customer);
	    	customerDocumentsDao.save(newEntryCustomerDocuments);
	    	return new ApiResponse("Customer Photo uploaded successfully for customer ID: " + customerId);
	    }	    
    }
    

    @Override
    public byte[] downloadCustomerPhoto(Long customerId) throws IOException {
        // Retrieve the customer from the database using the customer ID
    	customerDao.findByCustomerId(customerId)
                .orElseThrow(() -> new ResourceNotFoundException("Invalid customer ID"));
    	
        // Retrieve the entity from the database using the customer ID
    	CustomerDocuments documentDetails = customerDocumentsDao.findByCustomerId(customerId);
                
    	if(documentDetails!=null) {
	        // Return the image data from the entity
	        return documentDetails.getCustomerPhoto();
    	}
    	else {
    		//else throw exception
    		throw new ResourceNotFoundException("Invalid customer ID");
    	}
    }
 
    @Override
    public ApiResponse uploadCustomerPAN(Long customerId, MultipartFile image) throws IOException {
        //check for valid customer
    	CustomerDetails customer = customerDao.findById(customerId)
                .orElseThrow(() -> new EntityNotFoundException("Customer not found with ID: " + customerId));
    	
    	// Retrieve the customer from the database using the customer ID if any document is present
    	CustomerDocuments documentDetails = customerDocumentsDao.findByCustomerId(customerId);
	    
	    // Check if documentDetails is not null before mapping
	    if (documentDetails != null) {
	    	// Set the image data to the Documents entity
	    	documentDetails.setPanCardPhoto(image.getBytes());
	    	// Save the updated entity
	    	customerDocumentsDao.save(documentDetails);  
	    	return new ApiResponse("Pan card uploaded successfully for customer ID: " + customerId);
	    } else {
	    	
	    	CustomerDocuments newEntryCustomerDocuments = new CustomerDocuments();
	    	newEntryCustomerDocuments.setPanCardPhoto(image.getBytes());
	    	newEntryCustomerDocuments.setCustomerDetails(customer);
	    	customerDocumentsDao.save(newEntryCustomerDocuments);
	    	return new ApiResponse("Pan card uploaded successfully for customer ID: " + customerId);
	    }
    }

    @Override
    public byte[] downloadCustomerPAN(Long customerId) throws IOException {
        // Retrieve the customer from the database using the customer ID
    	customerDao.findByCustomerId(customerId)
                .orElseThrow(() -> new ResourceNotFoundException("Invalid customer ID"));
    	
        // Retrieve the entity from the database using the customer ID
    	CustomerDocuments documentDetails = customerDocumentsDao.findByCustomerId(customerId);
                
    	if(documentDetails!=null) {
	        // Return the image data from the entity
	        return documentDetails.getPanCardPhoto();
    	}
    	else {
    		//else throw exception
    		throw new ResourceNotFoundException("Invalid customer ID");
    	}
    }
    
    
    @Override
    public ApiResponse uploadCustomerAadhar(Long customerId, MultipartFile image) throws IOException {
        //check for valid customer
    	CustomerDetails customer = customerDao.findById(customerId)
                .orElseThrow(() -> new EntityNotFoundException("Customer not found with ID: " + customerId));
    	
    	// Retrieve the customer from the database using the customer ID if any document is present
    	CustomerDocuments documentDetails = customerDocumentsDao.findByCustomerId(customerId);
	    
	    // Check if documentDetails is not null before mapping
	    if (documentDetails != null) {
	    	// Set the image data to the Documents entity
	    	documentDetails.setAadharCardPhoto(image.getBytes());
	    	// Save the updated entity
	    	customerDocumentsDao.save(documentDetails);  
	    	return new ApiResponse("Aadhar card uploaded successfully for customer ID: " + customerId);
	    } else {
	    	
	    	CustomerDocuments newEntryCustomerDocuments = new CustomerDocuments();
	    	newEntryCustomerDocuments.setAadharCardPhoto(image.getBytes());
	    	newEntryCustomerDocuments.setCustomerDetails(customer);
	    	customerDocumentsDao.save(newEntryCustomerDocuments);
	    	return new ApiResponse("Aadhar card uploaded successfully for customer ID: " + customerId);
	    }
    }

    @Override
    public byte[] downloadCustomerAadhar(Long customerId) throws IOException {
        // Retrieve the customer from the database using the customer ID
    	customerDao.findByCustomerId(customerId)
                .orElseThrow(() -> new ResourceNotFoundException("Invalid customer ID"));
        
        // Retrieve the entity from the database using the customer ID
    	CustomerDocuments documentDetails = customerDocumentsDao.findByCustomerId(customerId);
                
    	if(documentDetails!=null) {
	        // Return the image data from the entity
	        return documentDetails.getAadharCardPhoto();
    	}
    	else {
    		//else throw exception
    		throw new ResourceNotFoundException("Invalid customer ID");
    	}
    }
}

