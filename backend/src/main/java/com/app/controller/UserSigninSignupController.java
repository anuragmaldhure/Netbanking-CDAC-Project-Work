package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import com.app.JwtUtils;
import com.app.dto.SigninRequest;
import com.app.dto.SigninResponse;
import com.app.dto.customer.CreateNewCustomerDTO;
import com.app.service.CustomerService;


@RestController
@RequestMapping("/")
@CrossOrigin
public class UserSigninSignupController {
	
    @Autowired
    private CustomerService customerService;
    
    @Autowired
    private JwtUtils utils;

    @Autowired
    private AuthenticationManager mgr;

    // sign up
    @PostMapping("signup")
    public ResponseEntity<?> userSignup(@RequestBody @Valid CreateNewCustomerDTO  customerDTO) {
    	System.out.println("in sign up " + customerDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(customerService.registerNewCustomer(customerDTO));
    }

    /*
     * request payload : Auth req DTO : email n password resp payload : In case of
     * success : Auth Resp DTO : mesg + JWT token + SC 200 IN case of failure : SC
     * 401
     */
    @PostMapping("signin")
    public ResponseEntity<?> signinUser(@RequestBody @Valid SigninRequest reqDTO) {
        System.out.println("in signin " + reqDTO);
        // simply invoke authenticate(...) on AuthMgr
        // i/p : Authentication => un verifed credentials
        // i/f --> Authentication --> imple by UsernamePasswordAuthToken
        // throws exc OR rets : verified credentials (UserDetails i.pl class: custom
        // user details)

        Authentication verifiedAuth = mgr
                .authenticate(new UsernamePasswordAuthenticationToken
                        (reqDTO.getUsername(), reqDTO.getPassword()));
        System.out.println(verifiedAuth.getClass());// Custom user details
        // => auth success
        return ResponseEntity
                .ok(new SigninResponse(utils.generateJwtToken(verifiedAuth), "Successful Authentication!!!"));
    }
}