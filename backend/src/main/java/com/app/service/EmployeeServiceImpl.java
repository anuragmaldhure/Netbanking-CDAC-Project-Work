//package com.app.service;
//
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import com.app.dao.EmployeeDao;
//import com.app.entities.BankEmployeeDetails;
//
//@Service
//@Transactional
//public class EmployeeServiceImpl implements EmployeeService{
//	@Autowired
//	private EmployeeDao empDao;
//	
//	@Override
//	public Optional<BankEmployeeDetails> getEmpDetails(Long empId) {
//		return empDao.findByEmployeeId(empId);
//	}
//	
//	@Override
//	public BankEmployeeDetails addEmpDetails(BankEmployeeDetails empDetails) {
//		return empDao.save(empDetails);
//	}
//
//	@Override
//	public String deleteEmp(Long empId) {
//		if(empDao.existsById(empId))
//		{
//			empDao.deleteById(empId);
//			return "deleted emp details...";
//		}
//		return "deletion of emp details failed !!!!!";
//	}
//	
////	@Override
////    public String deleteEmployeeById(Long empID) {
////        // Check if the employee exists
////        if (empDao.existsByEmployeeId(empID)) {
////            // If the employee exists, delete them
////        	empDao.deleteByEmployeeId(empID);
////        	return "Successfully deleted employee";
////        } else {
////            // If the employee does not exist, you might want to throw an exception or handle the situation accordingly
////            throw new EntityNotFoundException("Employee with ID " + empID + " not found");
////        }
////    }
//}
