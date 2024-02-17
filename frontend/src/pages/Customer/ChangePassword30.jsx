import React, { useState } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CustomerSideNavigationMenu from "../../components/CustomerSideNavigationMenu";
import CustomerTopNavigationBar from "../../components/CustomerTopNavigationBar";

const ChangePassword30 = () => {
  // Initialize currentPassword with a random value for testing
  const [currentPassword, setCurrentPassword] = useState("testPassword123");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  const handleSubmit = () => {
    // Validate if any of the fields is empty
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error("Please enter all fields");
      return;
    }

    // Perform password validation logic here
    // For demonstration purposes, let's assume the validation is checking if the current password is "testPassword123"
    if (currentPassword !== "testPassword123") {
      toast.error("Incorrect current password");
    } else if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password do not match");
    } else {
      // Update password logic goes here

      // Show success dialog
      setOpenDialog(true);
      toast.success("Password changed successfully");
    }
  };

  return (
    <div>
      <CustomerTopNavigationBar />
      <div style={{ display: "flex" }}>
        <CustomerSideNavigationMenu />
        <div style={{ marginLeft: "20px", marginTop: "20px" }}>
          <TextField
            label="Current Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <TextField
            label="New Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Password Changed Successfully</DialogTitle>
        <DialogContent>
          <p>
            Your password has been changed successfully. Please keep your new
            password secure.
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </div>
  );
};

export default ChangePassword30;
