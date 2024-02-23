package com.app.dto.customer;

import java.util.Date;

public class CustomerNomineeDetailsDTO {
	   private Date nomineeDateOfBirth;
	   private String nomineeFirstName;
	   private String nomineeLastName;
	   private String nomineePanNumber;
	   
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
	
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("CustomerNomineeDetails [nomineeDateOfBirth=").append(nomineeDateOfBirth)
				.append(", nomineeFirstName=").append(nomineeFirstName).append(", nomineeLastName=")
				.append(nomineeLastName).append(", nomineePanNumber=").append(nomineePanNumber).append("]");
		return builder.toString();
	}
   
}
