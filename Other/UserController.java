package com.app.controller;
import javax.validation.Valid;
import javax.websocket.server.PathParam;

import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.app.dto.AuthRequest;
import com.app.dto.AuthResp;
import com.app.dto.UserDto;
import com.app.dto.UserResult;
import com.app.entities.UserEntity;
import com.app.jwt_utils.JwtUtils;
import com.app.service.CustomUserDetails;
import com.app.service.CustomerUserDetailServiceImpl;
import com.app.service.UserService;
import com.app.service.UserServiceImpl;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RequestMapping("/users")
public class UserController{
	
	@Autowired
	private UserService userService;
	
	
	
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private CustomerUserDetailServiceImpl customUserDetailsService;
	
	@Autowired
	private JwtUtils utils;

	@PostMapping("/authenticate")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody  AuthRequest request){
		System.out.println("in sign in " + request);

		UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(request.getUsername(),
				request.getPassword());
		
		try {
			// authenticate the credentials
			Authentication authenticatedDetails = authenticationManager.authenticate(authToken);
		//	log.info("auth token again " + authenticatedDetails);
			// => auth succcess
			String jwtToken = utils.generateJwtToken(authenticatedDetails);
			String userName = utils.getUserNameFromJwtToken(jwtToken);
			String UserRoles = utils.getUserRoleFromJwtToken(jwtToken);
			String isLoggedIn = "true";
			
			String id = userService.findUserId(userName);
			
			return ResponseEntity.ok(new AuthResp("Authorization successful!", jwtToken, UserRoles, id, isLoggedIn));
		} catch (BadCredentialsException e) { // lab work : replace this by a method in global exc handler
			// send back err resp code
			System.out.println("err "+e);
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
		}
	}
}
