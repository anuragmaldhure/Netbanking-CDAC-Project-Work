package com.app.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ApiResponse;

public interface ImageHandlingService {
    ApiResponse uploadImage(Long customerId, MultipartFile image) throws IOException;
    byte[] downloadImage(Long customerId) throws IOException;
}
