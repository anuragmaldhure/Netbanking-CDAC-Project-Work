package com.app.entities;

import java.math.BigDecimal;
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
@Table(name = "Customer_Saving_Accounts")
public class CustomerSavingAccounts {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long accountNumber;

    @Column(nullable = false)
    private String accountType;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private CustomerDetails customerDetails;

    @Column(nullable = false)
    private BigDecimal balance;

    @Column(nullable = false)
    private String nomineeFirstName;

    @Column(nullable = false)
    private String nomineeLastName;

    @Column(nullable = false)
    private Date nomineeDateOfBirth;

    @Column(nullable = false, unique = true)
    private String nomineePANNumber;

    @Column(nullable = false)
    private Date accountOpeningDate;

    @Column(unique = true)
    private Integer transactionID;

    @ManyToOne
    @JoinColumn(name = "beneficiary_id")
    private Beneficiary beneficiary;

    // Constructors

    public CustomerSavingAccounts() {
    }

    public CustomerSavingAccounts(String accountType, BigDecimal balance, 
            String nomineeFirstName, String nomineeLastName, Date nomineeDateOfBirth,
            String nomineePANNumber, Date accountOpeningDate) {
        this.accountType = accountType;
        this.balance = balance;
        this.nomineeFirstName = nomineeFirstName;
        this.nomineeLastName = nomineeLastName;
        this.nomineeDateOfBirth = nomineeDateOfBirth;
        this.nomineePANNumber = nomineePANNumber;
        this.accountOpeningDate = accountOpeningDate;
    }

    // Getters and Setters

    public Long getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(Long accountNumber) {
        this.accountNumber = accountNumber;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    public CustomerDetails getCustomerDetails() {
        return customerDetails;
    }

    public void setCustomerDetails(CustomerDetails customerDetails) {
        this.customerDetails = customerDetails;
    }

    public BigDecimal getBalance() {
        return balance;
    }

    public void setBalance(BigDecimal balance) {
        this.balance = balance;
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

    public Date getNomineeDateOfBirth() {
        return nomineeDateOfBirth;
    }

    public void setNomineeDateOfBirth(Date nomineeDateOfBirth) {
        this.nomineeDateOfBirth = nomineeDateOfBirth;
    }

    public String getNomineePANNumber() {
        return nomineePANNumber;
    }

    public void setNomineePANNumber(String nomineePANNumber) {
        this.nomineePANNumber = nomineePANNumber;
    }

    public Date getAccountOpeningDate() {
        return accountOpeningDate;
    }

    public void setAccountOpeningDate(Date accountOpeningDate) {
        this.accountOpeningDate = accountOpeningDate;
    }

    public Integer getTransactionID() {
        return transactionID;
    }

    public void setTransactionID(Integer transactionID) {
        this.transactionID = transactionID;
    }

    public Beneficiary getBeneficiary() {
        return beneficiary;
    }

    public void setBeneficiary(Beneficiary beneficiary) {
        this.beneficiary = beneficiary;
    }
}
