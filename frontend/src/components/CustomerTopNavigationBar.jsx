import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Badge, IconButton, InputBase, useTheme } from "@mui/material";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import axios from "axios";
import "./CustomerTopNavigationBar.css";

function CustomerTopNavigationBar() {
  const [customerData, setCustomerData] = useState(null);

  const BASE_URL = "http://localhost:8080";

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await axios.get(
          BASE_URL + `/Customer/User/GetMyDetails`,
          { 
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("jwt")}`
            }
          }
        );
        setCustomerData(response.data);
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };
    fetchCustomerData();
  }, []);

  return (
    <div className="customer-top-navbar-container">
      <div className="logo-container">
        <div className="nav-links-container">
          <span className="logo">Aarna Bank</span>
          <div style={{marginRight : '30px', marginLeft : '30px'}}>
            {customerData &&
              `${customerData.accountHolderFirstName} ${customerData.accountHolderLastName} [${customerData.accountNumber}]  ::`}
          </div>
          <span></span>
          <Link to="/Customer/Account/ViewAccountBalance" className="nav-link">
            Home
          </Link>
          <Link
            to="/Customer/OtherServices/OffersAvailableForMe31"
            className="nav-link"
          >
            Offers Available
          </Link>
          <Link
            to="/Customer/OtherServices/NetBankingTutorials38"
            className="nav-link"
          >
            Netbanking Tutorials
          </Link>
          <Link to="/Customer/OtherServices/ContactUs37" className="nav-link">
            Contact Us
          </Link>
          <div style={{marginRight : '30px', marginLeft : '30px'}}>
            {customerData &&
              `:: Last login : ${customerData.lastLoginTimestamp}`}
          </div>
        </div>
      </div>
      {/* <div className="user-icons-container">
        <IconButton className="user-icon">
          <PersonOutlinedIcon />
        </IconButton>
      </div> */}
    </div>
  );
}

export default CustomerTopNavigationBar;
