package com.app.dto.transactions;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

public class DepositMoneyDTO {
	@JsonProperty(access = Access.READ_ONLY) // used during serialization
	private Long transactionId;
	
	private Long recipientId;
    private Double transactionAmount;
    private String transactionRemarks;
	public Long getTransactionId() {
		return transactionId;
	}
	public void setTransactionId(Long transactionId) {
		this.transactionId = transactionId;
	}
	public Long getRecipientId() {
		return recipientId;
	}
	public void setRecipientId(Long recipientId) {
		this.recipientId = recipientId;
	}
	public Double getTransactionAmount() {
		return transactionAmount;
	}
	public void setTransactionAmount(Double transactionAmount) {
		this.transactionAmount = transactionAmount;
	}
	public String getTransactionRemarks() {
		return transactionRemarks;
	}
	public void setTransactionRemarks(String transactionRemarks) {
		this.transactionRemarks = transactionRemarks;
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("DepositMoneyDTO [transactionId=").append(transactionId).append(", recipientId=")
				.append(recipientId).append(", transactionAmount=").append(transactionAmount)
				.append(", transactionRemarks=").append(transactionRemarks).append("]");
		return builder.toString();
	}
    
    
}
