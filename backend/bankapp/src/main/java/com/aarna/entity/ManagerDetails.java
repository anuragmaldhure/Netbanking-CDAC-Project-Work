package com.aarna.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

import java.util.Date;

@Entity
@Table(name = "Manager")
public class ManagerDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Manager_Id")
    private Long managerId;

    @Column(name = "Manager_First_Name")
    private String managerFirstName;

    @Column(name = "Manager_Last_Name")
    private String managerLastName;

    @Column(name = "Username", unique = true, nullable = false)
    private String username;

    @Column(name = "Password", nullable = false)
    private String password;

    @Column(name = "Manager_Creation_Timestamp", nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date managerCreationTimestamp;

    // Add getters and setters here

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

    public Date getManagerCreationTimestamp() {
        return managerCreationTimestamp;
    }

    public void setManagerCreationTimestamp(Date managerCreationTimestamp) {
        this.managerCreationTimestamp = managerCreationTimestamp;
    }


}
