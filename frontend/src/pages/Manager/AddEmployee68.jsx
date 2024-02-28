import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Paper,
  Typography,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

import ManagerTopNavigationBar from "../../components/ManagerTopNavigationBar";
import ManagerSideNavigationBar from "../../components/ManagerSideNavigationBar";

const AddEmployee68 = () => {
  const [employeeDetails, setEmployeeDetails] = useState({
    employeeFirstName: "",
    employeeLastName: "",
    mobileNumber: "",
    emailId: "",
  });

  const [openDialog, setOpenDialog] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeDetails({
      ...employeeDetails,
      [name]: value,
    });
  };

  const handleAddEmployee = () => {
    axios
      .post(
        "http://localhost:8080/Manager/Employees/AddNewEmployee",
        employeeDetails
      )
      .then((response) => {
        setOpenDialog(true);
        console.log("Employee added successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error adding employee:", error);
      });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <ManagerTopNavigationBar />
      <div style={{ display: "flex" }}>
        <ManagerSideNavigationBar />
        <Container component="main" maxWidth="xs">
          <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
            <Typography variant="h5" gutterBottom>
              Add New Employee
            </Typography>
            <form>
              <TextField
                fullWidth
                label="First Name"
                name="employeeFirstName"
                value={employeeDetails.employeeFirstName}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
                required
              />
              <TextField
                fullWidth
                label="Last Name"
                name="employeeLastName"
                value={employeeDetails.employeeLastName}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
                required
              />
              <TextField
                fullWidth
                label="Mobile Number"
                name="mobileNumber"
                value={employeeDetails.mobileNumber}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="emailId"
                value={employeeDetails.emailId}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
                required
              />
              {/* Other input fields... */}
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleAddEmployee}
                style={{ marginTop: "20px" }}
              >
                Add Employee
              </Button>
            </form>
          </Paper>
        </Container>
      </div>

      {/* Dialog to show success message */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Employee Added</DialogTitle>
        <DialogContent>
          <DialogContentText>
            The employee has been added successfully.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddEmployee68;
