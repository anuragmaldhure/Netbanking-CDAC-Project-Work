package com.app.service;
import java.io.IOException;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.CustomerDao;
import com.app.dto.ApiResponse;
import com.app.entities.Customer;

@Service("image_db")
@Transactional
public class ImageHandlingServiceImplDB implements ImageHandlingService {
    @Autowired
    private CustomerDao customerDao;

    @Override
    public ApiResponse uploadImage(Long customerId, MultipartFile image) throws IOException {
        // Retrieve the customer from the database using the customer ID
        Customer customer = customerDao.findById(customerId)
                .orElseThrow(() -> new ResourceNotFoundException("Invalid customer ID"));

        // Set the image data to the customer entity
        customer.setImage(image.getBytes());

        // Save the updated customer entity
        customerDao.save(customer);

        return new ApiResponse("Image file uploaded successfully for customer ID: " + customerId);
    }

    @Override
    public byte[] downloadImage(Long customerId) throws IOException {
        // Retrieve the customer from the database using the customer ID
        Customer customer = customerDao.findById(customerId)
                .orElseThrow(() -> new ResourceNotFoundException("Invalid customer ID"));

        // Return the image data from the customer entity
        return customer.getImage();
    }
}

