package com.app.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "account_transactions")
public class AccountTransactions{

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "transaction_id")
    private Long transactionId;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private CustomerDetails customer;

    // Other fields
    @Column(name = "recipient_id")
    private Long recipientId;

    @Column(name = "transaction_amount")
    private Double transactionAmount;

    @Column(name = "transaction_by_id")
    private Long transactionById;

    @Column(name = "transaction_remarks")
    private String transactionRemarks;

    @Column(name = "transaction_timestamp")
    private Date transactionTimestamp;

    @Column(name = "transaction_type")
    private String transactionType;

    @Column(name = "current_balance")
    private Double currentBalance;
    
    

    public AccountTransactions(Long transactionId, CustomerDetails customer, Long recipientId, Double transactionAmount,
			Long transactionById, String transactionRemarks, Date transactionTimestamp, String transactionType,
			Double currentBalance) {
		super();
		System.out.println("Inside parameterized ctor of AccountTransactions entity");
		this.transactionId = transactionId;
		this.customer = customer;
		this.recipientId = recipientId;
		this.transactionAmount = transactionAmount;
		this.transactionById = transactionById;
		this.transactionRemarks = transactionRemarks;
		this.transactionTimestamp = transactionTimestamp;
		this.transactionType = transactionType;
		this.currentBalance = currentBalance;
	}
    
    public AccountTransactions() {
		super();
		System.out.println("Inside parameterless ctor of AccountTransactions entity");
	}

	public Long getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(Long transactionId) {
        this.transactionId = transactionId;
    }

    public CustomerDetails getCustomer() {
        return customer;
    }

    public void setCustomer(CustomerDetails customer) {
        this.customer = customer;
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

    public Long getTransactionById() {
        return transactionById;
    }

    public void setTransactionById(Long transactionById) {
        this.transactionById = transactionById;
    }

    public String getTransactionRemarks() {
        return transactionRemarks;
    }

    public void setTransactionRemarks(String transactionRemarks) {
        this.transactionRemarks = transactionRemarks;
    }

    public Date getTransactionTimestamp() {
        return transactionTimestamp;
    }

    public void setTransactionTimestamp(Date transactionTimestamp) {
        this.transactionTimestamp = transactionTimestamp;
    }

    public String getTransactionType() {
        return transactionType;
    }

    public void setTransactionType(String transactionType) {
        this.transactionType = transactionType;
    }

    public Double getCurrentBalance() {
        return currentBalance;
    }

    public void setCurrentBalance(Double currentBalance) {
        this.currentBalance = currentBalance;
    }

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("AccountTransactions [transactionId=").append(transactionId).append(", customer=")
				.append(customer).append(", recipientId=").append(recipientId).append(", transactionAmount=")
				.append(transactionAmount).append(", transactionById=").append(transactionById)
				.append(", transactionRemarks=").append(transactionRemarks).append(", transactionTimestamp=")
				.append(transactionTimestamp).append(", transactionType=").append(transactionType)
				.append(", currentBalance=").append(currentBalance).append("]");
		return builder.toString();
	}   
    
}