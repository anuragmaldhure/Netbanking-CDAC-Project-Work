package com.app.dto;

public class NewManagerDTO {
    private String managerFirstName;
    private String managerLastName;
    private String username;
    private String password;

	public String getManagerFirstName() {
		return managerFirstName;
	}
	public void setManagerFirstName(String managerFirstName) {
		this.managerFirstName = managerFirstName;
	}
	public String getManagerLastName() {
		return managerLastName;
	}
	public void setManagerLastName(String managerLastName) {
		this.managerLastName = managerLastName;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("NewManagerDTO [managerFirstName=").append(managerFirstName).append(", managerLastName=")
				.append(managerLastName).append(", username=").append(username).append(", password=").append(password)
				.append("]");
		return builder.toString();
	}
   
}
