package com.app.entities;

import javax.persistence.Column;

public class UserEntity extends BaseEntity {
	 @Column(name = "username", unique = true)
	    private String username;

	    @Column(name = "password")
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


		public Object getRole() {
			return this.getRole();
		}

}
