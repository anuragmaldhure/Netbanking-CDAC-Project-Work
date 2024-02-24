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
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CustomerSideNavigationMenu from "../../components/CustomerSideNavigationMenu";
import CustomerTopNavigationBar from "../../components/CustomerTopNavigationBar";
import axios from "axios";

const KYCDetails12 = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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

  // New state to store image URLs
  const [imageUrls, setImageUrls] = useState({
    aadharCard: null,
    panCard: null,
    photo: null,
  });
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
          setImageUrls({
            aadharCard: URL.createObjectURL(new Blob([aadharCard.data])),
            panCard: URL.createObjectURL(new Blob([panCard.data])),
            photo: URL.createObjectURL(new Blob([photo.data])),
          });
        } else {
          console.log("No files uploaded. Upload now!");
        }
      } catch (error) {
        console.error("Error fetching customer images:", error);
      }
    };

    fetchCustomerImages();
  }, []);

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/Customer/Account/1"
        ); // Replace 1 with the actual customer ID
        const customerData = response.data;

        setFormData({
          firstName: customerData.accountHolderFirstName || "",
          lastName: customerData.accountHolderLastName || "",
          occupation: customerData.occupation || "",
          annualIncome: customerData.annualIncome || "",
          birthdate: customerData.dateOfBirth || null,
          mobileNumber: customerData.mobileNumber || "",
          emailId: customerData.emailId || "",
        });
      } catch (error) {
        console.error("Error fetching customer details:", error);
      }
    };

    fetchCustomerDetails();
  }, []);

  const handleInputChange = (field, value) => {
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

  const handleSaveClick = () => {
    setIsEditing(false);
    console.log("Form data saved:", formData);
    // Add logic to save formData to the database using a POST request
    // You can use axios.post("/Account", formData) or your preferred method
  };

  const handleUploadClick = () => {
    // Placeholder for file upload logic
    console.log("File upload logic goes here");
    // Add logic to upload files to the server using a POST request
    // You can use axios.post("/UploadFiles", formData) or your preferred method
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

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Birthdate"
                        value={formData.birthdate}
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
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
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
                    {/* Display Images */}
                    <Stack spacing={1}>
                      <Typography variant="caption">
                        AADHAAR-CARD :
                        {formData.aadharCard && formData.aadharCard.name}
                      </Typography>
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
                        {imageUrls.aadharCard
                          ? "Show Image"
                          : "No file uploaded"}
                      </Button>
                    </Stack>

                    <Stack spacing={1}>
                      <Typography variant="caption">
                        PAN-CARD :{formData.panCard && formData.panCard.name}
                      </Typography>
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
                    </Stack>

                    <Stack spacing={1}>
                      <Typography variant="caption">
                        Profile Photo :{formData.photo && formData.photo.name}
                      </Typography>
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
                    </Stack>
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
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Button
                        variant="contained"
                        component="label"
                        disabled={!isEditing}
                      >
                        Upload AADHAAR-CARD
                        <input
                          type="file"
                          onChange={(e) =>
                            handleFileUpload("aadharCard", e.target.files[0])
                          }
                          hidden
                        />
                      </Button>
                    </div>
                    <Typography variant="caption">
                      {formData.aadharCard?.name}
                    </Typography>
                  </Stack>

                  <Stack spacing={1}>
                    <Typography variant="caption">
                      PAN-CARD: {formData.panCard && formData.panCard.name}
                    </Typography>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Button
                        variant="contained"
                        component="label"
                        disabled={!isEditing}
                      >
                        Upload PAN-CARD
                        <input
                          type="file"
                          onChange={(e) =>
                            handleFileUpload("panCard", e.target.files[0])
                          }
                          hidden
                        />
                      </Button>
                    </div>
                    <Typography variant="caption">
                      {formData.panCard?.name}
                    </Typography>
                  </Stack>

                  <Stack spacing={1}>
                    <Typography variant="caption">
                      PROFILE-PHOTO: {formData.photo && formData.photo.name}
                    </Typography>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Button
                        variant="contained"
                        component="label"
                        disabled={!isEditing}
                      >
                        Upload PROFILE-PHOTO
                        <input
                          type="file"
                          onChange={(e) =>
                            handleFileUpload("photo", e.target.files[0])
                          }
                          hidden
                        />
                      </Button>
                    </div>
                    <Typography variant="caption">
                      {formData.photo?.name}
                    </Typography>
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
