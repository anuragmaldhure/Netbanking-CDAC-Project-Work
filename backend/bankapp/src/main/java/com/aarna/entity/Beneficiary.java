package com.aarna.pojos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Beneficiary")
public class Beneficiary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long beneficiaryID;

    @Column
    private String beneficiaryNickname;

    @Column(nullable = false)
    private String beneficiaryFirstName;

    @Column(nullable = false)
    private String beneficiaryLastName;

    @Column(nullable = false, unique = true)
    private Integer beneficiaryAccountNumber;

    // Constructors

    public Beneficiary() {
    }

    public Beneficiary(String beneficiaryNickname, String beneficiaryFirstName,
                       String beneficiaryLastName, Integer beneficiaryAccountNumber) {
        this.beneficiaryNickname = beneficiaryNickname;
        this.beneficiaryFirstName = beneficiaryFirstName;
        this.beneficiaryLastName = beneficiaryLastName;
        this.beneficiaryAccountNumber = beneficiaryAccountNumber;
    }

    // Getters and Setters

    public Long getBeneficiaryID() {
        return beneficiaryID;
    }

    public void setBeneficiaryID(Long beneficiaryID) {
        this.beneficiaryID = beneficiaryID;
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

    public Integer getBeneficiaryAccountNumber() {
        return beneficiaryAccountNumber;
    }

    public void setBeneficiaryAccountNumber(Integer beneficiaryAccountNumber) {
        this.beneficiaryAccountNumber = beneficiaryAccountNumber;
    }
}
