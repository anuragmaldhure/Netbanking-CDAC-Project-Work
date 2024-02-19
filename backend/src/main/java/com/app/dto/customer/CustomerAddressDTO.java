package com.app.dto.customer;

public class CustomerAddressDTO {
    private Long customerId;
    private String address;
    private String city;
    private String state;
    private String nationality;
    private String pinCode;
    
	public Long getCustomerId() {
		return customerId;
	}
	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
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
		builder.append("CustomerAddressDTO [customerId=").append(customerId).append(", address=").append(address)
				.append(", city=").append(city).append(", state=").append(state).append(", nationality=")
				.append(nationality).append(", pinCode=").append(pinCode).append("]");
		return builder.toString();
	}
    
}
