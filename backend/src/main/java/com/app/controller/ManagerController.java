package com.app.controller;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.BankEmployeeDTO;
import com.app.dto.NewManagerDTO;
import com.app.dto.customer.CustomerDetailsDTO;
import com.app.dto.customer.CustomerSavingAccountsDTO;
import com.app.entities.BankEmployeeDetails;
import com.app.entities.ManagerDetails;
import com.app.service.CustomerSavingsAccountService;
import com.app.service.CustomerService;
import com.app.service.EmployeeService;
import com.app.service.ManagerService;

@RestController
@RequestMapping("/Manager")
public class ManagerController {
	@Autowired
	private CustomerService customerService;
	
	@Autowired
	CustomerSavingsAccountService customerSavingsAccountService;
	
	@Autowired
	private EmployeeService employeeService;
	
	@Autowired
	private ManagerService managerService;
	
	public ManagerController() {
		System.out.println("in ctor of " + getClass());
	}
	
	
//  put last login -> needs to be called from Frontend everytime user logs in
	@PutMapping("/updateLastLogin/{managerId}")
	public  ResponseEntity<String>  updateLastLogin(@PathVariable Long managerId) {
		System.out.println("in put last login of logged in manager "+ managerId);	
		try {
			managerService.updateLastLogin(managerId);		
			return ResponseEntity.ok("Successfully updated last login of manager id: " + managerId );
		} catch (EntityNotFoundException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error in updating last login ...");
		}
	}
	
	//	Get logged in manager's managerId from Spring Security Security Context
	@GetMapping("/User")
	public Long getManagerID(){
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String username = authentication.getName(); // This gets the username
		System.out.println("in get manager details INTERNALLY by username from Security Context, USERNAME ->" + username );
		
		Optional<ManagerDetails> managerDetails = managerService.getManagerByUsername(username);
		System.out.println("in get manager id INTERNALLY by username, CustomerDetailsDTO ->" + managerDetails.get().getManagerId());
		return managerDetails.get().getManagerId();
	}
	
//	Get logged in manager's details from Spring Security Security Context
	@GetMapping("/User/GetMyDetails")
	public ManagerDetails getManagerDetails(){
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		String username = authentication.getName(); // This gets the username
		System.out.println("in get manager details INTERNALLY by username from Security Context, USERNAME ->" + username );
		
		Optional<ManagerDetails> managerDetails = managerService.getManagerByUsername(username);
		System.out.println("in get manager id INTERNALLY by username, CustomerDetailsDTO ->" + managerDetails);
		return managerDetails.get();
	}
	
	@GetMapping("/SearchEmployee/{empId}")
	public Optional<BankEmployeeDetails> getEmployeeDetails(@PathVariable Long empId) {
		System.out.println("in get Employee Details by Manager");
		return employeeService.getEmpDetails(empId);
	}
	
	//get all employee details
	@GetMapping("/Accounts/GetAllEmployeesDetails")
	public List<BankEmployeeDetails> getAllEmployeeDetails() {
		System.out.println("in get all employee details by c id in Manager");
		return employeeService.getAllEmployeeDetails();
	}
	
	//Single Customer Details
	@GetMapping("/ViewCustomerDetails/{customerId}")
	public Optional<CustomerDetailsDTO> getCustomerDetailsByAccountNumber(@PathVariable Long customerId) {
		System.out.println("in get Customer Details by Manager");
		return customerService.getCustomerDetailsByCustomerId(customerId);
	}
		
	//For getting customer details by account number	
	@GetMapping("/Accounts/ViewCustomerDetails/{accountNumber}")	
	public Optional<CustomerDetailsDTO> getCustomerDetailsByAccountNumber(@PathVariable String accountNumber) {	
		System.out.println("in get Customer Details by account number in Employee");
		return customerService.getCustomerDetailsByAccountNumber(accountNumber);
	}
		
	@GetMapping("/Accounts/ViewCustomerAccountDetails/{customerId}")	
	public  Optional<CustomerSavingAccountsDTO> getCustomerAccountDetails(@PathVariable Long customerId) {	
		System.out.println("in get Customer Account Details by account number in Employee");
		return customerSavingsAccountService.getCustomerAccountDetails(customerId);
	}
		
	// URL : http://localhost:8080/Manager/Employees/AddNewEmployee68
	// Method : POST
	// Payload : emp details
	@PostMapping("/Employees/AddNewEmployee")
	public ResponseEntity<?> addEmpDetails(@RequestBody BankEmployeeDTO empDetails) {
	    try {
	        System.out.println("Adding new employee: " + empDetails);
	        // Call service method to add employee
	        BankEmployeeDetails savedEmployee = employeeService.addEmpDetails(empDetails);
	        return ResponseEntity.status(HttpStatus.CREATED).body(savedEmployee);
	    } catch (Exception e) {
	        // Log the error
	        System.out.println("Error adding new employee: " + e.getMessage());
	        // Return error response
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding new employee: " + e.getMessage());
	    }
	}

	// URL : http://host:port/employees/{empId}, method : DELETE
	// delete emp details by id
	@DeleteMapping("/Employees/RemoveEmployee/{empID}")
	public ResponseEntity<?> deleteEmp(@PathVariable Long empID) {
	    System.out.println("in delete emp " + empID + " by manager");
	    // Call the delete method from employeeService and get the header value
	    String headerValue = employeeService.deleteEmp(empID);
	    //Sending complete response packet containing response status code and body
	    return ResponseEntity.status(HttpStatus.OK)
	            .header("Custom-Header", headerValue)
	            .body("Employee deleted successfully");
	}
	
	// URL : http://localhost:8080/AddNewManager
	// Method : POST
	// Payload : manager details
	@PostMapping("/AddNewManager")   															//Excluded from Authentication and Authorization
	public ResponseEntity<?> addManagerDetails(@RequestBody NewManagerDTO managerDetailsDTO) {
	    try {
	        System.out.println("Adding new manager dto: " + managerDetailsDTO);
	        // Call service method to add manaegr
	        ManagerDetails savedManagerDetails = managerService.addManagerDetails(managerDetailsDTO);
	        return ResponseEntity.status(HttpStatus.CREATED).body(savedManagerDetails);
	    } catch (Exception e) {
	        // Log the error
	        System.out.println("Error adding new manager: " + e.getMessage());
	        // Return error response
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding new manager: " + e.getMessage());
	    }
	}

}
