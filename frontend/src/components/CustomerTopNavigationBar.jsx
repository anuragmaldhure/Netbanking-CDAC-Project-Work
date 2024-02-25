import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Badge, IconButton, InputBase, useTheme } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import "./CustomerTopNavigationBar.css";

function CustomerTopNavigationBar() {
  const customerId = 1;
  const theme = useTheme();
  const [customerData, setCustomerData] = useState(null);

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/Customer/User/GetMyDetails`,
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
          <span>
            {customerData &&
              `Welcome : ${customerData.accountHolderFirstName} ${customerData.accountHolderLastName} (A/C no. : ${customerData.accountNumber})      |  `}
          </span>
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
        </div>
      </div>
      <div className="search-bar">
        <InputBase placeholder="Search" className="search-input" />
        <IconButton type="button" className="search-icon">
          <SearchIcon />
        </IconButton>
      </div>
      <div className="user-icons-container">
        {/* <IconButton className="user-icon">
          {theme.palette.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </IconButton> */}
        {/* <IconButton className="user-icon">
          <Badge variant="dot" color="secondary">
            <NotificationsOutlinedIcon />
          </Badge>
        </IconButton>
        <IconButton className="user-icon">
          <SettingsOutlinedIcon />
        </IconButton> */}
        <IconButton className="user-icon">
          <PersonOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default CustomerTopNavigationBar;
