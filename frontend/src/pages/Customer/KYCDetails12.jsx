import React, { useState } from "react";
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
} from "@mui/material";
import { Edit as EditIcon, Save as SaveIcon } from "@mui/icons-material";
import dayjs from "dayjs"; // Import dayjs for date manipulation

import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import CustomerSideNavigationMenu from "../../components/CustomerSideNavigationMenu";
import CustomerTopNavigationBar from "../../components/CustomerTopNavigationBar";

const KYCDetails12 = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "John Doe",
    gender: "Male",
    aadharCard: null,
    panCard: null,
    photo: null,
    birthdate: dayjs(), // Initialize with the current date
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleFileUpload = (field, file) => {
    // Handle file upload logic here
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
    // You can handle saving the form data (including file uploads) here
    console.log("Form data saved:", formData);
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
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      disabled={!isEditing}
                      variant="outlined"
                      margin="normal"
                    />
                    <TextField
                      label="Last Name"
                      fullWidth
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      disabled={!isEditing}
                      variant="outlined"
                      margin="normal"
                    />
                    <TextField
                      label="Occupation"
                      fullWidth
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      disabled={!isEditing}
                      variant="outlined"
                      margin="normal"
                    />
                    <TextField
                      label="Annual Income"
                      fullWidth
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
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
                        renderInput={(params) => (
                          <TextField
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            {...params}
                          />
                        )}
                        disabled={!isEditing}
                      />
                    </LocalizationProvider>
                    <TextField
                      label="Mobile Number"
                      fullWidth
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      disabled={!isEditing}
                      variant="outlined"
                      margin="normal"
                    />
                    <TextField
                      label="Email ID"
                      fullWidth
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      disabled={!isEditing}
                      variant="outlined"
                      margin="normal"
                    />
                    <TextField
                      label="Address"
                      fullWidth
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      disabled={!isEditing}
                      variant="outlined"
                      margin="normal"
                    />
                    <TextField
                      label="City"
                      fullWidth
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      disabled={!isEditing}
                      variant="outlined"
                      margin="normal"
                    />
                    <TextField
                      label="State"
                      fullWidth
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      disabled={!isEditing}
                      variant="outlined"
                      margin="normal"
                    />
                    <TextField
                      label="Pincode"
                      fullWidth
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      disabled={!isEditing}
                      variant="outlined"
                      margin="normal"
                    />
                    <TextField
                      label="Nationality"
                      fullWidth
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
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
                        value={formData.gender}
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

                    {/* Upload Aadhar Card */}
                    <Stack spacing={1}>
                      <Typography variant="body2">Aadhar Card</Typography>
                      <input
                        type="file"
                        onChange={(e) =>
                          handleFileUpload("aadharCard", e.target.files[0])
                        }
                        disabled={!isEditing}
                      />
                      <Typography variant="caption">
                        {formData.aadharCard?.name}
                      </Typography>
                    </Stack>

                    {/* Upload PAN Card */}
                    <Stack spacing={1}>
                      <Typography variant="body2">PAN Card</Typography>
                      <input
                        type="file"
                        onChange={(e) =>
                          handleFileUpload("panCard", e.target.files[0])
                        }
                        disabled={!isEditing}
                      />
                      <Typography variant="caption">
                        {formData.panCard?.name}
                      </Typography>
                    </Stack>

                    {/* Upload Photo */}
                    <Stack spacing={1}>
                      <Typography variant="body2">Photo</Typography>
                      <input
                        type="file"
                        onChange={(e) =>
                          handleFileUpload("photo", e.target.files[0])
                        }
                        disabled={!isEditing}
                      />
                      <Typography variant="caption">
                        {formData.photo?.name}
                      </Typography>
                    </Stack>
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
