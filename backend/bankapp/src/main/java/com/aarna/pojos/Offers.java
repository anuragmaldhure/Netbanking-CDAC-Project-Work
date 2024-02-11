package com.aarna.pojos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Offers")
public class Offers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long offerID;

    @Column(nullable = false)
    private String offerSource;

    @Column(nullable = false)
    private String offerDetails;

    @Column(nullable = false)
    private String offerAvailability;

    // Constructors

    public Offers() {
    }

    public Offers(String offerSource, String offerDetails, String offerAvailability) {
        this.offerSource = offerSource;
        this.offerDetails = offerDetails;
        this.offerAvailability = offerAvailability;
    }

    // Getters and Setters

    public Long getOfferID() {
        return offerID;
    }

    public void setOfferID(Long offerID) {
        this.offerID = offerID;
    }

    public String getOfferSource() {
        return offerSource;
    }

    public void setOfferSource(String offerSource) {
        this.offerSource = offerSource;
    }

    public String getOfferDetails() {
        return offerDetails;
    }

    public void setOfferDetails(String offerDetails) {
        this.offerDetails = offerDetails;
    }

    public String getOfferAvailability() {
        return offerAvailability;
    }

    public void setOfferAvailability(String offerAvailability) {
        this.offerAvailability = offerAvailability;
    }
}
