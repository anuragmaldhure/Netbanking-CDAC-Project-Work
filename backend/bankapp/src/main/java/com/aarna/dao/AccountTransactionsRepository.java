package com.aarna.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.aarna.entity.AccountTransactions;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface AccountTransactionsRepository extends JpaRepository<AccountTransactions, Long> {

    // Basic Queries

    List<AccountTransactions> findByCustomerSavingAccounts_AccountNumber(Long accountNumber);

    Optional<AccountTransactions> findByTransactionID(Long transactionID);

    List<AccountTransactions> findByAccountType(String accountType);

    List<AccountTransactions> findByTransactionAmountGreaterThan(BigDecimal transactionAmount);

    List<AccountTransactions> findByTransactionType(String transactionType);

    List<AccountTransactions> findByTransactionDate(Date transactionDate);

    List<AccountTransactions> findByRecipientFirstName(String recipientFirstName);

    List<AccountTransactions> findByTransactionComment(String transactionComment);

    List<AccountTransactions> findByRecipientLastName(String recipientLastName);

    // Updates

    @Modifying
    @Query("UPDATE AccountTransactions a SET a.transactionAmount = :newAmount WHERE a.transactionID = :transactionID")
    int updateTransactionAmount(Long transactionID, BigDecimal newAmount);

    // Deletes

    void deleteByTransactionID(Long transactionID);

    @Modifying
    @Query("DELETE FROM AccountTransactions a WHERE a.customerSavingAccounts.accountNumber = :accountNumber")
    void deleteByAccountNumber(Long accountNumber);

    // Custom Queries

    @Query("SELECT a FROM AccountTransactions a WHERE a.customerSavingAccounts.customerDetails.emailID = :emailID")
    List<AccountTransactions> findByCustomerEmail(String emailID);

    @Query("SELECT a FROM AccountTransactions a WHERE a.customerSavingAccounts.customerDetails.mobileNumber = :mobileNumber")
    List<AccountTransactions> findByCustomerMobileNumber(String mobileNumber);

    @Query("SELECT a FROM AccountTransactions a WHERE a.customerSavingAccounts.beneficiary.beneficiaryID = :beneficiaryID")
    List<AccountTransactions> findByBeneficiaryId(Long beneficiaryID);

    @Query("SELECT a FROM AccountTransactions a WHERE a.recipientAccountNumber = :recipientAccountNumber")
    List<AccountTransactions> findByRecipientAccountNumber(Integer recipientAccountNumber);
}
