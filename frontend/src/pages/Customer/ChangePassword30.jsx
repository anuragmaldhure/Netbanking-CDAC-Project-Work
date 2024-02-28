import React, { useState, useEffect } from "react";
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
import Axios from "axios";

import CustomerSideNavigationMenu from "../../components/CustomerSideNavigationMenu";
import CustomerTopNavigationBar from "../../components/CustomerTopNavigationBar";

const ChangePassword30 = () => {
  const [fetchedPassword, setFetchedPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");

  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        const response = await Axios.get(
          `http://localhost:8080/Customer/Account/1`
        );
        setFetchedPassword(response.data.password);
        console.log("Fetched Password:", response.data.password);
      } catch (error) {
        console.error("Error fetching customer details:", error);
      }
    };

    fetchCustomerDetails();
  }, []);

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleSubmit = async () => {
    // Assuming you have the necessary state variables like customerId
    const customerId = 1; // replace with the actual value or get it from your state

    // Validate that newPassword and confirmPassword match
    if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password do not match");
      return;
    }

    try {
      const response = await Axios.put(
        `http://localhost:8080/Customer/OtherServices/ChangePassword30/${customerId}`,
        null, // Set to null for the request body
        {
          params: {
            currentPassword: currentPassword,
            newPassword: newPassword,
          },
        }
      );

      if (response.status === 200) {
        // Password changed successfully
        setOpenDialog(true);
        toast.success("Password changed successfully");
      } else {
        // Handle error response from the server
        console.error("Failed to change password:", response.statusText);
        toast.error("Failed to change password");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error changing password:", error.message);
      toast.error("Error changing password");
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
