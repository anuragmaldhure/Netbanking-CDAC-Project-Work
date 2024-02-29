package com.app.dto;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.validator.constraints.Length;

//@Getter
//@Setter
//@ToString
public class SigninRequest {
	
    private String username;
    
    @Length(min = 3, max = 20, message = "Invalid password length (Should be between 3 - 20)")
    private String password;

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
        final StringBuilder sb = new StringBuilder("SigninRequest [");
        sb.append("username='").append(username);
        sb.append(", password='").append(password);
        sb.append('}');
        return sb.toString();
    }
}
