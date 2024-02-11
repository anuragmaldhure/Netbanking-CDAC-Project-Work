package com.aarna.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.aarna.pojos.CustomerDetails;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface CustomerDetailsRepository extends JpaRepository<CustomerDetails, Long> {

    // Basic Queries

    Optional<CustomerDetails> findByEmailID(String emailID);

    List<CustomerDetails> findByMobileNumber(String mobileNumber);

    List<CustomerDetails> findByNationality(String nationality);

    List<CustomerDetails> findByCity(String city);

    List<CustomerDetails> findByKycStatus(String kycStatus);

    List<CustomerDetails> findByGender(String gender);

    List<CustomerDetails> findCustomersBornAfterDate(String birthDate);

    List<CustomerDetails> findByOffer(String offer);

    Optional<CustomerDetails> findByPanNumber(String panNumber);

    Optional<CustomerDetails> findByAadhaarNumber(String aadhaarNumber);

    // Updates

    @Modifying
    @Query("UPDATE CustomerDetails c SET c.lastLogin = :lastLogin WHERE c.customerID = :customerID")
    int updateLastLogin(Long customerID, Date lastLogin);

    @Modifying
    @Query("UPDATE CustomerDetails c SET c.password = :newPassword WHERE c.customerID = :customerID")
    int updatePassword(Long customerID, String newPassword);

    // Deletes

    void deleteByCustomerID(Long customerID);

    @Modifying
    @Query("DELETE FROM CustomerDetails c WHERE c.emailID = :emailID")
    void deleteByEmailID(String emailID);

    @Modifying
    @Query("DELETE FROM CustomerDetails c WHERE c.mobileNumber = :mobileNumber")
    void deleteByMobileNumber(String mobileNumber);

    @Modifying
    @Query("DELETE FROM CustomerDetails c WHERE c.panNumber = :panNumber")
    void deleteByPanNumber(String panNumber);

    @Modifying
    @Query("DELETE FROM CustomerDetails c WHERE c.aadhaarNumber = :aadhaarNumber")
    void deleteByAadhaarNumber(String aadhaarNumber);
}

