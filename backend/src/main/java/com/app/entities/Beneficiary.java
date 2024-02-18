package com.app.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
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
    
    //******************************************Send Money
	@OneToOne
	@JoinColumn(name = "Beneficiary_Account_Number", referencedColumnName = "Account_Number", 
		nullable = false) // Foreign key referencing account number   
    private CustomerDetails beneficiaryAccountNumber;

    @Column(name = "Beneficiary_Email")
    private String beneficiaryEmail;

    @Column(name = "Beneficiary_Timestamp")
    @Temporal(TemporalType.TIMESTAMP)
    private Date beneficiaryTimestamp;

    @ManyToOne
    @JoinColumn(name = "Customer_ID", referencedColumnName = "Customer_ID",
    	nullable = false)  // Foreign key referencing customerId
    private CustomerDetails customerId;
    
    //******************************************Send Money
//    @ManyToOne
//    @JoinColumn(name = "Customer_Username", referencedColumnName = "Username", nullable = false) // Foreign key referencing username
//    private CustomerDetails customerByUsername;

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

    //******************************************Send Money  

    public CustomerDetails getBeneficiaryAccountNumber() {
		return beneficiaryAccountNumber;
	}

	public void setBeneficiaryAccountNumber(CustomerDetails beneficiaryAccountNumber) {
		this.beneficiaryAccountNumber = beneficiaryAccountNumber;
	}

    public String getBeneficiaryEmail() {
		return beneficiaryEmail;
	}

	public void setBeneficiaryEmail(String beneficiaryEmail) {
		this.beneficiaryEmail = beneficiaryEmail;
	}

	public CustomerDetails getCustomerId() {
		return customerId;
	}

	public void setCustomerId(CustomerDetails customerId) {
		this.customerId = customerId;
	}

	public Date getBeneficiaryTimestamp() {
        return beneficiaryTimestamp;
    }

    public void setBeneficiaryTimestamp(Date beneficiaryTimestamp) {
        this.beneficiaryTimestamp = beneficiaryTimestamp;
    }
    
	public CustomerDetails getCustomer() {
		return customerId;
	}

	public void setCustomer(CustomerDetails customer) {
		this.customerId = customer;
	}
	
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Beneficiary [beneficiaryId=").append(beneficiaryId).append(", beneficiaryNickname=")
				.append(beneficiaryNickname).append(", beneficiaryFirstName=").append(beneficiaryFirstName)
				.append(", beneficiaryLastName=").append(beneficiaryLastName).append(", beneficiaryAccountNumber=")
				.append(beneficiaryAccountNumber).append(", beneficiaryEmail=").append(beneficiaryEmail)
				.append(", beneficiaryTimestamp=").append(beneficiaryTimestamp).append(", customerId=")
				.append(customerId).append("]");
		return builder.toString();
	}
	
}
