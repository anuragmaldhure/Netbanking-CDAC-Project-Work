package com.app.dto.customer;

import java.util.Arrays;

public class CustomerPhotoDTO {
    private String customerPhotoImagePath;
    private byte[] customerPhoto;
	public String getCustomerPhotoImagePath() {
		return customerPhotoImagePath;
	}
	public void setCustomerPhotoImagePath(String customerPhotoImagePath) {
		this.customerPhotoImagePath = customerPhotoImagePath;
	}
	public byte[] getCustomerPhoto() {
		return customerPhoto;
	}
	public void setCustomerPhoto(byte[] customerPhoto) {
		this.customerPhoto = customerPhoto;
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("CustomerPhotoDTO [customerPhotoImagePath=").append(customerPhotoImagePath)
				.append(", customerPhoto=").append(Arrays.toString(customerPhoto)).append("]");
		return builder.toString();
	}
    
    
}
