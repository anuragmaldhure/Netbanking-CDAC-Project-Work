package com.app.service;

import java.util.Optional;

import com.app.dto.customer.CustomerAddressDTO;

public interface CustomerAddressService {

	Optional<CustomerAddressDTO> getAddressDetails(Long customerId);

	void putCustomerAddress(Long customerId, CustomerAddressDTO addressDTO);

}
