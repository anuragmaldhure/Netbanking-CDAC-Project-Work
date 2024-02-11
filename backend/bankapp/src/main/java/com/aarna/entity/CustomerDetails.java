package com.aarna.pojos;



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
@Table(name = "Customer_Details")
public class CustomerDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long customerID;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false)
    private String mobileNumber;

    @Column(nullable = false, unique = true)
    private String emailID;

    @Temporal(TemporalType.TIMESTAMP)
    private Date lastLogin;

    @Column(nullable = false, unique = true)
    private String panNumber;

    @Column(nullable = false, unique = true)
    private String aadhaarNumber;

    @Column
    private String address;

    @Column
    private String city;

    @Column
    private String state;

    @Column
    private String pinCode;

    @Column
    private String nationality;

    @Column(unique = true)
    private Integer secureProfileID;

    private String secureProfilePassword;

    @Column(length = 1)
    private String gender;

    @Column
    private Date dateOfBirth;

    @Column
    private Integer ticketsRaised;

    @Column
    private String kycStatus;

    @Column
    private String messageEmailAlertsStatus;

    @Column
    private String transactionPassword;

    @Column
    private String securityQuestions;

    @Column
    private String offers;

    // Constructors

    public CustomerDetails() {
    }

    public CustomerDetails(String password, String firstName, String lastName, String mobileNumber,
                           String emailID, String panNumber, String aadhaarNumber) {
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobileNumber = mobileNumber;
        this.emailID = emailID;
        this.panNumber = panNumber;
        this.aadhaarNumber = aadhaarNumber;
    }

    // Getters and Setters

    public Long getCustomerID() {
        return customerID;
    }

    public void setCustomerID(Long customerID) {
        this.customerID = customerID;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getEmailID() {
        return emailID;
    }

    public void setEmailID(String emailID) {
        this.emailID = emailID;
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

    public String getAadhaarNumber() {
        return aadhaarNumber;
    }

    public void setAadhaarNumber(String aadhaarNumber) {
        this.aadhaarNumber = aadhaarNumber;
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

    public Integer getSecureProfileID() {
        return secureProfileID;
    }

    public void setSecureProfileID(Integer secureProfileID) {
        this.secureProfileID = secureProfileID;
    }

    public String getSecureProfilePassword() {
        return secureProfilePassword;
    }

    public void setSecureProfilePassword(String secureProfilePassword) {
        this.secureProfilePassword = secureProfilePassword;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public Integer getTicketsRaised() {
        return ticketsRaised;
    }

    public void setTicketsRaised(Integer ticketsRaised) {
        this.ticketsRaised = ticketsRaised;
    }

    public String getKycStatus() {
        return kycStatus;
    }

    public void setKycStatus(String kycStatus) {
        this.kycStatus = kycStatus;
    }

    public String getMessageEmailAlertsStatus() {
        return messageEmailAlertsStatus;
    }

    public void setMessageEmailAlertsStatus(String messageEmailAlertsStatus) {
        this.messageEmailAlertsStatus = messageEmailAlertsStatus;
    }

    public String getTransactionPassword() {
        return transactionPassword;
    }

    public void setTransactionPassword(String transactionPassword) {
        this.transactionPassword = transactionPassword;
    }

    public String getSecurityQuestions() {
        return securityQuestions;
    }

    public void setSecurityQuestions(String securityQuestions) {
        this.securityQuestions = securityQuestions;
    }

    public String getOffers() {
        return offers;
    }

    public void setOffers(String offers) {
        this.offers = offers;
    }
}

