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
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "Account_Transactions")
public class AccountTransactions {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Transaction_ID")
    private Long transactionId;

    @ManyToOne
    @JoinColumn(name = "Customer_ID", nullable = false)
    private CustomerDetails customerID;

    @Column(name = "Transaction_Amount", nullable = false)
    private Double transactionAmount;

    @Column(name = "Transaction_Type", nullable = false) //Either '-' for Debit or '+' for Credit
    private String transactionType;

    @Column(name = "Transaction_Timestamp", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date transactionTimestamp;

    @Column(name = "Recipient_ID")
    private Long recipientId;

    @Column(name = "Transaction_Remarks")
    private String transactionRemarks;

    @Column(name = "Transaction_By_ID", nullable = false)
    private Long transactionById;

    // Add getters and setters here

    public Long getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(Long transactionId) {
        this.transactionId = transactionId;
    }

    public CustomerDetails getCustomerID() {
        return customerID;
    }

    public void setCustomer(CustomerDetails customerID) {
        this.customerID = customerID;
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
    

}