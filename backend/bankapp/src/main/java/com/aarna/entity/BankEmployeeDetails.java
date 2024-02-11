package com.aarna.entity;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

import java.util.Date;

@Entity
@Table(name = "Bank_Employee_Details")
public class BankEmployeeDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Employee_ID")
    private Long employeeId;

    @Column(name = "Employee_First_Name", nullable = false)
    private String employeeFirstName;

    @Column(name = "Employee_Last_Name", nullable = false)
    private String employeeLastName;

    @Column(name = "Mobile_No", nullable = false)
    private String mobileNumber;

    @Column(name = "Email_ID", nullable = false)
    private String emailId;

    @Column(name = "Username", nullable = false)
    private String username;

    @Column(name = "Last_Login")
    @Temporal(TemporalType.TIMESTAMP)
    private Date lastLogin;

    @Column(name = "Password", nullable = false)
    private String password;

    @Column(name = "Date_of_Birth")
    @Temporal(TemporalType.DATE)
    private Date dateOfBirth;

    @Column(name = "Joining_Timestamp")
    @Temporal(TemporalType.TIMESTAMP)
    private Date joiningTimestamp;

    // Add getters and setters here

    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }

    public String getEmployeeFirstName() {
        return employeeFirstName;
    }

    public void setEmployeeFirstName(String employeeFirstName) {
        this.employeeFirstName = employeeFirstName;
    }

    public String getEmployeeLastName() {
        return employeeLastName;
    }

    public void setEmployeeLastName(String employeeLastName) {
        this.employeeLastName = employeeLastName;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Date getLastLogin() {
        return lastLogin;
    }

    public void setLastLogin(Date lastLogin) {
        this.lastLogin = lastLogin;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public Date getJoiningTimestamp() {
        return joiningTimestamp;
    }

    public void setJoiningTimestamp(Date joiningTimestamp) {
        this.joiningTimestamp = joiningTimestamp;
    }

   
}

