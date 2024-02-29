import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
} from "@mui/material";
import ManagerTopNavigationBar from "../../components/ManagerTopNavigationBar";
import ManagerSideNavigationBar from "../../components/ManagerSideNavigationBar";
import "./SearchEmployee67.css"; // Import the CSS file
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:8080";

// setting a default authorization header for Axios requests
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${sessionStorage.getItem("jwt")}`;
axios.defaults.headers.post["Content-Type"] = "application/json";

const SearchEmployee67 = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the server
    axios
      .get(BASE_URL+"/Manager/Accounts/GetAllEmployeesDetails")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredEmployees = employees.filter((employee) =>
    employee.employeeFirstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownload = () => {
    // Create CSV content
    const csvContent =
      "Employee ID,First Name,Last Name,Mobile Number,Email\n" +
      filteredEmployees
        .map(
          (employee) =>
            `${employee.employeeId},${employee.employeeFirstName},${employee.employeeLastName},${employee.mobileNumber},${employee.emailId},${employee.username}`
        )
        .join("\n");

    // Convert CSV content to Blob
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    // Create an anchor element and trigger download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "employees.csv";
    link.click();
  };

  const handleExport = () => {
    // Create CSV content
    const csvContent =
      "Employee ID,First Name,Last Name,Mobile Number,Email\n" +
      filteredEmployees
        .map(
          (employee) =>
            `${employee.employeeId},${employee.employeeFirstName},${employee.employeeLastName},${employee.mobileNumber},${employee.emailId}`
        )
        .join("\n");

    // Open a new window with the CSV data
    const newWindow = window.open();
    newWindow.document.open();
    newWindow.document.write(`<pre>${csvContent}</pre>`);
    newWindow.document.close();
  };

  const handleDelete = (empId) => {
    // Implement delete functionality
    axios
      .delete(`${BASE_URL}/Manager/Employees/RemoveEmployee/${empId}`)
      .then((response) => {
        // Handle success, maybe refresh the employee list
        // console.log("Employee deleted successfully");
        toast.success('🦄 Employee deleted successfully!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
          //transition: Bounce,
          });
          setTimeout(() => {
            navigate("/Manager/Home"); // Navigate after 3 seconds
        }, 3000);
      })
      .catch((error) => {
        // Handle error
        console.error("Error deleting employee:", error);
        toast.error("Error deleting employee:", error, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
          //transition: Bounce,
          });
      });
  };

  return (
    <div>
      <ManagerTopNavigationBar />
      <div style={{ display: "flex" }}>
        <ManagerSideNavigationBar />
        <div className="bodies">
          {/* Search Box */}
          <TextField
            className="searchInput"
            label="Search by name"
            variant="outlined"
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Table */}
          <TableContainer component={Paper} className="tableContainer">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Employee ID</TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Mobile Number</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Username</TableCell>
                  {/* <TableCell>Password</TableCell> */}
                  <TableCell>DOB</TableCell>
                  <TableCell>Joining Date Stamp</TableCell>
                  <TableCell>Last Login Date Stamp</TableCell>
                  <TableCell>Action</TableCell> {/* New column for action */}
                  {/* Add more columns as needed */}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredEmployees.map((employee) => (
                  <TableRow key={employee.employeeId}>
                    <TableCell>{employee.employeeId}</TableCell>
                    <TableCell>{employee.employeeFirstName}</TableCell>
                    <TableCell>{employee.employeeLastName}</TableCell>
                    <TableCell>{employee.mobileNumber}</TableCell>
                    <TableCell>{employee.emailId}</TableCell>
                    <TableCell>{employee.username}</TableCell>
                    {/* <TableCell>{employee.password}</TableCell> */}
                    <TableCell>{employee.dateOfBirth}</TableCell>
                    <TableCell>{employee.joiningTimestamp}</TableCell>
                    <TableCell>{employee.lastLogin}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => handleDelete(employee.employeeId)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                    {/* Add more columns as needed */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Download, Export, and Delete Buttons */}
          <div className="buttonContainer">
            <Button
              variant="contained"
              color="primary"
              className="button"
              onClick={handleDownload}
            >
              Download Data
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className="button"
              onClick={handleExport}
            >
              Export Data
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchEmployee67;
