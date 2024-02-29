package com.app.controller;

import javax.persistence.EntityNotFoundException;
import javax.validation.Valid;

import com.app.service.EmployeeService;
import com.app.service.ManagerService;
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
import com.app.entities.CustomUserDetails;
import com.app.service.CustomerService;

import java.util.Optional;


@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000")
public class UserSigninSignupController {
	
    @Autowired
    private CustomerService customerService;

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private ManagerService managerService;
    
    @Autowired
    private JwtUtils utils;


    @Autowired
    private AuthenticationManager mgr;

    // sign up
    @PostMapping("signup")
    public ResponseEntity<?> userSignup(@RequestBody @Valid CreateNewCustomerDTO  customerDTO) {
    	System.out.println("in sign up " + customerDTO);
        //check if username already taken
        if(customerService.getCustomerDetailsByUsernameIfPresent(customerDTO.getUsername()).isPresent()){
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Username already taken! Please try different username");
        }
        else if(employeeService.getEmployeeDetailsByUsernameIfPresent(customerDTO.getUsername()).isPresent()){
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Username already taken! Please try different username");
        }
        else if (managerService.getManagerByUsernameIfPresent(customerDTO.getUsername()).isPresent()){
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Username already taken! Please try different username");
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(customerService.registerNewCustomer(customerDTO));
    }

    /*
     * request payload : Auth req DTO : email n password resp payload : In case of
     * success : Auth Resp DTO : mesg + JWT token + SC 200 IN case of failure : SC
     * 401
     */
    @PostMapping("login")
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
        
        
        CustomUserDetails principal = (CustomUserDetails) verifiedAuth.getPrincipal();
        String role = principal.getAuthorities().stream().findFirst().orElseThrow().getAuthority();

        Long id;
        
        if(role == "CUSTOMER") {
        	id = principal.getCustomerDetails().getCustomerId();
        }
        else if(role == "EMPLOYEE") {
        	id = principal.getBankEmployeeDetails().getEmployeeId();
        }
        else {
        	id = principal.getManagerDetails().getManagerId();
        }
 
        // => auth success
        return ResponseEntity
                .ok(new SigninResponse(utils.generateJwtToken(verifiedAuth), "Successful Authentication!!!", id, role));              
    }
    
	
	@PostMapping("/reset")
	public ResponseEntity<String> resetCustomerPassword(@RequestBody String accountNumber){
		try {
			customerService.doPasswordResetAndSendMailToCustomer(accountNumber);			
			return ResponseEntity.ok("Successfully sent reset password of customer a/c number : " + accountNumber);
		} catch (EntityNotFoundException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error in sending feedback...");
		}
	}
}