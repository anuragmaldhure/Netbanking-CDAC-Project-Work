package com.app.service;

import java.util.List;

import com.app.entities.Offers;

public interface OffersService {
	List<Offers> getAllOffersAvailableForMe(Long customerId);
}
