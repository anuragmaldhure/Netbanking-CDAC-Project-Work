package com.app.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ApiResponse;

public interface ImageHandlingService {
    ApiResponse uploadCustomerPhoto(Long customerId, MultipartFile image) throws IOException;
    byte[] downloadCustomerPhoto(Long customerId) throws IOException;
}
