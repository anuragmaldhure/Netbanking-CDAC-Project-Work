package com.app.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;


	@Entity
	@Table(name = "saving_account_details")
	public class CustomerSavingAccounts {

		@Id
	    @Column(name = "account_number")
	    private String accountNumber;

	    @Column(name = "account_opening_date")
	    private Date accountOpeningDate;

	    @Column(name = "balance")
	    private Double balance;

	    @Column(name = "nominee_date_of_birth")
	    private Date nomineeDateOfBirth;

	    @Column(name = "nominee_first_name")
	    private String nomineeFirstName;

	    @Column(name = "nominee_last_name")
	    private String nomineeLastName;

	    @Column(name = "nominee_pannumber")
	    private String nomineePanNumber;

	    @Column(name = "signup_timestamp")
	    private Date signupTimestamp;

	    @Column(name = "kyc_submission_timestamp")
	    private Date kycSubmissionTimestamp;

	    @Column(name = "kyc_rejected_timestamp")
	    private Date kycRejectedTimestamp;

	    @Column(name = "kyc_verified_timestamp")
	    private Date kycVerifiedTimestamp;

//	    @Column(name = "beneficiary_id")
//	    private Long beneficiaryId;

	    @OneToOne
	    @JoinColumn(name = "customer_id")
	    private CustomerDetails customer;
	    
	    

	    public CustomerSavingAccounts(String accountNumber, Date accountOpeningDate, Double balance, Date nomineeDateOfBirth,
		String nomineeFirstName, String nomineeLastName, String nomineePanNumber, Date signupTimestamp,
		Date kycSubmissionTimestamp, Date kycRejectedTimestamp, Date kycVerifiedTimestamp, CustomerDetails customer) {
			super();
			System.out.println("Inside parameterized ctor of CustomerSavingAccounts entity");
			this.accountNumber = accountNumber;
			this.accountOpeningDate = accountOpeningDate;
			this.balance = balance;
			this.nomineeDateOfBirth = nomineeDateOfBirth;
			this.nomineeFirstName = nomineeFirstName;
			this.nomineeLastName = nomineeLastName;
			this.nomineePanNumber = nomineePanNumber;
			this.signupTimestamp = signupTimestamp;
			this.kycSubmissionTimestamp = kycSubmissionTimestamp;
			this.kycRejectedTimestamp = kycRejectedTimestamp;
			this.kycVerifiedTimestamp = kycVerifiedTimestamp;
			this.customer = customer;
		}
	    
	    public CustomerSavingAccounts() {
			super();
			System.out.println("Inside parameterless ctor of CustomerSavingAccounts entity");
		}
	    
	    public CustomerSavingAccounts(String accountNumber) {
			super();
			this.accountNumber = accountNumber;
			System.out.println("Inside custom ctor of CustomerSavingAccounts entity");
		}

		public String getAccountNumber() {
	        return accountNumber;
	    }

	    public void setAccountNumber(String accountNumber) {
	        this.accountNumber = accountNumber;
	    }

	    public Date getAccountOpeningDate() {
	        return accountOpeningDate;
	    }

	    public void setAccountOpeningDate(Date accountOpeningDate) {
	        this.accountOpeningDate = accountOpeningDate;
	    }

	    public Double getBalance() {
	        return balance;
	    }

	    public void setBalance(Double balance) {
	        this.balance = balance;
	    }

	    public Date getNomineeDateOfBirth() {
	        return nomineeDateOfBirth;
	    }

	    public void setNomineeDateOfBirth(Date nomineeDateOfBirth) {
	        this.nomineeDateOfBirth = nomineeDateOfBirth;
	    }

	    public String getNomineeFirstName() {
	        return nomineeFirstName;
	    }

	    public void setNomineeFirstName(String nomineeFirstName) {
	        this.nomineeFirstName = nomineeFirstName;
	    }

	    public String getNomineeLastName() {
	        return nomineeLastName;
	    }

	    public void setNomineeLastName(String nomineeLastName) {
	        this.nomineeLastName = nomineeLastName;
	    }

	    public String getNomineePanNumber() {
	        return nomineePanNumber;
	    }

	    public void setNomineePanNumber(String nomineePanNumber) {
	        this.nomineePanNumber = nomineePanNumber;
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

	    public Date getKycRejectedTimestamp() {
	        return kycRejectedTimestamp;
	    }

	    public void setKycRejectedTimestamp(Date kycRejectedTimestamp) {
	        this.kycRejectedTimestamp = kycRejectedTimestamp;
	    }

	    public Date getKycVerifiedTimestamp() {
	        return kycVerifiedTimestamp;
	    }

	    public void setKycVerifiedTimestamp(Date kycVerifiedTimestamp) {
	        this.kycVerifiedTimestamp = kycVerifiedTimestamp;
	    }

//	    public Long getBeneficiaryId() {
//	        return beneficiaryId;
//	    }
//
//	    public void setBeneficiaryId(Long beneficiaryId) {
//	        this.beneficiaryId = beneficiaryId;
//	    }

	    public CustomerDetails getCustomer() {
	        return customer;
	    }

	    public void setCustomer(CustomerDetails customer) {
	        this.customer = customer;
	    }

		@Override
		public String toString() {
			StringBuilder builder = new StringBuilder();
			builder.append("CustomerSavingAccounts [accountNumber=").append(accountNumber)
					.append(", accountOpeningDate=").append(accountOpeningDate).append(", balance=").append(balance)
					.append(", nomineeDateOfBirth=").append(nomineeDateOfBirth).append(", nomineeFirstName=")
					.append(nomineeFirstName).append(", nomineeLastName=").append(nomineeLastName)
					.append(", nomineePanNumber=").append(nomineePanNumber).append(", signupTimestamp=")
					.append(signupTimestamp).append(", kycSubmissionTimestamp=").append(kycSubmissionTimestamp)
					.append(", kycRejectedTimestamp=").append(kycRejectedTimestamp).append(", kycVerifiedTimestamp=")
					.append(kycVerifiedTimestamp).append(", customer=").append(customer).append("]");
			return builder.toString();
		}
	    
}
