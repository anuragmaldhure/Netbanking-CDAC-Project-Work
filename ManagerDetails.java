package com.app.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "Manager")
public class ManagerDetails extends User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Manager_Id")
    private Long managerId;
    
    //Role_ENUM
	@Enumerated(EnumType.STRING) // varchar
	@Column(length = 20)
	private Role role;

	@Column(name = "Manager_First_Name")
    private String managerFirstName;

    @Column(name = "Manager_Last_Name")
    private String managerLastName;

   
    @Column(name = "Manager_Creation_Timestamp", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date managerCreationTimestamp;
    
    
    public ManagerDetails(Long managerId, Role role, String managerFirstName, String managerLastName, String username,
			String password, Date managerCreationTimestamp) {
		super();
		System.out.println("Inside parameterized ctor of ManagerDetails entity");
		this.managerId = managerId;
		this.role = role;
		this.managerFirstName = managerFirstName;
		this.managerLastName = managerLastName;
		this.username = username;
		this.password = password;
		this.managerCreationTimestamp = managerCreationTimestamp;
	}
    
    public ManagerDetails() {
		super();
		//System.out.println("Inside parameterless ctor of ManagerDetails entity");
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

    public Long getManagerId() {
        return managerId;
    }

    public void setManagerId(Long managerId) {
        this.managerId = managerId;
    }

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


    public Date getManagerCreationTimestamp() {
        return managerCreationTimestamp;
    }

    public void setManagerCreationTimestamp(Date managerCreationTimestamp) {
        this.managerCreationTimestamp = managerCreationTimestamp;
    }

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("ManagerDetails [managerId=").append(managerId).append(", role=").append(role)
				.append(", managerFirstName=").append(managerFirstName).append(", managerLastName=")
				.append(managerLastName).append(", username=").append(username).append(", password=").append(password)
				.append(", managerCreationTimestamp=").append(managerCreationTimestamp).append("]");
		return builder.toString();
	}
}
