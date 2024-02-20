package com.app.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.BankEmployeeDTO;
import com.app.dto.customer.CustomerDetailsDTO;
import com.app.dto.customer.CustomerSavingAccountsDTO;
import com.app.entities.BankEmployeeDetails;
import com.app.service.CustomerSavingsAccountService;
import com.app.service.CustomerService;
import com.app.service.EmployeeService;

@RestController
@RequestMapping("/Manager")
@CrossOrigin(origins = "http://localhost:3000")
public class ManagerController {
	@Autowired
	private CustomerService customerService;
	
	@Autowired
	CustomerSavingsAccountService customerSavingsAccountService;
	
	@Autowired
	private EmployeeService employeeService;
	
	public ManagerController() {
		System.out.println("in ctor of " + getClass());
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
}
