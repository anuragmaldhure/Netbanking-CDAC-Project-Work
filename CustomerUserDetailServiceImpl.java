package com.app.service;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entities.UserEntity;


import com.app.repository.UserRepository;

import lombok.ToString;

@Service // or @Component also works!
@Transactional

public class CustomerUserDetailServiceImpl implements UserDetailsService {
	@Autowired
	private UserRepository userDao;


	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		System.out.println("in load by user nm " + userName);
//		 invoke dao's method to load user details from db by username(ie. actaully an
//		 email)
		UserEntity user = userDao.
				findByUsername(userName).orElseThrow(() -> new UsernameNotFoundException("Invalid Username "));
		System.out.println("lifted user dtls from db "+user);
		return new CustomUserDetails(user);
	}

}