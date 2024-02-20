package com.app.dto.customer;

public class BalanceAndAccountNumberDTO {
	private String accountNumber;
	private Double balance;
	public String getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}
	public Double getBalance() {
		return balance;
	}
	public void setBalance(Double balance) {
		this.balance = balance;
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("BalanceAndAccountNumberDTO [accountNumber=").append(accountNumber).append(", balance=")
				.append(balance).append("]");
		return builder.toString();
	}
	
	
}
