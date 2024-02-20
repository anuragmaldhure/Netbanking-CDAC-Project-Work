package com.app.entities;

import java.util.Date;
import java.util.List;
import java.util.Random;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;
import javax.persistence.Table;

@Entity
@Table(name = "customer_details")
public class CustomerDetails {

    //primary key
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customer_id")
    private Long customerId;

	//foreign keys references
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
    
    //Role_ENUM
	@Enumerated(EnumType.STRING) // varchar
	@Column(length = 20)
	private Role role;

    @Column(name = "account_number", unique = true, length = 8, nullable = true)
//    @Column(name = "account_number", unique = true, length = 8, nullable = false)
//    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "account_number_sequence")
//    @SequenceGenerator(name = "account_number_sequence", sequenceName = "account_number_sequence", allocationSize = 1)
    private String accountNumber;

    @Column(name = "annual_income")
    private Double annualIncome;

    @Column(name = "date_of_birth")
    private Date dateOfBirth;

	@Column(name = "gender")
    private String gender;

    @Column(name = "email_id", nullable = false)
    private String emailId;

    @Column(name = "username", unique = true)
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "mobile_number")
    private String mobileNumber;

    @Column(name = "occupation")
    private String occupation;

    @Column(name = "adhaar_number", unique = true)
    private String adhaarNumber;

    @Column(name = "pan_number", unique = true)
    private String panNumber;

    @Column(name = "kyc_status", columnDefinition = "BOOLEAN DEFAULT false")
    private Boolean kycStatus;

    @Column(name = "account_active_status", columnDefinition = "BOOLEAN DEFAULT true")
    private Boolean accountActiveStatus;

    @Column(name = "last_login_timestamp")
    private Date lastLoginTimestamp;
    
    // Generate default account number before entity is persisted
    @PrePersist
    public void generateAccountNumber() {
        if (accountNumber == null) {
            accountNumber = generateCustomAccountNumber();
        }
    }

    
 // Generate custom account number
    private String generateCustomAccountNumber() {
        StringBuilder accountNumberBuilder = new StringBuilder();
        Random random = new Random();

        // Generate 4 random alphabetic characters
        for (int i = 0; i < 4; i++) {
            char randomChar = (char) (random.nextInt(26) + 'A'); // Generate a random uppercase letter
            accountNumberBuilder.append(randomChar);
        }

        // Generate 8 random numeric characters
        for (int i = 0; i < 4; i++) {
            int randomDigit = random.nextInt(10); // Generate a random digit (0-9)
            accountNumberBuilder.append(randomDigit);
        }

        return accountNumberBuilder.toString();
    }
    
    //Constructors

    public CustomerDetails(Long customerId, List<AccountTransactions> transactions,
			CustomerSavingAccounts savingAccountDetails, CustomerDocuments customerDocuments,
			CustomerAddress customerAddresses, String accountHolderFirstName, String accountHolderLastName,
			Role role, String accountNumber, Double annualIncome, Date dateOfBirth, String gender, String emailId,
			String username, String password, String mobileNumber, String occupation, String adhaarNumber,
			String panNumber, Boolean kycStatus, Boolean accountActiveStatus, Date lastLoginTimestamp) {
		super();
		System.out.println("Inside parameterized ctor of customerDetails entity");
		this.customerId = customerId;
		this.transactions = transactions;
		this.savingAccountDetails = savingAccountDetails;
		this.customerDocuments = customerDocuments;
		this.customerAddresses = customerAddresses;
		this.accountHolderFirstName = accountHolderFirstName;
		this.accountHolderLastName = accountHolderLastName;
		this.role = role;
		this.accountNumber = accountNumber;
		this.annualIncome = annualIncome;
		this.dateOfBirth = dateOfBirth;
		this.gender = gender;
		this.emailId = emailId;
		this.username = username;
		this.password = password;
		this.mobileNumber = mobileNumber;
		this.occupation = occupation;
		this.adhaarNumber = adhaarNumber;
		this.panNumber = panNumber;
		this.kycStatus = kycStatus;
		this.accountActiveStatus = accountActiveStatus;
		this.lastLoginTimestamp = lastLoginTimestamp;
	}
    
    public CustomerDetails() {
    	System.out.println("Inside paramaeterless ctor of customerDetails entity");
	}


    // Getters and Setters
    
	public Long getCustomerId() {
		return customerId;
	}


	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}


	public List<AccountTransactions> getTransactions() {
		return transactions;
	}


	public void setTransactions(List<AccountTransactions> transactions) {
		this.transactions = transactions;
	}


	public CustomerSavingAccounts getSavingAccountDetails() {
		return savingAccountDetails;
	}


	public void setSavingAccountDetails(CustomerSavingAccounts savingAccountDetails) {
		this.savingAccountDetails = savingAccountDetails;
	}


	public CustomerDocuments getCustomerDocuments() {
		return customerDocuments;
	}


	public void setCustomerDocuments(CustomerDocuments customerDocuments) {
		this.customerDocuments = customerDocuments;
	}


	public CustomerAddress getCustomerAddresses() {
		return customerAddresses;
	}


	public void setCustomerAddresses(CustomerAddress customerAddresses) {
		this.customerAddresses = customerAddresses;
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


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
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


	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("CustomerDetails [customerId=").append(customerId).append(", transactions=").append(transactions)
				.append(", savingAccountDetails=").append(savingAccountDetails).append(", customerDocuments=")
				.append(customerDocuments).append(", customerAddresses=").append(customerAddresses)
				.append(", accountHolderFirstName=").append(accountHolderFirstName).append(", accountHolderLastName=")
				.append(accountHolderLastName).append(", role=").append(role).append(", accountNumber=")
				.append(accountNumber).append(", annualIncome=").append(annualIncome).append(", dateOfBirth=")
				.append(dateOfBirth).append(", gender=").append(gender).append(", emailId=").append(emailId)
				.append(", username=").append(username).append(", password=").append(password).append(", mobileNumber=")
				.append(mobileNumber).append(", occupation=").append(occupation).append(", adhaarNumber=")
				.append(adhaarNumber).append(", panNumber=").append(panNumber).append(", kycStatus=").append(kycStatus)
				.append(", accountActiveStatus=").append(accountActiveStatus).append(", lastLoginTimestamp=")
				.append(lastLoginTimestamp).append("]");
		return builder.toString();
	}	
    
}