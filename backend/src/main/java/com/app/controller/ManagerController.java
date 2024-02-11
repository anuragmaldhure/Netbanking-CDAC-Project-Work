package com.app.controller;

import java.util.Optional;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
	
	@GetMapping("/Customers/ViewCustomerDetails65/{accountNumber}")
	public Optional<CustomerDetails> getCustomerDetailsByAccountNumber(@PathVariable Long accountNumber) {
		System.out.println("in get Customer Details by Manager");
		return customerService.getCustomerDetailsByCustomerId(accountNumber);
	}
	
//	// URL : http://localhost:8080/Manager/Employees/AddNewEmployee68
//	// Method : POST
//	// Payload : deptId + emp details
//	// Resp : Emp resp
//	@PostMapping("/Employees/AddNewEmployee68")
//	public ResponseEntity<?> addEmpDetails(
//			@RequestBody @Valid  BankEmployeeDetails empDetails) {
//		System.out.println("in add emp " + empDetails + "by manager");
//		//Sending complete resp pkt containing : resp sts code n body
//		return ResponseEntity.status(HttpStatus.CREATED)
//				.body(employeeService.addEmpDetails(empDetails));
//	}
//	
////	Manager/Employees/RemoveEmployee69
//	@DeleteMapping("/Employees/RemoveEmployee69/{empID}")
//	public ResponseEntity<?> deleteEmp(
//			@PathVariable Long empID) {
//		System.out.println("in delete emp " + empID + "by manager");
//		//Sending complete resp pkt containing : resp sts code n body
//		return ResponseEntity.status(HttpStatus.OK)
//				.header(employeeService.delete(empID));
//	}
}
