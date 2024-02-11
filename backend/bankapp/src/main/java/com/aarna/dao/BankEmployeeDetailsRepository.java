package com.aarna.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.aarna.entity.BankEmployeeDetails;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface BankEmployeeDetailsRepository extends JpaRepository<BankEmployeeDetails, Long> {

    // Basic Queries

    Optional<BankEmployeeDetails> findByEmailID(String emailID);

    List<BankEmployeeDetails> findByMobileNo(String mobileNo);

    List<BankEmployeeDetails> findByDepartmentName(String departmentName);

    List<BankEmployeeDetails> findByCity(String city);

    List<BankEmployeeDetails> findByState(String state);

    List<BankEmployeeDetails> findByNationality(String nationality);

    // Updates

    @Modifying
    @Query("UPDATE BankEmployeeDetails e SET e.lastLogin = :lastLogin WHERE e.employeeID = :employeeID")
    int updateLastLogin(Long employeeID, Date lastLogin);

    @Modifying
    @Query("UPDATE BankEmployeeDetails e SET e.password = :newPassword WHERE e.employeeID = :employeeID")
    int updatePassword(Long employeeID, String newPassword);

    // Deletes

    void deleteByEmployeeID(Long employeeID);

    @Modifying
    @Query("DELETE FROM BankEmployeeDetails e WHERE e.emailID = :emailID")
    void deleteByEmailID(String emailID);

    @Modifying
    @Query("DELETE FROM BankEmployeeDetails e WHERE e.mobileNo = :mobileNo")
    void deleteByMobileNo(String mobileNo);

    // Custom Queries

    @Query("SELECT e FROM BankEmployeeDetails e WHERE e.departmentName = :departmentName")
    List<BankEmployeeDetails> findByDepartment(String departmentName);

    @Query("SELECT e FROM BankEmployeeDetails e WHERE e.city = :city AND e.state = :state")
    List<BankEmployeeDetails> findByCityAndState(String city, String state);

    @Query("SELECT e FROM BankEmployeeDetails e WHERE e.lastLogin < :lastLoginThreshold")
    List<BankEmployeeDetails> findInactiveEmployees(Date lastLoginThreshold);
}
