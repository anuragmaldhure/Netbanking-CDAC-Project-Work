package com.app.service;

import java.io.File;
import java.io.IOException;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.custom_exceptions.ApiException;
import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.CustomerDao;
import com.app.dao.CustomerDocumentsDao;
import com.app.dto.ApiResponse;
import com.app.entities.CustomerDetails;
import com.app.entities.CustomerDocuments;

@Service("image_folder")
@Transactional
public class ImageHandlingServiceImplFolder implements ImageHandlingService {
    @Autowired
    private CustomerDao customerDao;
    
    @Autowired
    CustomerDocumentsDao customerDocumentsDao;

    @Value("${folder.location}")
    private String folderLocation;

    @PostConstruct
    public void init() {
        System.out.println("in init " + folderLocation);
        File folder = new File(folderLocation);
        if (folder.exists()) {
            System.out.println("folder exists already!");
        } else {
            folder.mkdir();
            System.out.println("created a folder!");
        }
    }

    @Override
    public ApiResponse uploadCustomerPhoto(Long customerId, MultipartFile image) throws IOException {
        CustomerDetails customer = customerDao.findById(customerId)
                .orElseThrow(() -> new ResourceNotFoundException("Invalid customer ID"));

        String path = folderLocation.concat(image.getOriginalFilename());
        System.out.println(path);
        FileUtils.writeByteArrayToFile(new File(path), image.getBytes());

        // Retrieve the customer from the database using the customer ID if any document is present
    	CustomerDocuments documentDetails = customerDocumentsDao.findByCustomerId(customerId);
	    
	    // Check if documentDetails is not null before mapping
	    if (documentDetails != null) {
	    	// Set the image data to the Documents entity
	    	documentDetails.setCustomerPhotoImagePath(path);
	    	// Save the updated entity
	    	customerDocumentsDao.save(documentDetails);  
	    	return new ApiResponse("Customer Photo path uploaded successfully for customer ID: " + customerId);
	    } else {
	    	
	    	CustomerDocuments newEntryCustomerDocuments = new CustomerDocuments();
	    	newEntryCustomerDocuments.setCustomerPhotoImagePath(path);
	    	newEntryCustomerDocuments.setCustomerDetails(customer);
	    	customerDocumentsDao.save(newEntryCustomerDocuments);
	    	return new ApiResponse("Customer Photo path uploaded successfully for customer ID: " + customerId);
	    	
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
    		String path = documentDetails.getCustomerPhotoImagePath();
            if (path != null) {
                return FileUtils.readFileToByteArray(new File(path));
            } else {
                throw new ApiException("Customer photo not yet assigned for customer ID " + customerId);
            }
    	}
    	else {
    		//else throw exception
    		throw new ResourceNotFoundException("Invalid customer ID");
    	}
    }

    
    @Override
    public ApiResponse uploadCustomerPAN(Long customerId, MultipartFile image) throws IOException {        
        CustomerDetails customer = customerDao.findById(customerId)
                .orElseThrow(() -> new ResourceNotFoundException("Invalid customer ID"));

        String path = folderLocation.concat(image.getOriginalFilename());
        System.out.println(path);
        FileUtils.writeByteArrayToFile(new File(path), image.getBytes());

        // Retrieve the customer from the database using the customer ID if any document is present
    	CustomerDocuments documentDetails = customerDocumentsDao.findByCustomerId(customerId);
	    
	    // Check if documentDetails is not null before mapping
	    if (documentDetails != null) {
	    	// Set the image data to the Documents entity
	    	documentDetails.setPanCardPhotoImagePath(path);;
	    	// Save the updated entity
	    	customerDocumentsDao.save(documentDetails);  
	    	return new ApiResponse("PAN card uploaded successfully for customer ID " + customerId);
	    } else {
	    	
	    	CustomerDocuments newEntryCustomerDocuments = new CustomerDocuments();
	    	newEntryCustomerDocuments.setPanCardPhotoImagePath(path);
	    	newEntryCustomerDocuments.setCustomerDetails(customer);
	    	customerDocumentsDao.save(newEntryCustomerDocuments);
	    	return new ApiResponse("PAN card uploaded successfully for customer ID " + customerId);
	    	
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
    		String path = documentDetails.getPanCardPhotoImagePath();
            if (path != null) {
                return FileUtils.readFileToByteArray(new File(path));
            } else {
                throw new ApiException("PAN card not yet assigned for customer ID  " + customerId);
            }
    	}
    	else {
    		//else throw exception
    		throw new ResourceNotFoundException("Invalid customer ID");
    	}
    }
    
    @Override
    public ApiResponse uploadCustomerAadhar(Long customerId, MultipartFile image) throws IOException {
        CustomerDetails customer = customerDao.findById(customerId)
                .orElseThrow(() -> new ResourceNotFoundException("Invalid customer ID"));

        String path = folderLocation.concat(image.getOriginalFilename());
        System.out.println(path);
        FileUtils.writeByteArrayToFile(new File(path), image.getBytes());

        // Retrieve the customer from the database using the customer ID if any document is present
    	CustomerDocuments documentDetails = customerDocumentsDao.findByCustomerId(customerId);
	    
	    // Check if documentDetails is not null before mapping
	    if (documentDetails != null) {
	    	// Set the image data to the Documents entity
	    	documentDetails.setAadharCardPhotoImagePath(path);
	    	// Save the updated entity
	    	customerDocumentsDao.save(documentDetails);  
	    	return new ApiResponse("Aadhar card uploaded successfully for customer ID : " + customerId);
	    } else {
	    	
	    	CustomerDocuments newEntryCustomerDocuments = new CustomerDocuments();
	    	newEntryCustomerDocuments.setAadharCardPhotoImagePath(path);
	    	newEntryCustomerDocuments.setCustomerDetails(customer);
	    	customerDocumentsDao.save(newEntryCustomerDocuments);
	    	return new ApiResponse("Aadhar card uploaded successfully for customer ID : " + customerId);
	    	
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
    		String path = documentDetails.getAadharCardPhotoImagePath();
            if (path != null) {
                return FileUtils.readFileToByteArray(new File(path));
            } else {
                throw new ApiException("Aadhar card not yet assigned for customer ID  " + customerId);
            }
    	}
    	else {
    		//else throw exception
    		throw new ResourceNotFoundException("Invalid customer ID");
    	}
    } 
}
