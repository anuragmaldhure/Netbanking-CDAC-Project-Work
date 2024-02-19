package com.app.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "customer_details")
public class CustomerDetails implements Serializable {

    private static final long serialVersionUID = 4974227050528078629L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customer_id")
    private Long customerId;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private List<AccountTransactions> transactions;
    
    @OneToOne(mappedBy = "customer", cascade = CascadeType.ALL)
    private CustomerSavingAccounts savingAccountDetails;
    
    @OneToOne(mappedBy = "customerDetails", cascade = CascadeType.ALL)
    private CustomerDocuments customerDocuments;
    
    @OneToOne(mappedBy = "customerDetails", cascade = CascadeType.ALL)
    private CustomerAddress customerAddresses;


    // Other fields
    @Column(name = "account_holder_first_name")
    private String accountHolderFirstName;

    @Column(name = "account_holder_last_name")
    private String accountHolderLastName;

    @Column(name = "account_number")
    private String accountNumber;

    @Column(name = "annual_income")
    private Double annualIncome;

    @Column(name = "date_of_birth")
    private Date dateOfBirth;

    @Column(name = "gender")
    private String gender;

    @Column(name = "email_id")
    private String emailId;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "mobile_number")
    private String mobileNumber;

    @Column(name = "occupation")
    private String occupation;

    @Column(name = "adhaar_number")
    private String adhaarNumber;

    @Column(name = "pan_number")
    private String panNumber;

    @Column(name = "kyc_status")
    private Boolean kycStatus;

    @Column(name = "account_active_status")
    private Boolean accountActiveStatus;

    @Column(name = "last_login_timestamp")
    private Date lastLoginTimestamp;

    // Getters and Setters

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    // Getter and Setter for transactions
    public List<AccountTransactions> getTransactions() {
        return transactions;
    }

    public void setTransactions(List<AccountTransactions> transactions) {
        this.transactions = transactions;
    }

    // Getters and Setters for other fields (accountHolderFirstName, accountHolderLastName, etc.)
    // Getters
    public String getAccountHolderFirstName() {
        return accountHolderFirstName;
    }

    public String getAccountHolderLastName() {
        return accountHolderLastName;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public Double getAnnualIncome() {
        return annualIncome;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public String getGender() {
        return gender;
    }

    public String getEmailId() {
        return emailId;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public String getOccupation() {
        return occupation;
    }

    public String getAdhaarNumber() {
        return adhaarNumber;
    }

    public String getPanNumber() {
        return panNumber;
    }

    public Boolean getKycStatus() {
        return kycStatus;
    }

    public Boolean getAccountActiveStatus() {
        return accountActiveStatus;
    }

    public Date getLastLoginTimestamp() {
        return lastLoginTimestamp;
    }

    // Setters
    public void setAccountHolderFirstName(String accountHolderFirstName) {
        this.accountHolderFirstName = accountHolderFirstName;
    }

    public void setAccountHolderLastName(String accountHolderLastName) {
        this.accountHolderLastName = accountHolderLastName;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public void setAnnualIncome(Double annualIncome) {
        this.annualIncome = annualIncome;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public void setAdhaarNumber(String adhaarNumber) {
        this.adhaarNumber = adhaarNumber;
    }

    public void setPanNumber(String panNumber) {
        this.panNumber = panNumber;
    }

    public void setKycStatus(Boolean kycStatus) {
        this.kycStatus = kycStatus;
    }

    public void setAccountActiveStatus(Boolean accountActiveStatus) {
        this.accountActiveStatus = accountActiveStatus;
    }

    public void setLastLoginTimestamp(Date lastLoginTimestamp) {
        this.lastLoginTimestamp = lastLoginTimestamp;
    }

}