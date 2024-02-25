package com.app.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;


@NoArgsConstructor
@Getter
@Setter
public class CustomUserDetails implements UserDetails {

    private CustomerDetails customerDetails;
    private BankEmployeeDetails bankEmployeeDetails;
    private ManagerDetails managerDetails;

    // Constructors based on the user type
    public CustomUserDetails(CustomerDetails customerDetails) {
        this.customerDetails = customerDetails;
    }

    public CustomUserDetails(BankEmployeeDetails bankEmployeeDetails) {
        this.bankEmployeeDetails = bankEmployeeDetails;
    }

    public CustomUserDetails(ManagerDetails managerDetails) {
        this.managerDetails = managerDetails;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (customerDetails != null) {
            return Collections.singletonList(new SimpleGrantedAuthority("CUSTOMER"));
        } else if (bankEmployeeDetails != null) {
            return Collections.singletonList(new SimpleGrantedAuthority("EMPLOYEE"));
        } else if (managerDetails != null) {
            return Collections.singletonList(new SimpleGrantedAuthority("MANAGER"));
        }
        return Collections.emptyList();
    }

    @Override
    public String getPassword() {
        if (customerDetails != null) {
            return customerDetails.getPassword();
        } else if (bankEmployeeDetails != null) {
            return bankEmployeeDetails.getPassword();
        } else if (managerDetails != null) {
            return managerDetails.getPassword();
        }
        return ""; // Return empty string if no user type is specified
    }

    @Override
    public String getUsername() {
        if (customerDetails != null) {
            return customerDetails.getUsername();
        } else if (bankEmployeeDetails != null) {
            return bankEmployeeDetails.getUsername();
        } else if (managerDetails != null) {
            return managerDetails.getUsername();
        }
        return null; // Return null if no user type is specified
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
    
}

