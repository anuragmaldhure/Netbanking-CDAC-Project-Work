package com.app.dto;


public class AddBeneficiaryDTO {
    private String beneficiaryNickname;
    private String beneficiaryAccountNumber;
    
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("AddBeneficiaryDTO [beneficiaryNickname=").append(beneficiaryNickname)
				.append(", beneficiaryAccountNumber=").append(beneficiaryAccountNumber).append(", customerId=").append("]");
		return builder.toString();
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

    
}
