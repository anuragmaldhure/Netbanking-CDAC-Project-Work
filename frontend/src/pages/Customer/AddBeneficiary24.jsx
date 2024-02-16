import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Paper,
  IconButton,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { Edit as EditIcon, Save as SaveIcon } from "@mui/icons-material";

import CustomerSideNavigationMenu from "../../components/CustomerSideNavigationMenu";
import CustomerTopNavigationBar from "../../components/CustomerTopNavigationBar";

const AddBeneficiary24 = () => {
  // State for tracking the editing mode
  const [isEditing, setIsEditing] = useState(false);

  // State for tracking the visibility of the "Add Beneficiary" dialog
  const [isAddBeneficiaryDialogOpen, setAddBeneficiaryDialogOpen] =
    useState(false);
 // Function to handle input changes
 const handleInputChange = (field, value) => {
  setFormData((prevData) => ({
    ...prevData,
    [field]: value,
  }));
};

// Function to handle the "Edit" button click
const handleEditClick = () => {
  setIsEditing(true);
};

// Function to handle the "Save" button click
const handleSaveClick = () => {
  setIsEditing(false);
  // You can handle saving the form data (including file uploads) here
  console.log("Form data saved:", formData);
};

  // State for storing form data
  const [formData, setFormData] = useState({
    beneficiaryId: null,
    nickName: null,
    firstName: null,
    lastName: null,
    accountNumber: null,
    confirmAccountNumber: null,
    beneficiaryBankIFSCCode: null,
    beneficiaryMobileNumber: null,
  });

  // Function to handle the "Add Beneficiary" button click
  const handleAddBeneficiaryClick = () => {
    // Handle adding beneficiary logic here
    // For now, just open the dialog
    setAddBeneficiaryDialogOpen(true);
  };

  // Function to handle closing the "Add Beneficiary" dialog
  const handleCloseAddBeneficiaryDialog = () => {
    // Handle closing the dialog
    setAddBeneficiaryDialogOpen(false);
  };

  return (
    <div>
      {/* Customer navigation components */}
      <CustomerTopNavigationBar />
      <div style={{ display: "flex" }}>
        <CustomerSideNavigationMenu />

        {/* Main content area */}
        <Box m="15px" width="100%">
          <Typography variant="h4" gutterBottom>
            Beneficiary Details
          </Typography>

          {/* Form container */}
          <Paper elevation={3} sx={{ padding: "20px" }}>
            <form>
              <Grid container spacing={3}>
                {/* Form fields */}
                <Grid item xs={12} md={6} display="flex">
                  <Stack spacing={2} width="100%">
                    <TextField
                      label="Beneficiary Id "
                      fullWidth
                      value={formData.beneficiaryId}
                      onChange={(e) =>
                        handleInputChange("beneficiaryId", e.target.value)
                      }
                      disabled={!isEditing}
                      variant="outlined"
                      margin="normal"
                    />
                    <TextField
                      label="Beneficiary Nickname"
                      fullWidth
                      value={formData.nickName}
                      onChange={(e) =>
                        handleInputChange("nickName", e.target.value)
                      }
                      disabled={!isEditing}
                      variant="outlined"
                      margin="normal"
                    />
                    <TextField
                      label="Account Number "
                      fullWidth
                      value={formData.accountNumber}
                      onChange={(e) =>
                        handleInputChange("accountNumber", e.target.value)
                      }
                      disabled={!isEditing}
                      variant="outlined"
                      margin="normal"
                    />
                  </Stack>

                  <Stack spacing={2} width="100%">
                    <TextField
                      label="First Name"
                      fullWidth
                      value={formData.firstName}
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
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      disabled={!isEditing}
                      variant="outlined"
                      margin="normal"
                    />
                    <TextField
                      label="Confirm Account Number"
                      fullWidth
                      value={formData.confirmAccountNumber}
                      onChange={(e) =>
                        handleInputChange(
                          "confirmAccountNumber",
                          e.target.value
                        )
                      }
                      disabled={!isEditing}
                      variant="outlined"
                      margin="normal"
                    />
                    <TextField
                      label="Beneficiary Bank IFSC Code"
                      fullWidth
                      value={formData.beneficiaryBankIFSCCode}
                      onChange={(e) =>
                        handleInputChange(
                          "beneficiaryBankIFSCCode",
                          e.target.value
                        )
                      }
                      disabled={!isEditing}
                      variant="outlined"
                      margin="normal"
                    />
                    <TextField
                      label="Beneficiary Mobile Number"
                      fullWidth
                      value={formData.beneficiaryMobileNumber}
                      onChange={(e) =>
                        handleInputChange(
                          "beneficiaryMobileNumber",
                          e.target.value
                        )
                      }
                      disabled={!isEditing}
                      variant="outlined"
                      margin="normal"
                    />
                  </Stack>
                </Grid>
              </Grid>

              {/* Action buttons */}
              <Grid container spacing={2} justifyContent="flex-end" mt={3}>
                <Grid item xs={12} md={3}>
                  <Stack spacing={2} direction="row">
                    {/* Edit/Save button */}
                    <IconButton
                      onClick={isEditing ? handleSaveClick : handleEditClick}
                      color="primary"
                      size="small"
                    >
                      {isEditing ? <SaveIcon /> : <EditIcon />}
                    </IconButton>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={3}>
                  {/* Add Beneficiary button */}
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={handleAddBeneficiaryClick}
                    sx={{ width: "100%" }}
                  >
                    Add Beneficiary
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Box>
      </div>

      {/* Add Beneficiary Dialog */}
      <Dialog
        open={isAddBeneficiaryDialogOpen}
        onClose={handleCloseAddBeneficiaryDialog}
      >
        <DialogTitle>Add Beneficiary Request</DialogTitle>
        <DialogContent>
          <DialogContentText>
            We have received your request to add the above beneficiary details.
            It is currently under review. It will be processed within the next
            24 working hours. Contact us for further assistance!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* Close button in the dialog */}
          <Button onClick={handleCloseAddBeneficiaryDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddBeneficiary24;
