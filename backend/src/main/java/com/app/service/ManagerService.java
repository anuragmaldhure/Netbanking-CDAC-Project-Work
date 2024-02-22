package com.app.service;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;

import com.app.dao.ManagerDao;
import com.app.entities.ManagerDetails;

public class ManagerService {
	
	@Autowired
	private ManagerDao managerDao;

	public Optional<ManagerDetails> getManagerByUsername(String username) {
		ManagerDetails manager = managerDao.findByUsername(username);
		if (manager != null) {
	        return Optional.of(manager);
	    } else {
	        throw new EntityNotFoundException("Manager not found with username: " + username);
	    }
	}
}
