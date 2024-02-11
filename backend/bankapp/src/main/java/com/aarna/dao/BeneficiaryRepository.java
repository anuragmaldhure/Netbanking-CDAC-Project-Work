package com.aarna.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.aarna.entity.Beneficiary;

import java.util.List;
import java.util.Optional;

@Repository
public interface BeneficiaryRepository extends JpaRepository<Beneficiary, Long> {

    // Basic Queries

    Optional<Beneficiary> findByBeneficiaryID(Long beneficiaryID);

    List<Beneficiary> findByBeneficiaryNickname(String beneficiaryNickname);

    List<Beneficiary> findByBeneficiaryFirstName(String beneficiaryFirstName);

    List<Beneficiary> findByBeneficiaryLastName(String beneficiaryLastName);

    List<Beneficiary> findByBeneficiaryAccountNumber(Integer beneficiaryAccountNumber);

    // Updates

    @Modifying
    @Query("UPDATE Beneficiary b SET b.beneficiaryNickname = :newNickname WHERE b.beneficiaryID = :beneficiaryID")
    int updateBeneficiaryNickname(Long beneficiaryID, String newNickname);

    // Deletes

    void deleteByBeneficiaryID(Long beneficiaryID);

    @Modifying
    @Query("DELETE FROM Beneficiary b WHERE b.beneficiaryAccountNumber = :accountNumber")
    void deleteByAccountNumber(Integer accountNumber);

    // Custom Queries

    @Query("SELECT b FROM Beneficiary b WHERE b.beneficiaryFirstName = :firstName AND b.beneficiaryLastName = :lastName")
    List<Beneficiary> findByFullName(String firstName, String lastName);

    @Query("SELECT b FROM Beneficiary b WHERE b.beneficiaryAccountNumber = :accountNumber")
    List<Beneficiary> findByAccountNumber(Integer accountNumber);

    @Query("SELECT b FROM Beneficiary b WHERE b.beneficiaryNickname LIKE %:keyword%")
    List<Beneficiary> searchByKeyword(String keyword);
}
