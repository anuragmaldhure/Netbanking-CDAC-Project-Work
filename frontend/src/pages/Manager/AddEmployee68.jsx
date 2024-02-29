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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import ManagerTopNavigationBar from "../../components/ManagerTopNavigationBar";
import ManagerSideNavigationBar from "../../components/ManagerSideNavigationBar";

const BASE_URL = "http://localhost:8080";

// setting a default authorization header for Axios requests
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${sessionStorage.getItem("jwt")}`;
axios.defaults.headers.post["Content-Type"] = "application/json";

const AddEmployee68 = () => {
  const [employeeDetails, setEmployeeDetails] = useState({
    employeeFirstName: "",
    employeeLastName: "",
    mobileNumber: "",
    emailId: "",
    username: "",
    password: "",
    dateOfBirth: new Date(),
  });

  const [openDialog, setOpenDialog] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeDetails({
      ...employeeDetails,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setEmployeeDetails({
      ...employeeDetails,
      dateOfBirth: date,
    });
  };

  const handleAddEmployee = () => {
    axios
      .post(
        BASE_URL+"/Manager/Employees/AddNewEmployee",
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
              <TextField
                fullWidth
                label="Username"
                name="username"
                value={employeeDetails.username}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
                required
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                name="password"
                value={employeeDetails.password}
                onChange={handleInputChange}
                margin="normal"
                variant="outlined"
                required
              />
              {/* Use TextField for the date input */}
              <TextField
                fullWidth
                label="Date of Birth"
                type="date"
                name="dateOfBirth"
                value={employeeDetails.dateOfBirth.toISOString().split("T")[0]}
                onChange={(e) => handleDateChange(new Date(e.target.value))}
                margin="normal"
                variant="outlined"
                required
              />
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