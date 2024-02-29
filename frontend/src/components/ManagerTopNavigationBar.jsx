import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./ManagerTopNavigationBar.css";
import axios from "axios";

const BASE_URL = "http://localhost:8080";

// setting a default authorization header for Axios requests
axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${sessionStorage.getItem("jwt")}`;
axios.defaults.headers.post["Content-Type"] = "application/json";

function ManagerTopNavigationBar() {
  const [click, setClick] = useState(false);
  const [managerData, setManagerData] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get(BASE_URL + `/Manager/User/GetMyDetails`);
              setManagerData(response.data); // Assuming response.data contains the emp details
          } catch (error) {
              console.error("Error fetching data:", error);
          }
      };
      fetchData();
  }, []); 


  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbarManager">
        <div className="nav-container-man">
          <div className="nav-logo-man" >
            AARNA BANK
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>

          <li className="nav-logo" style={{color:"yellow"}}>
                Manager Portal
              </li>
         <li className="nav-logo">
                <a className="nav-link disabled" style={{color:"#f5b921", marginLeft:"30px", marginRight:"40px"}}>
                    {managerData && `${managerData.managerFirstName} ${managerData.managerLastName} (ID: ${managerData.managerId})`}
                </a>
              </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Manager/Home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Customers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Employee
              </NavLink>
            </li>
            <div style={{marginRight : '30px', marginLeft : '30px', color:"#f5b921"}}>
            {managerData &&
              `:: Last login : ${managerData.lastLogin.split('T')[0]} : ${managerData.lastLogin.slice(11, 19)}`}
          </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default ManagerTopNavigationBar;
