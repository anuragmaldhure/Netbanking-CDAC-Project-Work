package com.app.entities;
import javax.persistence.*;

@Entity
@Table(name = "customer_documents")
public class CustomerDocuments {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "document_no")
    private Long documentNo;

    @Column(name = "customer_photo_image_path")
    private String customerPhotoImagePath;

    @Lob
    @Column(name = "customer_photo")
    private byte[] customerPhoto;

    @Column(name = "pan_card_photo_image_path")
    private String panCardPhotoImagePath;

    @Lob
    @Column(name = "pan_card_photo")
    private byte[] panCardPhoto;

    @Column(name = "aadhar_card_photo_image_path")
    private String aadharCardPhotoImagePath;

    @Lob
    @Column(name = "aadhar_card_photo")
    private byte[] aadharCardPhoto;

    @OneToOne
    @JoinColumn(name = "customer_id")
    private CustomerDetails customerDetails;

    // Getters and Setters

    public Long getDocumentNo() {
        return documentNo;
    }

    public void setDocumentNo(Long documentNo) {
        this.documentNo = documentNo;
    }

    public String getCustomerPhotoImagePath() {
        return customerPhotoImagePath;
    }

    public void setCustomerPhotoImagePath(String customerPhotoImagePath) {
        this.customerPhotoImagePath = customerPhotoImagePath;
    }

    public byte[] getCustomerPhoto() {
        return customerPhoto;
    }

    public void setCustomerPhoto(byte[] customerPhoto) {
        this.customerPhoto = customerPhoto;
    }

    public String getPanCardPhotoImagePath() {
        return panCardPhotoImagePath;
    }

    public void setPanCardPhotoImagePath(String panCardPhotoImagePath) {
        this.panCardPhotoImagePath = panCardPhotoImagePath;
    }

    public byte[] getPanCardPhoto() {
        return panCardPhoto;
    }

    public void setPanCardPhoto(byte[] panCardPhoto) {
        this.panCardPhoto = panCardPhoto;
    }

    public String getAadharCardPhotoImagePath() {
        return aadharCardPhotoImagePath;
    }

    public void setAadharCardPhotoImagePath(String aadharCardPhotoImagePath) {
        this.aadharCardPhotoImagePath = aadharCardPhotoImagePath;
    }

    public byte[] getAadharCardPhoto() {
        return aadharCardPhoto;
    }

    public void setAadharCardPhoto(byte[] aadharCardPhoto) {
        this.aadharCardPhoto = aadharCardPhoto;
    }

    public CustomerDetails getCustomerDetails() {
        return customerDetails;
    }

    public void setCustomerDetails(CustomerDetails customerDetails) {
        this.customerDetails = customerDetails;
    }
}

