package com.app.entities;

import javax.persistence.*;

@Entity
@Table(name = "customer_addresses")
public class CustomerAddress {

    @Id
    @Column(name = "customer_id")
    private Long customerId;

    @OneToOne
    @MapsId
    @JoinColumn(name = "customer_id")
    private CustomerDetails customerDetails;

    @Column(name = "address")
    private String address;

    @Column(name = "city")
    private String city;

    @Column(name = "state")
    private String state;

    @Column(name = "nationality")
    private String nationality;

    @Column(name = "pin_code")
    private String pinCode;
    

    public CustomerAddress(Long customerId, CustomerDetails customerDetails, String address, String city, String state,
			String nationality, String pinCode) {
		super();
		this.customerId = customerId;
		this.customerDetails = customerDetails;
		this.address = address;
		this.city = city;
		this.state = state;
		this.nationality = nationality;
		this.pinCode = pinCode;
		System.out.println("Inside parameterized ctor of CustomerAddress entity");
	}
    
    public CustomerAddress() {
		super();
		System.out.println("Inside parameterless ctor of CustomerAddress entity");
	}
    
    
	// Getters and Setters

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    public CustomerDetails getCustomerDetails() {
        return customerDetails;
    }

    public void setCustomerDetails(CustomerDetails customerDetails) {
        this.customerDetails = customerDetails;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getPinCode() {
        return pinCode;
    }

    public void setPinCode(String pinCode) {
        this.pinCode = pinCode;
    }

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("CustomerAddress [customerId=").append(customerId).append(", customerDetails=")
				.append(customerDetails).append(", address=").append(address).append(", city=").append(city)
				.append(", state=").append(state).append(", nationality=").append(nationality).append(", pinCode=")
				.append(pinCode).append("]");
		return builder.toString();
	}

}
