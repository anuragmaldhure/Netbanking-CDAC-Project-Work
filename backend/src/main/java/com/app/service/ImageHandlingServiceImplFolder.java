//package com.aap.service;
//import java.io.File;
//import java.io.IOException;
//
//import javax.annotation.PostConstruct;
//import javax.transaction.Transactional;
//
//import org.apache.commons.io.FileUtils;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//
//import com.app.custom_exceptions.ApiException;
//import com.app.custom_exceptions.ResourceNotFoundException;
//import com.app.dao.CustomerDao;
//import com.app.dto.ApiResponse;
//
//@Service("image_folder")
//@Transactional
//public class ImageHandlingServiceImplFolder implements ImageHandlingService {
//    @Autowired
//    private CustomerDao customerDao;
//
//    @Value("${folder.location}")
//    private String folderLocation;
//
//    @PostConstruct
//    public void init() {
//        System.out.println("in init " + folderLocation);
//        File folder = new File(folderLocation);
//        if (folder.exists()) {
//            System.out.println("folder exists already!");
//        } else {
//            folder.mkdir();
//            System.out.println("created a folder!");
//        }
//    }
//
//    @Override
//    public ApiResponse uploadImage(Long customerId, MultipartFile image) throws IOException {
//        Customer customer = customerDao.findById(customerId)
//                .orElseThrow(() -> new ResourceNotFoundException("Invalid customer ID"));
//
//        String path = folderLocation.concat(image.getOriginalFilename());
//        System.out.println(path);
//        FileUtils.writeByteArrayToFile(new File(path), image.getBytes());
//
//        customer.setImagePath(path);
//        customerDao.save(customer);
//
//        return new ApiResponse("Image file uploaded successfully for customer ID " + customerId);
//    }
//
//    @Override
//    public byte[] downloadImage(Long customerId) throws IOException {
//        Customer customer = customerDao.findById(customerId)
//                .orElseThrow(() -> new ResourceNotFoundException("Invalid customer ID"));
//
//        String path = customer.getImagePath();
//        if (path != null) {
//            return FileUtils.readFileToByteArray(new File(path));
//        } else {
//            throw new ApiException("Image not yet assigned for customer ID " + customerId);
//        }
//    }
//}
