package com.app.controller;

import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.BankEmployeeDetails;
import com.app.entities.CustomerDetails;
import com.app.service.CustomerService;
import com.app.service.EmployeeService;

@RestController
@RequestMapping("/Manager")
public class ManagerController {
	@Autowired
	private CustomerService customerService;
	
	@Autowired
	private EmployeeService employeeService;
	
	
	@GetMapping("/SearchEmployee67/{empId}")
	public Optional<BankEmployeeDetails> getEmployeeDetails(@PathVariable Long empId) {
		System.out.println("in get Employee Details by Manager");
		return employeeService.getEmpDetails(empId);
	}
	
	@GetMapping("/Customers/ViewCustomerDetails65/{customerId}")
	public Optional<CustomerDetails> getCustomerDetailsByAccountNumber(@PathVariable Long customerId) {
		System.out.println("in get Customer Details by Manager");
		return customerService.getCustomerDetailsByCustomerId(customerId);
	}
	
	// URL : http://localhost:8080/Manager/Employees/AddNewEmployee68
	// Method : POST
	// Payload : emp details
	@PostMapping("/Employees/AddNewEmployee68")
	public BankEmployeeDetails addEmpDetails(@RequestBody BankEmployeeDetails emp) {
		System.out.println("in add emp " + emp);
		return employeeService.addEmpDetails(emp);
	}
//	public ResponseEntity<?> addEmpDetails(@RequestBody BankEmployeeDetails empDetails) {
//	    try {
//	        System.out.println("Adding new employee: " + empDetails);
//	        // Call service method to add employee
//	        BankEmployeeDetails savedEmployee = employeeService.addEmpDetails(empDetails);
//	        return ResponseEntity.status(HttpStatus.CREATED).body(savedEmployee);
//	    } catch (Exception e) {
//	        // Log the error
//	        System.out.println("Error adding new employee: " + e.getMessage());
//	        // Return error response
//	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding new employee: " + e.getMessage());
//	    }
//	}

	// URL : http://host:port/employees/{empId}, method : DELETE
	// delete emp details by id
	@DeleteMapping("/Employees/RemoveEmployee69/{empId}")
	public String deleteEmpDetails(@PathVariable Long empId)
	{
		System.out.println("in del emp "+empId);
		return employeeService.deleteEmp(empId);
	}

//	@DeleteMapping("/Employees/RemoveEmployee69/{empID}")
//	public ResponseEntity<?> deleteEmp(
//	        @PathVariable Long empID) {
//	    System.out.println("in delete emp " + empID + " by manager");
//	    // Call the delete method from employeeService and get the header value
//	    String headerValue = employeeService.deleteEmployeeById(empID);
//	    //Sending complete response packet containing response status code and body
//	    return ResponseEntity.status(HttpStatus.OK)
////	            .header("Custom-Header", headerValue)
//	            .body("Employee deleted successfully");
//	}

}
