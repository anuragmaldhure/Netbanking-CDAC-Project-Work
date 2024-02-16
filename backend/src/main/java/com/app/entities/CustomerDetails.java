package com.app.entities;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "Customer_Details")
public class CustomerDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Customer_ID")
    private Long customerId;
    

    @Column(name = "Username", nullable = false)
    private String username;

    @Column(name = "Password", nullable = false)
    private String password;

    @Column(name = "Account_Holder_First_Name", nullable = false)
    private String accountHolderFirstName;

    @Column(name = "Account_Holder_Last_Name", nullable = false)
    private String accountHolderLastName;

    @Column(name = "Mobile_Number", nullable = false)
    private String mobileNumber;

    @Column(name = "Email_ID", unique = true, nullable = false)
    private String emailId;

    @Column(name = "Last_Login")
    @Temporal(TemporalType.TIMESTAMP)
    private Date lastLogin;

    @Column(name = "PAN_Number", unique = true, nullable = false)
    private String panNumber;

    @Column(name = "Adhaar_Number", unique = true, nullable = false)
    private String adhaarNumber;

    @Column(name = "Occupation")
    private String occupation;

    @Column(name = "Annual_Income")
    private BigDecimal annualIncome;

    @Column(name = "Address")
    private String address;

    @Column(name = "City")
    private String city;

    @Column(name = "State")
    private String state;

    @Column(name = "Pin_Code")
    private String pinCode;

    @Column(name = "Nationality")
    private String nationality;

    @Column(name = "Gender")
    private String gender;

    @Column(name = "Signup_Timestamp")
    @Temporal(TemporalType.TIMESTAMP)
    private Date signupTimestamp;

    @Column(name = "KYC_Submission_Timestamp")
    @Temporal(TemporalType.TIMESTAMP)
    private Date kycSubmissionTimestamp;

    @Column(name = "KYC_Verified_Timestamp")
    @Temporal(TemporalType.TIMESTAMP)
    private Date kycVerifiedTimestamp;

    @Column(name = "KYC_Rejected_Timestamp")
    @Temporal(TemporalType.TIMESTAMP)
    private Date kycRejectedTimestamp;

    @Column(name = "Savings_Account_Number")
    private String savingsAccountNumber;

    @Column(name = "Date_of_Birth")
    private Date dateOfBirth;

    @Column(name = "KYC_Status")
    private Boolean kycStatus; 

    @Column(name = "Message_Email_Alerts_Status")
    private String messageEmailAlertsStatus;

    @Column(name = "Offers")
    private String offers;

    @Column(name = "Account_Number")
    private String accountNumber;
    
    //Documents Images
	@Lob
	private byte[] customerPhoto;	//for storing image in blob format in db
	private String customerPhotoImagePath;// This will be used for storing n restoring images in server side folder
	
	@Lob
	private byte[] panCardPhoto;
	private String panCardPhotoImagePath;
	
	@Lob
	private byte[] aadharCardPhoto;
	private String aadharCardPhotoImagePath;

	public byte[] getCustomerPhoto() {
		return customerPhoto;
	}

	public void setCustomerPhoto(byte[] customerPhoto) {
		this.customerPhoto = customerPhoto;
	}

	public String getCustomerPhotoImagePath() {
		return customerPhotoImagePath;
	}

	public void setCustomerPhotoImagePath(String customerPhotoImagePath) {
		this.customerPhotoImagePath = customerPhotoImagePath;
	}

	public byte[] getPanCardPhoto() {
		return panCardPhoto;
	}

	public void setPanCardPhoto(byte[] panCardPhoto) {
		this.panCardPhoto = panCardPhoto;
	}

	public String getPanCardPhotoImagePath() {
		return panCardPhotoImagePath;
	}

	public void setPanCardPhotoImagePath(String panCardPhotoImagePath) {
		this.panCardPhotoImagePath = panCardPhotoImagePath;
	}

	public byte[] getAadharCardPhoto() {
		return aadharCardPhoto;
	}

	public void setAadharCardPhoto(byte[] aadharCardPhoto) {
		this.aadharCardPhoto = aadharCardPhoto;
	}

	public String getAadharCardPhotoImagePath() {
		return aadharCardPhotoImagePath;
	}

	public void setAadharCardPhotoImagePath(String aadharCardPhotoImagePath) {
		this.aadharCardPhotoImagePath = aadharCardPhotoImagePath;
	}

	public Long getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
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

	public Date getLastLogin() {
		return lastLogin;
	}

	public void setLastLogin(Date lastLogin) {
		this.lastLogin = lastLogin;
	}

	public String getPanNumber() {
		return panNumber;
	}

	public void setPanNumber(String panNumber) {
		this.panNumber = panNumber;
	}

	public String getAdhaarNumber() {
		return adhaarNumber;
	}

	public void setAdhaarNumber(String adhaarNumber) {
		this.adhaarNumber = adhaarNumber;
	}

	public String getOccupation() {
		return occupation;
	}

	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}

	public BigDecimal getAnnualIncome() {
		return annualIncome;
	}

	public void setAnnualIncome(BigDecimal annualIncome) {
		this.annualIncome = annualIncome;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getPinCode() {
		return pinCode;
	}

	public void setPinCode(String pinCode) {
		this.pinCode = pinCode;
	}

	public String getNationality() {
		return nationality;
	}

	public void setNationality(String nationality) {
		this.nationality = nationality;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Date getSignupTimestamp() {
		return signupTimestamp;
	}

	public void setSignupTimestamp(Date signupTimestamp) {
		this.signupTimestamp = signupTimestamp;
	}

	public Date getKycSubmissionTimestamp() {
		return kycSubmissionTimestamp;
	}

	public void setKycSubmissionTimestamp(Date kycSubmissionTimestamp) {
		this.kycSubmissionTimestamp = kycSubmissionTimestamp;
	}

	public Date getKycVerifiedTimestamp() {
		return kycVerifiedTimestamp;
	}

	public void setKycVerifiedTimestamp(Date kycVerifiedTimestamp) {
		this.kycVerifiedTimestamp = kycVerifiedTimestamp;
	}

	public Date getKycRejectedTimestamp() {
		return kycRejectedTimestamp;
	}

	public void setKycRejectedTimestamp(Date kycRejectedTimestamp) {
		this.kycRejectedTimestamp = kycRejectedTimestamp;
	}

	public String getSavingsAccountNumber() {
		return savingsAccountNumber;
	}

	public void setSavingsAccountNumber(String savingsAccountNumber) {
		this.savingsAccountNumber = savingsAccountNumber;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public Boolean getKycStatus() {
		return kycStatus;
	}

	public void setKycStatus(Boolean kycStatus) {
		this.kycStatus = kycStatus;
	}

	public String getMessageEmailAlertsStatus() {
		return messageEmailAlertsStatus;
	}

	public void setMessageEmailAlertsStatus(String messageEmailAlertsStatus) {
		this.messageEmailAlertsStatus = messageEmailAlertsStatus;
	}

	public String getOffers() {
		return offers;
	}

	public void setOffers(String offers) {
		this.offers = offers;
	}

	public String getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}

}