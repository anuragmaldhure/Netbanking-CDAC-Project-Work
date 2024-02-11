package com.aarna.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.aarna.pojos.Offers;

import java.util.List;
import java.util.Optional;

@Repository
public interface OffersRepository extends JpaRepository<Offers, Long> {

    // Basic Queries

    Optional<Offers> findByOfferID(Long offerID);

    List<Offers> findByOfferSource(String offerSource);

    List<Offers> findByOfferDetails(String offerDetails);

    List<Offers> findByOfferAvailability(String offerAvailability);

    // Updates

    @Modifying
    @Query("UPDATE Offers o SET o.offerDetails = :newDetails WHERE o.offerID = :offerID")
    int updateOfferDetails(Long offerID, String newDetails);

    // Deletes

    void deleteByOfferID(Long offerID);

    @Modifying
    @Query("DELETE FROM Offers o WHERE o.offerSource = :offerSource")
    void deleteByOfferSource(String offerSource);

    // Custom Queries

    @Query("SELECT o FROM Offers o WHERE o.offerSource = :offerSource AND o.offerAvailability = :availability")
    List<Offers> findBySourceAndAvailability(String offerSource, String availability);

    @Query("SELECT o FROM Offers o WHERE o.offerDetails LIKE %:keyword%")
    List<Offers> searchByKeyword(String keyword);
}
