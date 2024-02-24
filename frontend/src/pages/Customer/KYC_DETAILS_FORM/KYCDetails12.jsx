import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Paper,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  Edit as EditIcon,
  Save as SaveIcon,
  CloudUpload as CloudUploadIcon,
} from "@mui/icons-material";
import dayjs from "dayjs";
import { useRef } from "react";

import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import axios from "axios";
import CustomerTopNavigationBar from "../../../components/CustomerTopNavigationBar";
import CustomerSideNavigationMenu from "../../../components/CustomerSideNavigationMenu";

const KYCDetails12 = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(true); // New state for image loading

  const imageRefs = useRef({
    aadharCard: null,
    panCard: null,
    photo: null,
  });


  const openDialog = (image) => {
    setSelectedImage(image);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setSelectedImage(null);
    setIsDialogOpen(false);
  };

  const [formData, setFormData] = useState({
    firstName: null,
    lastName: null,
    occupation: null,
    annualIncome: null,
    mobileNumber: null,
    emailId: null,
    address: null,
    city: null,
    state: null,
    pincode: null,
    nationality: null,
    gender: "Male",
    aadharCard: null,
    panCard: null,
    photo: null,
    birthdate: dayjs(),
  });

  const [imageUrls, setImageUrls] = useState({
    aadharCard: null,
    panCard: null,
    photo: null,
  });

  const fetchCustomerDetails = async () => {
    try {
      const personalDetailsResponse = await axios.get(
        "http://localhost:8080/Customer/Account/1"
      );
      const personalDetails = personalDetailsResponse.data;

      const addressResponse = await axios.get(
        "http://localhost:8080/Customer/KYC/address/1"
      );
      const addressDetails = addressResponse.data;

      setImageUrls({
        aadharCard: addressDetails.aadharCardImageURL || null,
        panCard: addressDetails.panCardImageURL || null,
        photo: addressDetails.photoImageURL || null,
      });

      setFormData({
        firstName: personalDetails.accountHolderFirstName || "",
        lastName: personalDetails.accountHolderLastName || "",
        occupation: personalDetails.occupation || "",
        annualIncome: personalDetails.annualIncome || "",
        birthdate: personalDetails.dateOfBirth || null,
        mobileNumber: personalDetails.mobileNumber || "",
        emailId: personalDetails.emailId || "",
        address: addressDetails.address || "",
        city: addressDetails.city || "",
        state: addressDetails.state || "",
        pincode: addressDetails.pinCode || "",
        nationality: addressDetails.nationality || "",
        gender: personalDetails.gender || "Male",
      });
    } catch (error) {
      console.error("Error fetching customer details:", error);
    }
  };

  useEffect(() => {
    fetchCustomerDetails();
  }, []);

  const handleInputChange = (field, value) => {
    if (field === "birthdate") {
      value = value ? moment(value) : null;
    }

    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleFileUpload = (field, file) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: file,
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    setIsEditing(false);
    console.log("Form data saved:", formData);

    try {
      await axios.put("http://localhost:8080/Customer/Account/1", formData);
      await handleUploadClick();
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleUploadClick = async () => {
    if (isEditing) {
      try {
        const formDataAadhar = new FormData();
        const formDataPan = new FormData();
        const formDataPhoto = new FormData();

        formDataAadhar.append("imageFile", formData.aadharCard);
        formDataPan.append("imageFile", formData.panCard);
        formDataPhoto.append("imageFile", formData.photo);

        await axios.put(
          "http://localhost:8080/Customer/documents/aadhar/1",
          formDataAadhar
        );
        await axios.put(
          "http://localhost:8080/Customer/documents/pan/1",
          formDataPan
        );
        await axios.put(
          "http://localhost:8080/Customer/documents/photo/1",
          formDataPhoto
        );

        await fetchCustomerDetails();
      } catch (error) {
        console.error("Error uploading files:", error);
      }
    }
  };
  // Inside the useEffect for fetching customer images
  useEffect(() => {
    const fetchCustomerImages = async () => {
      try {
        const [aadharCard, panCard, photo] = await Promise.all([
          axios.get("http://localhost:8080/Customer/documents/aadhar/1", {
            responseType: "arraybuffer",
          }),
          axios.get("http://localhost:8080/Customer/documents/pan/1", {
            responseType: "arraybuffer",
          }),
          axios.get("http://localhost:8080/Customer/documents/photo/1", {
            responseType: "arraybuffer",
          }),
        ]);

        if (aadharCard.data && panCard.data && photo.data) {
          const aadharCardUrl = URL.createObjectURL(new Blob([aadharCard.data]));
          const panCardUrl = URL.createObjectURL(new Blob([panCard.data]));
          const photoUrl = URL.createObjectURL(new Blob([photo.data]));

          imageRefs.current = {
            aadharCard: new Image(),
            panCard: new Image(),
            photo: new Image(),
          };

          imageRefs.current.aadharCard.src = aadharCardUrl;
          imageRefs.current.panCard.src = panCardUrl;
          imageRefs.current.photo.src = photoUrl;

          // Set the loading indicator to false when all images are loaded
          imageRefs.current.photo.onload = () => setImageLoading(false);

          setImageUrls({
            aadharCard: aadharCardUrl,
            panCard: panCardUrl,
            photo: photoUrl,
          });

          setSelectedImage(photoUrl);
        } else {
          console.log("No files uploaded. Upload now!");
        }
      } catch (error) {
        console.error("Error fetching customer images:", error);
      }
    };

    fetchCustomerImages();
  }, []);

  return (
    <div>
      <CustomerTopNavigationBar />
      <div style={{ display: "flex" }}>
        <CustomerSideNavigationMenu />

        <Box m="15px" width="100%">
          <Typography variant="h4" gutterBottom>
            KYC Details
          </Typography>

          <Paper elevation={3} sx={{ padding: "20px" }}>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
                    <TextField
                      label="First Name"
                      fullWidth
                      value={formData.firstName || ""}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      disabled={!isEditing}
                      variant="outlined"
                      margin="normal"
                    />

                    <TextField
                      label="Last Name"
                      fullWidth
                      value={formData.lastName || ""}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      disabled={!isEditing}
                      variant="outlined"
                      margin="normal"
                    />

                    <TextField
                      label="Occupation"
                      fullWidth
                      value={formData.occupation || ""}
                      onChange={(e) =>
                        handleInputChange("occupation", e.target.value)
                      }
                      disabled={!isEditing}
                      variant="outlined"
                      margin="normal"
                    />

                    <TextField
                      label="Annual Income"
                      fullWidth
                      value={formData.annualIncome || ""}
                      onChange={(e) =>
                        handleInputChange("annualIncome", e.target.value)
                      }
                      disabled={!isEditing}
                      variant="outlined"
                      margin="normal"
                    />

                    <LocalizationProvider dateAdapter={AdapterMoment}>
                      <DatePicker
                        label="Birthdate"
                        value={
                          formData.birthdate ? moment(formData.birthdate) : null
                        }
                        onChange={(date) =>
                          handleInputChange("birthdate", date)
                        }
                        TextFieldComponent={(props) => (
                          <TextField
                            {...props}
                            fullWidth
                            variant="outlined"
                            margin="normal"
                          />
                        )}
                        disabled={!isEditing}
                      />
                    </LocalizationProvider>

                    <TextField
                      label="Mobile Number"
                      fullWidth
                      value={formData.mobileNumber || ""}
                      onChange={(e) =>
                        handleInputChange("mobileNumber", e.target.value)
                      }
                      disabled={!isEditing}
                      variant="outlined"
                      margin="normal"
                    />

                    <TextField
                      label="Email ID"
                      fullWidth
                      value={formData.emailId || ""}
                      onChange={(e) =>
                        handleInputChange("emailId", e.target.value)
                      }
                      disabled={!isEditing}
                      variant="outlined"
                      margin="normal"
                    />

                    <TextField
                      label="Address"
                      fullWidth
                      value={formData.address || ""}
                      onChange={(e) =>
                        handleInputChange("address", e.target.value)
                      }
                      disabled={!isEditing}
                      variant="outlined"
                      margin="normal"
                    />

                    <TextField
                      label="City"
                      fullWidth
                      value={formData.city || ""}
                      onChange={(e) =>
                        handleInputChange("city", e.target.value)
                      }
                      disabled={!isEditing}
                      variant="outlined"
                      margin="normal"
                    />

                    <TextField
                      label="State"
                      fullWidth
                      value={formData.state || ""}
                      onChange={(e) =>
                        handleInputChange("state", e.target.value)
                      }
                      disabled={!isEditing}
                      variant="outlined"
                      margin="normal"
                    />

                    <TextField
                      label="Pincode"
                      fullWidth
                      value={formData.pincode || ""}
                      onChange={(e) =>
                        handleInputChange("pincode", e.target.value)
                      }
                      disabled={!isEditing}
                      variant="outlined"
                      margin="normal"
                    />

                    <TextField
                      label="Nationality"
                      fullWidth
                      value={formData.nationality || ""}
                      onChange={(e) =>
                        handleInputChange("nationality", e.target.value)
                      }
                      disabled={!isEditing}
                      variant="outlined"
                      margin="normal"
                    />
                    <FormControl fullWidth variant="outlined" margin="normal">
                      <InputLabel htmlFor="gender">Gender</InputLabel>
                      <Select
                        label="Gender"
                        id="gender"
                        value={formData.gender || ""}
                        onChange={(e) =>
                          handleInputChange("gender", e.target.value)
                        }
                        disabled={!isEditing}
                      >
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>
                </Grid>

                {/* Dialog for displaying the image */}
                <Dialog open={isDialogOpen} onClose={closeDialog}>
                  <DialogTitle>Uploaded Image</DialogTitle>
                  <DialogContent>
                    {selectedImage && (
                      <img
                        src={selectedImage}
                        alt="Uploaded Img"
                        style={{ maxWidth: "100%" }}
                      />
                    )}
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={closeDialog} color="primary">
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
                {/* File Upload Fields */}
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <Typography variant="caption">
                      AADHAAR-CARD:{" "}
                      {formData.aadharCard && formData.aadharCard.name}
                    </Typography>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileUpload("aadharCard", e.target.files[0])
                      }
                      disabled={!isEditing}
                    />
                    <Button
                      onClick={() => openDialog(imageUrls.aadharCard)}
                      variant="contained"
                      color="primary"
                      sx={{
                        backgroundColor: "#4CAF50",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "#45a049",
                        },
                      }}
                    >
                      {imageUrls.aadharCard ? "Show Image" : "No file uploaded"}
                    </Button>

                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleUploadClick("aadharCard")}
                      sx={{ marginTop: 1 }}
                      disabled={!isEditing}
                    >
                      Upload AADHAAR-CARD
                    </Button>
                  </Stack>

                  <Stack spacing={1}>
                    <Typography variant="caption">
                      PAN-CARD: {formData.panCard && formData.panCard.name}
                    </Typography>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileUpload("panCard", e.target.files[0])
                      }
                      disabled={!isEditing}
                    />
                    <Button
                      onClick={() => openDialog(imageUrls.panCard)}
                      variant="contained"
                      color="primary"
                      sx={{
                        backgroundColor: "#4CAF50",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "#45a049",
                        },
                      }}
                    >
                      {imageUrls.panCard ? "Show Image" : "No file uploaded"}
                    </Button>

                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleUploadClick("panCard")}
                      sx={{ marginTop: 1 }}
                      disabled={!isEditing}
                    >
                      Upload PAN-CARD
                    </Button>
                  </Stack>

                  <Stack spacing={1}>
                    <Typography variant="caption">
                      PROFILE-PHOTO: {formData.photo && formData.photo.name}
                    </Typography>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileUpload("photo", e.target.files[0])
                      }
                      disabled={!isEditing}
                    />
                    <Button
                      onClick={() => openDialog(imageUrls.photo)}
                      variant="contained"
                      color="primary"
                      sx={{
                        backgroundColor: "#4CAF50",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "#45a049",
                        },
                      }}
                    >
                      {imageUrls.photo ? "Show Image" : "No file uploaded"}
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleUploadClick("photo")}
                      sx={{ marginTop: 1 }}
                      disabled={!isEditing}
                    >
                      Upload PROFILE-PHOTO
                    </Button>
                  </Stack>
                </Grid>

                <Grid item xs={12}>
                  <Box display="flex" justifyContent="flex-end" mt={3}>
                    <IconButton
                      onClick={isEditing ? handleSaveClick : handleEditClick}
                      color="primary"
                      sx={{ marginRight: 1 }}
                    >
                      {isEditing ? <SaveIcon /> : <EditIcon />}
                    </IconButton>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={isEditing ? handleSaveClick : handleEditClick}
                    >
                      {isEditing ? "Save" : "Edit"}
                    </Button>
                    {isEditing && (
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleUploadClick}
                        sx={{ marginLeft: 1 }}
                      >
                        <CloudUploadIcon />
                        Upload
                      </Button>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Box>
      </div>
    </div>
  );
};

export default KYCDetails12;
