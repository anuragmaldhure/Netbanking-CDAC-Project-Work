package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Offers")
public class Offers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Offer_ID")
    private Long offerId;

    @Column(name = "Offer_Title", nullable = false)
    private String offerTitle;

    @Column(name = "Offer_Details", nullable = false)
    private String offerDetails;

    @Column(name = "Offer_Availability", nullable = false)
    private Boolean offerAvailability;

    @Column(name = "Offer_Minimum_Balance", nullable = false)
    private Double offerMinimumBalance;

    // Add getters and setters here

    public Long getOfferId() {
        return offerId;
    }

    public void setOfferId(Long offerId) {
        this.offerId = offerId;
    }

    public String getOfferTitle() {
        return offerTitle;
    }

    public void setOfferTitle(String offerTitle) {
        this.offerTitle = offerTitle;
    }

    public String getOfferDetails() {
        return offerDetails;
    }

    public void setOfferDetails(String offerDetails) {
        this.offerDetails = offerDetails;
    }

    public boolean isOfferAvailability() {
        return offerAvailability;
    }

    public void setOfferAvailability(Boolean offerAvailability) {
        this.offerAvailability = offerAvailability;
    }

    public Double getOfferMinimumBalance() {
        return offerMinimumBalance;
    }

    public void setOfferMinimumBalance(Double offerMinimumBalance) {
        this.offerMinimumBalance = offerMinimumBalance;
    }

}
