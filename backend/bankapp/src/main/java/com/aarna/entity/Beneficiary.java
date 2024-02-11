package com.aarna.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "Beneficiary")
public class Beneficiary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Beneficiary_ID")
    private Long beneficiaryId;

    @Column(name = "Beneficiary_Nickname")
    private String beneficiaryNickname;

    @Column(name = "Beneficiary_First_Name", nullable = false)
    private String beneficiaryFirstName;

    @Column(name = "Beneficiary_Last_Name", nullable = false)
    private String beneficiaryLastName;

    @Column(name = "Beneficiary_Account_Number", unique = true, nullable = false)
    private String beneficiaryAccountNumber;

    @Column(name = "Beneficiary_Mobile_Number")
    private String beneficiaryMobileNumber;

    @Column(name = "Beneficiary_Timestamp")
    @Temporal(TemporalType.TIMESTAMP)
    private Date beneficiaryTimestamp;

    @ManyToOne
    @JoinColumn(name = "Customer_ID", nullable = false)
    private CustomerDetails customer;

    // Add getters and setters here

    public Long getBeneficiaryId() {
        return beneficiaryId;
    }

    public void setBeneficiaryId(Long beneficiaryId) {
        this.beneficiaryId = beneficiaryId;
    }

    public String getBeneficiaryNickname() {
        return beneficiaryNickname;
    }

    public void setBeneficiaryNickname(String beneficiaryNickname) {
        this.beneficiaryNickname = beneficiaryNickname;
    }

    public String getBeneficiaryFirstName() {
        return beneficiaryFirstName;
    }

    public void setBeneficiaryFirstName(String beneficiaryFirstName) {
        this.beneficiaryFirstName = beneficiaryFirstName;
    }

    public String getBeneficiaryLastName() {
        return beneficiaryLastName;
    }

    public void setBeneficiaryLastName(String beneficiaryLastName) {
        this.beneficiaryLastName = beneficiaryLastName;
    }

    public String getBeneficiaryAccountNumber() {
        return beneficiaryAccountNumber;
    }

    public void setBeneficiaryAccountNumber(String beneficiaryAccountNumber) {
        this.beneficiaryAccountNumber = beneficiaryAccountNumber;
    }

    public String getBeneficiaryMobileNumber() {
        return beneficiaryMobileNumber;
    }

    public void setBeneficiaryMobileNumber(String beneficiaryMobileNumber) {
        this.beneficiaryMobileNumber = beneficiaryMobileNumber;
    }

    public Date getBeneficiaryTimestamp() {
        return beneficiaryTimestamp;
    }

    public void setBeneficiaryTimestamp(Date beneficiaryTimestamp) {
        this.beneficiaryTimestamp = beneficiaryTimestamp;
    }

    public CustomerDetails getCustomer() {
        return customer;
    }

    public void setCustomer(CustomerDetails customer) {
        this.customer = customer;
    }

}
