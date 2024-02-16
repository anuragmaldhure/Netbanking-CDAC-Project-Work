package com.app.dto;

import java.util.Date;

public class AccountTransactionsDTO {
	private Long transactionId;
//  private CustomerDetails customerID; -> Not required
    private Double transactionAmount;
    private String transactionType;
    private Date transactionTimestamp;
    private Long recipientId;
    private String transactionRemarks;
    private Long transactionById;
    
    public Long getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(Long transactionId) {
		this.transactionId = transactionId;
	}

	public Double getTransactionAmount() {
		return transactionAmount;
	}

	public void setTransactionAmount(Double transactionAmount) {
		this.transactionAmount = transactionAmount;
	}

	public String getTransactionType() {
		return transactionType;
	}

	public void setTransactionType(String transactionType) {
		this.transactionType = transactionType;
	}

	public Date getTransactionTimestamp() {
		return transactionTimestamp;
	}

	public void setTransactionTimestamp(Date transactionTimestamp) {
		this.transactionTimestamp = transactionTimestamp;
	}

	public Long getRecipientId() {
		return recipientId;
	}

	public void setRecipientId(Long recipientId) {
		this.recipientId = recipientId;
	}

	public String getTransactionRemarks() {
		return transactionRemarks;
	}

	public void setTransactionRemarks(String transactionRemarks) {
		this.transactionRemarks = transactionRemarks;
	}

	public Long getTransactionById() {
		return transactionById;
	}

	public void setTransactionById(Long transactionById) {
		this.transactionById = transactionById;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("AccountTransactionsDTO [transactionId=").append(transactionId).append(", transactionAmount=")
				.append(transactionAmount).append(", transactionType=").append(transactionType)
				.append(", transactionTimestamp=").append(transactionTimestamp).append(", recipientId=")
				.append(recipientId).append(", transactionRemarks=").append(transactionRemarks)
				.append(", transactionById=").append(transactionById).append("]");
		return builder.toString();
	}
}
