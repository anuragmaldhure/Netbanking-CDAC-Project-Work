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
import { Edit as EditIcon, Save as SaveIcon, CloudUpload as CloudUploadIcon } from "@mui/icons-material";
import dayjs from "dayjs";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import CustomerTopNavigationBar from "../../../components/CustomerTopNavigationBar";
import CustomerSideNavigationMenu from "../../../components/CustomerSideNavigationMenu";

const KYCDetails12 = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);
  const notify = (message) => toast.success(message);

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
    birthdate: dayjs().format("YYYY-MM-DD"),
  });

  const [imageUrls, setImageUrls] = useState({
    aadhar: null,
    pan: null,
    photo: null,
  });

  useEffect(() => {
    fetchCustomerImages();
    fetchCustomerDetails();
  }, []);

  const fetchCustomerDetails = async () => {
    try {
      const [personalDetailsResponse, addressResponse] = await Promise.all([
        axios.get("http://localhost:8080/Customer/Account/1"),
        axios.get("http://localhost:8080/Customer/KYC/address/1"),
      ]);

      const { data: personalDetails } = personalDetailsResponse;
      const { data: addressDetails } = addressResponse;

      setImageUrls({
        aadhar: addressDetails.aadharImageURL || null,
        pan: addressDetails.panImageURL || null,
        photo: addressDetails.photoImageURL || null,
      });

      setFormData({
        firstName: personalDetails.accountHolderFirstName || "",
        lastName: personalDetails.accountHolderLastName || "",
        occupation: personalDetails.occupation || "",
        annualIncome: personalDetails.annualIncome || "",
        birthdate: personalDetails.dateOfBirth ? dayjs(personalDetails.dateOfBirth).format("YYYY-MM-DD") : dayjs().format("YYYY-MM-DD"),
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

  const fetchCustomerImages = async () => {
    try {
      const [aadhar, pan, photo] = await Promise.all([
        axios.get("http://localhost:8080/Customer/documents/aadhar/1", { responseType: "arraybuffer" }),
        axios.get("http://localhost:8080/Customer/documents/pan/1", { responseType: "arraybuffer" }),
        axios.get("http://localhost:8080/Customer/documents/photo/1", { responseType: "arraybuffer" }),
      ]);

      if (aadhar.data && pan.data && photo.data) {
        const [aadharUrl, panUrl, photoUrl] = [URL.createObjectURL(new Blob([aadhar.data])), URL.createObjectURL(new Blob([pan.data])), URL.createObjectURL(new Blob([photo.data]))];

        setImageRefs(aadharUrl, panUrl, photoUrl);

        setImageUrls({
          aadhar: aadharUrl,
          pan: panUrl,
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

  const setImageRefs = (aadharUrl, panUrl, photoUrl) => {
    const imageRefs = {
      aadhar: new Image(),
      pan: new Image(),
      photo: new Image(),
    };

    imageRefs.aadhar.src = aadharUrl;
    imageRefs.pan.src = panUrl;
    imageRefs.photo.src = photoUrl;

    imageRefs.photo.onload = () => setImageLoading(false);
  };

  const handleInputChange = (field, value) => setFormData((prevData) => ({ ...prevData, [field]: value }));

  const handleFileUpload = (field, file) => setFormData((prevData) => ({ ...prevData, [field]: file }));

  const handleEditClick = (e) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleSaveClick = async (e) => {
    e.stopPropagation();
    setIsEditing(false);
    console.log("Form data saved:", formData);

    try {
      await axios.put("http://localhost:8080/Customer/KYC/address/1", {
        address: formData.address,
        city: formData.city,
        state: formData.state,
        pinCode: formData.pincode,
        nationality: formData.nationality,
      });

      await axios.put("http://localhost:8080/Customer/KYC/CustomerEssentialData/1", {
        occupation: formData.occupation,
        annualIncome: formData.annualIncome,
        dateOfBirth: dayjs(formData.birthdate).format("YYYY-MM-DD"),
        gender: formData.gender,
      });

      const successMessage = "Data saved successfully";
      console.log(successMessage);
      notify(successMessage);

      await fetchCustomerDetails();
      await fetchCustomerImages();
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleUploadClick = async () => {
    if (isEditing) {
      try {
        const formDataArray = [new FormData(), new FormData(), new FormData()];

        formDataArray[0].append("imageFile", formData.aadhar);
        formDataArray[1].append("imageFile", formData.pan);
        formDataArray[2].append("imageFile", formData.photo);

        const uploadPromises = formDataArray.map(async (formData, index) => {
          const fileType = ["aadhar", "pan", "photo"][index];
          await axios.put(`http://localhost:8080/Customer/documents/${fileType}/1`, formData);
        });

        await Promise.all(uploadPromises);

        const successMessage = "All files uploaded successfully";
        console.log(successMessage);
        notify(successMessage);

        await fetchCustomerDetails();
        await fetchCustomerImages();
      } catch (error) {
        console.error("Error uploading files:", error);
      }
    }
  };

  const handleUploadClicked = async (fileType) => {
    if (isEditing) {
      try {
        const formDataFile = new FormData();
        formDataFile.append("imageFile", formData[fileType]);

        await axios.put(`http://localhost:8080/Customer/documents/${fileType}/1`, formDataFile);

        const successMessage = `${fileType.toUpperCase()} uploaded successfully`;
        console.log(successMessage);
        notify(successMessage);

        await fetchCustomerDetails();
        await fetchCustomerImages();
      } catch (error) {
        console.error(`Error uploading ${fileType} file:`, error);
      }
    }
  };

  const openDialog = (image) => {
    setSelectedImage(image);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setSelectedImage(null);
    setIsDialogOpen(false);
  };

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
                    {[
                      ["firstName", "First Name"],
                      ["lastName", "Last Name"],
                      ["occupation", "Occupation"],
                      ["annualIncome", "Annual Income"],
                      ["birthdate", "Birthdate (YYYY-MM-DD)", "text", formData.birthdate],
                      ["mobileNumber", "Mobile Number"],
                      ["emailId", "Email ID"],
                      ["address", "Address"],
                      ["city", "City"],
                      ["state", "State"],
                      ["pincode", "Pincode"],
                      ["nationality", "Nationality"],
                    ].map(([field, label, type = "text", value]) => (
                      <TextField
                        key={field}
                        label={label}
                        fullWidth
                        value={value || formData[field] || ""}
                        onChange={(e) => handleInputChange(field, e.target.value)}
                        disabled={!isEditing}
                        variant="outlined"
                        margin="normal"
                        type={type}
                      />
                    ))}
                    <FormControl fullWidth variant="outlined" margin="normal">
                      <InputLabel htmlFor="gender">Gender</InputLabel>
                      <Select
                        label="Gender"
                        id="gender"
                        value={formData.gender || ""}
                        onChange={(e) => handleInputChange("gender", e.target.value)}
                        disabled={!isEditing}
                      >
                        {["Male", "Female", "Other"].map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Stack>
                </Grid>

                <Grid item xs={12} md={6}>
                  {["aadhar", "pan", "photo"].map((fileType) => (
                    <Stack spacing={1} key={fileType}>
                      <Typography variant="caption">
                        {`${fileType.toUpperCase()}: ${formData[fileType]?.name || ""}`}
                      </Typography>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(fileType, e.target.files[0])}
                        disabled={!isEditing}
                      />
                      <Button
                        onClick={() => openDialog(imageUrls[fileType])}
                        variant="contained"
                        color="primary"
                        sx={{
                          backgroundColor: "#4CAF50",
                          color: "white",
                          "&:hover": { backgroundColor: "#45a049" },
                        }}
                      >
                        {imageUrls[fileType] ? "Show Image" : "No file uploaded"}
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleUploadClicked(fileType)}
                        sx={{ marginTop: 1 }}
                        disabled={!isEditing}
                      >
                        Upload {fileType.toUpperCase()}
                      </Button>
                    </Stack>
                  ))}
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
                        Upload All
                      </Button>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Box>
      </div>

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
    </div>
  );
};

export default KYCDetails12;
