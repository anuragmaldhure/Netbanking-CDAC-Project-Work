package com.app.service;

import java.util.Optional;

import com.app.dto.customer.CustomerDocumentsDTO;
import com.app.dto.customer.CustomerPhotoDTO;

public interface CustomerDocumentsService {

	Optional<CustomerDocumentsDTO> getDocumentsAadhaarAndPan(Long customerId);

	Optional<CustomerPhotoDTO> getCustomerPhoto(Long customerId);
}
