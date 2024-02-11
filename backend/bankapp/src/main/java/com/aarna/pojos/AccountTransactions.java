package com.aarna.pojos;


import java.math.BigDecimal;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Account_Transactions")
public class AccountTransactions {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long transactionID;

    @ManyToOne
    @JoinColumn(name = "account_number", nullable = false)
    private CustomerSavingAccounts customerSavingAccounts;

    @Column(nullable = false)
    private String accountType;

    @Column(nullable = false)
    private BigDecimal transactionAmount;

    @Column(nullable = false)
    private String transactionType;

    @Column(nullable = false)
    private Date transactionDate;

    @Column
    private Date transactionTime;

    @Column
    private String recipientFirstName;

    @Column
    private String transactionComment;

    @Column
    private String recipientLastName;

    @Column
    private Integer recipientAccountNumber;

    // Constructors

    public AccountTransactions() {
    }

    public AccountTransactions(CustomerSavingAccounts customerSavingAccounts, String accountType,
                               BigDecimal transactionAmount, String transactionType,
                               Date transactionDate, String recipientFirstName,
                               String transactionComment, String recipientLastName,
                               Integer recipientAccountNumber) {
        this.customerSavingAccounts = customerSavingAccounts;
        this.accountType = accountType;
        this.transactionAmount = transactionAmount;
        this.transactionType = transactionType;
        this.transactionDate = transactionDate;
        this.recipientFirstName = recipientFirstName;
        this.transactionComment = transactionComment;
        this.recipientLastName = recipientLastName;
        this.recipientAccountNumber = recipientAccountNumber;
    }

    // Getters and Setters

    public Long getTransactionID() {
        return transactionID;
    }

    public void setTransactionID(Long transactionID) {
        this.transactionID = transactionID;
    }

    public CustomerSavingAccounts getCustomerSavingAccounts() {
        return customerSavingAccounts;
    }

    public void setCustomerSavingAccounts(CustomerSavingAccounts customerSavingAccounts) {
        this.customerSavingAccounts = customerSavingAccounts;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    public BigDecimal getTransactionAmount() {
        return transactionAmount;
    }

    public void setTransactionAmount(BigDecimal transactionAmount) {
        this.transactionAmount = transactionAmount;
    }

    public String getTransactionType() {
        return transactionType;
    }

    public void setTransactionType(String transactionType) {
        this.transactionType = transactionType;
    }

    public Date getTransactionDate() {
        return transactionDate;
    }

    public void setTransactionDate(Date transactionDate) {
        this.transactionDate = transactionDate;
    }

    public Date getTransactionTime() {
        return transactionTime;
    }

    public void setTransactionTime(Date transactionTime) {
        this.transactionTime = transactionTime;
    }

    public String getRecipientFirstName() {
        return recipientFirstName;
    }

    public void setRecipientFirstName(String recipientFirstName) {
        this.recipientFirstName = recipientFirstName;
    }

    public String getTransactionComment() {
        return transactionComment;
    }

    public void setTransactionComment(String transactionComment) {
        this.transactionComment = transactionComment;
    }

    public String getRecipientLastName() {
        return recipientLastName;
    }

    public void setRecipientLastName(String recipientLastName) {
        this.recipientLastName = recipientLastName;
    }

    public Integer getRecipientAccountNumber() {
        return recipientAccountNumber;
    }

    public void setRecipientAccountNumber(Integer recipientAccountNumber) {
        this.recipientAccountNumber = recipientAccountNumber;
    }
}

