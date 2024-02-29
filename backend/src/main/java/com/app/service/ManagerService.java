package com.app.service;

import java.util.Date;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.dao.ManagerDao;
import com.app.dto.NewManagerDTO;
import com.app.entities.ManagerDetails;
import com.app.entities.Role;

@Service
@Transactional
public class ManagerService {
	
	@Autowired
	private ManagerDao managerDao;
	
    @Autowired
    private BCryptPasswordEncoder encoder;

	public Optional<ManagerDetails> getManagerByUsername(String username) {
		ManagerDetails manager = managerDao.findByUsername(username);
		if (manager != null) {
	        return Optional.of(manager);
	    } else {
	        throw new EntityNotFoundException("Manager not found with username: " + username);
	    }
	}

	public Optional<ManagerDetails> getManagerByUsernameIfPresent(String username) {
		ManagerDetails manager = managerDao.findByUsername(username);
		if (manager != null) {
			return Optional.of(manager);
		} else {
			return Optional.empty(); // Emp not found, return empty Optional
		}
	}


	public ManagerDetails addManagerDetails(NewManagerDTO managerDetailsDTO) {
		ManagerDetails newManager = new ManagerDetails();
		newManager.setManagerFirstName(managerDetailsDTO.getManagerFirstName());
		newManager.setManagerLastName(managerDetailsDTO.getManagerLastName());
		newManager.setUsername(managerDetailsDTO.getUsername());
		newManager.setPassword(encoder.encode(managerDetailsDTO.getPassword()));  //pwd : Encode the raw password. Generally, a good encoding algorithm applies a SHA-1 or greater hash combined with an 8-byte or greater randomly generated salt.
		newManager.setRole(Role.MANAGER);
		newManager.setManagerCreationTimestamp(new Date());
		return managerDao.save(newManager);
	}


	public void updateLastLogin(Long managerId) {
		ManagerDetails manager = managerDao.findById(managerId)
                .orElseThrow(() -> new EntityNotFoundException("Manager not found with ID: " + managerId));
		
		manager.setLastLogin(new Date(System.currentTimeMillis()));
		// Save the updated entity
		managerDao.save(manager);		
	}
}
