package com.app.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "Bank_Employee_Details")
public class BankEmployeeDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Employee_ID")
    private Long employeeId;
    
    //Role_ENUM
	@Enumerated(EnumType.STRING) // varchar
	@Column(length = 20)
	private Role role;

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
    
    
    public BankEmployeeDetails(Long employeeId, Role role, String employeeFirstName, String employeeLastName,
			String mobileNumber, String emailId, String username, Date lastLogin, String password, Date dateOfBirth,
			Date joiningTimestamp) {
		super();
		System.out.println("Inside parameterized ctor of BankEmployeeDetails entity");
		this.employeeId = employeeId;
		this.role = role;
		this.employeeFirstName = employeeFirstName;
		this.employeeLastName = employeeLastName;
		this.mobileNumber = mobileNumber;
		this.emailId = emailId;
		this.username = username;
		this.lastLogin = lastLogin;
		this.password = password;
		this.dateOfBirth = dateOfBirth;
		this.joiningTimestamp = joiningTimestamp;
	}
    
    public BankEmployeeDetails() {
		super();
		System.out.println("Inside parameterless ctor of BankEmployeeDetails entity");
	}

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

    public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public Date getJoiningTimestamp() {
        return joiningTimestamp;
    }

    public void setJoiningTimestamp(Date joiningTimestamp) {
        this.joiningTimestamp = joiningTimestamp;
    }

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("BankEmployeeDetails [employeeId=").append(employeeId).append(", role=").append(role)
				.append(", employeeFirstName=").append(employeeFirstName).append(", employeeLastName=")
				.append(employeeLastName).append(", mobileNumber=").append(mobileNumber).append(", emailId=")
				.append(emailId).append(", username=").append(username).append(", lastLogin=").append(lastLogin)
				.append(", password=").append(password).append(", dateOfBirth=").append(dateOfBirth)
				.append(", joiningTimestamp=").append(joiningTimestamp).append("]");
		return builder.toString();
	}
}