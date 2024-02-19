package com.app.dto;


public class AddBeneficiaryDTO {
    private String beneficiaryNickname;
    private String beneficiaryAccountNumber;
    private String emailId;
    private String mobileNumber;
    private String username;
    private String password;
    
	public AddBeneficiaryDTO(String beneficiaryNickname, String beneficiaryAccountNumber, String emailId,
			String mobileNumber, String username, String password) {
		super();
		this.beneficiaryNickname = beneficiaryNickname;
		this.beneficiaryAccountNumber = beneficiaryAccountNumber;
		this.emailId = emailId;
		this.mobileNumber = mobileNumber;
		this.username = username;
		this.password = password;
		System.out.println("Inside paramaeterized ctor of customerDetails entity");
	}
	
	public AddBeneficiaryDTO() {
		super();
		System.out.println("Inside paramaeterless ctor of customerDetails entity");
	}
	
	public String getBeneficiaryNickname() {
		return beneficiaryNickname;
	}
	public void setBeneficiaryNickname(String beneficiaryNickname) {
		this.beneficiaryNickname = beneficiaryNickname;
	}
	public String getBeneficiaryAccountNumber() {
		return beneficiaryAccountNumber;
	}
	public void setBeneficiaryAccountNumber(String beneficiaryAccountNumber) {
		this.beneficiaryAccountNumber = beneficiaryAccountNumber;
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

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("AddBeneficiaryDTO [beneficiaryNickname=").append(beneficiaryNickname)
				.append(", beneficiaryAccountNumber=").append(beneficiaryAccountNumber).append(", emailId=")
				.append(emailId).append(", mobileNumber=").append(mobileNumber).append(", username=").append(username)
				.append(", password=").append(password).append("]");
		return builder.toString();
	}
    
}
