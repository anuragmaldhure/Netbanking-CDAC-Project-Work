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
    
//    @ManyToOne
//    @JoinColumn(name = "Customer_Username", referencedColumnName = "Username", nullable = false) // Foreign key referencing username
//    private CustomerDetails customerByUsername;
//
//    @ManyToOne
//    @JoinColumn(name = "Customer_ID", referencedColumnName = "Customer_ID", nullable = false) // Foreign key referencing customerId
//    private CustomerDetails customerByCustomerId;


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

//	public CustomerDetails getCustomerByUsername() {
//		return customerByUsername;
//	}
//
//	public void setCustomerByUsername(CustomerDetails customerByUsername) {
//		this.customerByUsername = customerByUsername;
//	}
//
//	public CustomerDetails getCustomerByCustomerId() {
//		return customerByCustomerId;
//	}
//
//	public void setCustomerByCustomerId(CustomerDetails customerByCustomerId) {
//		this.customerByCustomerId = customerByCustomerId;
//	}

}
