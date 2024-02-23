package com.app.dto.customer;

import java.util.Date;

public class CustomerSavingAccountsDTO {

	    private String accountNumber;
	    private Date accountOpeningDate;
	    private Double balance;
	    private Date nomineeDateOfBirth;
	    private String nomineeFirstName;
	    private String nomineeLastName;
	    private String nomineePanNumber;
	    private Date signupTimestamp;
	    private Date kycSubmissionTimestamp;
	    private Date kycRejectedTimestamp;
	    private Date kycVerifiedTimestamp;
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
		@Override
		public String toString() {
			StringBuilder builder = new StringBuilder();
			builder.append("CustomerSavingAccountsDTO [accountNumber=").append(accountNumber)
					.append(", accountOpeningDate=").append(accountOpeningDate).append(", balance=").append(balance)
					.append(", nomineeDateOfBirth=").append(nomineeDateOfBirth).append(", nomineeFirstName=")
					.append(nomineeFirstName).append(", nomineeLastName=").append(nomineeLastName)
					.append(", nomineePanNumber=").append(nomineePanNumber).append(", signupTimestamp=")
					.append(signupTimestamp).append(", kycSubmissionTimestamp=").append(kycSubmissionTimestamp)
					.append(", kycRejectedTimestamp=").append(kycRejectedTimestamp).append(", kycVerifiedTimestamp=")
					.append(kycVerifiedTimestamp).append("]");
			return builder.toString();
		}
	    
	 
}
