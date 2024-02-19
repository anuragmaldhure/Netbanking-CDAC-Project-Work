package com.app.dto.customer;

import java.util.Date;

import com.app.entities.Role;

public class CustomerDetailsDTO {
    private Long customerId;
    private String accountHolderFirstName;
    private String accountHolderLastName;
	private Role role;
    private String accountNumber;
    private Double annualIncome;
    private Date dateOfBirth;
    private String emailId;
    private String username;
    private String password;
    private String mobileNumber;
    private String occupation;
    private String adhaarNumber;
    private String panNumber;
    private Boolean kycStatus;
    private Boolean accountActiveStatus;
    private Date lastLoginTimestamp;
	public Long getCustomerId() {
		return customerId;
	}
	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}
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
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	public String getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}
	public Double getAnnualIncome() {
		return annualIncome;
	}
	public void setAnnualIncome(Double annualIncome) {
		this.annualIncome = annualIncome;
	}
	public Date getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
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
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getOccupation() {
		return occupation;
	}
	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}
	public String getAdhaarNumber() {
		return adhaarNumber;
	}
	public void setAdhaarNumber(String adhaarNumber) {
		this.adhaarNumber = adhaarNumber;
	}
	public String getPanNumber() {
		return panNumber;
	}
	public void setPanNumber(String panNumber) {
		this.panNumber = panNumber;
	}
	public Boolean getKycStatus() {
		return kycStatus;
	}
	public void setKycStatus(Boolean kycStatus) {
		this.kycStatus = kycStatus;
	}
	public Boolean getAccountActiveStatus() {
		return accountActiveStatus;
	}
	public void setAccountActiveStatus(Boolean accountActiveStatus) {
		this.accountActiveStatus = accountActiveStatus;
	}
	public Date getLastLoginTimestamp() {
		return lastLoginTimestamp;
	}
	public void setLastLoginTimestamp(Date lastLoginTimestamp) {
		this.lastLoginTimestamp = lastLoginTimestamp;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("CustomerDetailsDTO [customerId=").append(customerId).append(", accountHolderFirstName=")
				.append(accountHolderFirstName).append(", accountHolderLastName=").append(accountHolderLastName)
				.append(", role=").append(role).append(", accountNumber=").append(accountNumber)
				.append(", annualIncome=").append(annualIncome).append(", dateOfBirth=").append(dateOfBirth)
				.append(", emailId=").append(emailId).append(", username=").append(username).append(", password=")
				.append(password).append(", mobileNumber=").append(mobileNumber).append(", occupation=")
				.append(occupation).append(", adhaarNumber=").append(adhaarNumber).append(", panNumber=")
				.append(panNumber).append(", kycStatus=").append(kycStatus).append(", accountActiveStatus=")
				.append(accountActiveStatus).append(", lastLoginTimestamp=").append(lastLoginTimestamp).append("]");
		return builder.toString();
	}
	
    
}

