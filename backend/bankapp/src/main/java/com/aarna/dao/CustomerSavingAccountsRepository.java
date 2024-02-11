package com.aarna.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.aarna.entity.CustomerSavingAccounts;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface CustomerSavingAccountsRepository extends JpaRepository<CustomerSavingAccounts, Long> {

    // Basic Queries

    List<CustomerSavingAccounts> findByCustomerDetails_CustomerID(Long customerID);

    Optional<CustomerSavingAccounts> findByAccountNumber(Long accountNumber);

    List<CustomerSavingAccounts> findByAccountType(String accountType);

    List<CustomerSavingAccounts> findByBalanceGreaterThan(BigDecimal balance);

    List<CustomerSavingAccounts> findByNomineeFirstName(String nomineeFirstName);

    List<CustomerSavingAccounts> findByNomineeLastName(String nomineeLastName);

    List<CustomerSavingAccounts> findByNomineeDateOfBirthBefore(Date nomineeDateOfBirth);

    List<CustomerSavingAccounts> findByNomineePANNumber(String nomineePANNumber);

    List<CustomerSavingAccounts> findByAccountOpeningDateAfter(Date accountOpeningDate);

    // Updates

    @Modifying
    @Query("UPDATE CustomerSavingAccounts c SET c.balance = :newBalance WHERE c.accountNumber = :accountNumber")
    int updateBalance(Long accountNumber, BigDecimal newBalance);

    // Deletes

    void deleteByAccountNumber(Long accountNumber);

    @Modifying
    @Query("DELETE FROM CustomerSavingAccounts c WHERE c.customerDetails.customerID = :customerID")
    void deleteByCustomerId(Long customerID);

    // Custom Queries

    @Query("SELECT c FROM CustomerSavingAccounts c WHERE c.customerDetails.emailID = :emailID")
    List<CustomerSavingAccounts> findByCustomerEmail(String emailID);

    @Query("SELECT c FROM CustomerSavingAccounts c WHERE c.customerDetails.mobileNumber = :mobileNumber")
    List<CustomerSavingAccounts> findByCustomerMobileNumber(String mobileNumber);

    @Query("SELECT c FROM CustomerSavingAccounts c WHERE c.beneficiary.beneficiaryID = :beneficiaryID")
    List<CustomerSavingAccounts> findByBeneficiaryId(Long beneficiaryID);

    @Query("SELECT c FROM CustomerSavingAccounts c WHERE c.transactionID = :transactionID")
    List<CustomerSavingAccounts> findByTransactionID(Integer transactionID);
}
