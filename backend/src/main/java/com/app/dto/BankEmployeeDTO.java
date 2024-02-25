package com.app.dto;

import java.util.Date;

public class BankEmployeeDTO {
	    private String employeeFirstName;
	    private String employeeLastName;
	    private String mobileNumber;
	    private String emailId;
	    private String username;
	    private String password;
	    private Date dateOfBirth;
 	    private Date lastLogin;
	    
 	    
 	    
		@Override
		public String toString() {
			StringBuilder builder = new StringBuilder();
			builder.append("BankEmployeeDTO [employeeFirstName=").append(employeeFirstName)
					.append(", employeeLastName=").append(employeeLastName).append(", mobileNumber=")
					.append(mobileNumber).append(", emailId=").append(emailId).append(", username=").append(username)
					.append(", password=").append(password).append(", dateOfBirth=").append(dateOfBirth)
					.append(", lastLogin=").append(lastLogin).append("]");
			return builder.toString();
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
		public Date getLastLogin() {
			return lastLogin;
		}
		public void setLastLogin(Date lastLogin) {
			this.lastLogin = lastLogin;
		}
		
//	    private Long employeeId;
//		private Role role;	 
		
}
