package com.app.dto.customer;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.OneToOne;

import com.app.entities.CustomerDetails;

public class CustomerDocumentsDTO {
    private Long documentNo;
    private String panCardPhotoImagePath;
    private byte[] panCardPhoto;
    private String aadharCardPhotoImagePath;
    private byte[] aadharCardPhoto;
	public Long getDocumentNo() {
		return documentNo;
	}
	public void setDocumentNo(Long documentNo) {
		this.documentNo = documentNo;
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
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("CustomerDocumentsDTO [documentNo=").append(documentNo).append(", panCardPhotoImagePath=")
				.append(panCardPhotoImagePath).append(", panCardPhoto=").append(Arrays.toString(panCardPhoto))
				.append(", aadharCardPhotoImagePath=").append(aadharCardPhotoImagePath).append(", aadharCardPhoto=")
				.append(Arrays.toString(aadharCardPhoto)).append("]");
		return builder.toString();
	}
    

}
