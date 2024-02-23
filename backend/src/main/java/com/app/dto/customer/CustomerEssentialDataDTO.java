package com.app.dto.customer;

import java.util.Date;

public class CustomerEssentialDataDTO {
    private String gender;
    private Date dateOfBirth;
    private String panNumber;
    private String adhaarNumber;
    private String occupation;
    private Double annualIncome;
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
	public Double getAnnualIncome() {
		return annualIncome;
	}
	public void setAnnualIncome(Double annualIncome) {
		this.annualIncome = annualIncome;
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("CustomerEssentialDataDTO [gender=").append(gender).append(", dateOfBirth=").append(dateOfBirth)
				.append(", panNumber=").append(panNumber).append(", adhaarNumber=").append(adhaarNumber)
				.append(", occupation=").append(occupation)
				.append(", annualIncome=").append(annualIncome).append("]");
		return builder.toString();
	}

}
