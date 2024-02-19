package com.app.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;


	@Entity
	@Table(name = "saving_account_details")
	public class CustomerSavingAccounts implements Serializable {

	    private static final long serialVersionUID = 225876575720703530L;

		@Id
	    @Column(name = "account_number")
	    private Long accountNumber;

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

	    public Long getAccountNumber() {
	        return accountNumber;
	    }

	    public void setAccountNumber(Long accountNumber) {
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
}
