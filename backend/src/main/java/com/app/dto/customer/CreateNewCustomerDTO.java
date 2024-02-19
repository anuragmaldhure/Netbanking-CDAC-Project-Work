package com.app.dto.customer;

//import com.fasterxml.jackson.annotation.JsonProperty;
//import com.fasterxml.jackson.annotation.JsonProperty.Access;

public class CreateNewCustomerDTO {
//	   @JsonProperty(access = Access.READ_ONLY) // used during serialization
//	   private Long customerId;
	   private String accountHolderFirstName;
	   private String accountHolderLastName;
	   private String username;
// 	   @JsonProperty(access = Access.WRITE_ONLY)//used during de-ser
	   private String password;
	   private String emailId;
	   private String mobileNumber;

	public String getAccountHolderFirstName() {
		return accountHolderFirstName;
	}
	public void setAccountHolderFirstName(String accountHolderFirstName) {
		this.accountHolderFirstName = accountHolderFirstName;
	}
	public String getAccountHolderLastName() {
		return accountHolderLastName;
	}
	public void setAccountHolderLastName(String accountHolderLastName) {
		this.accountHolderLastName = accountHolderLastName;
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
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("CreateNewCustomerDTO accountHolderFirstName=")
				.append(accountHolderFirstName).append(", accountHolderLastName=").append(accountHolderLastName)
				.append(", username=").append(username).append(", password=").append(password).append(", emailId=")
				.append(emailId).append(", mobileNumber=").append(mobileNumber).append("]");
		return builder.toString();
	}
}
