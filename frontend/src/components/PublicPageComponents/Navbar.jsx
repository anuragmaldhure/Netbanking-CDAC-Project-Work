import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {

  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLoginClick = () => {
    // Navigate to the "/login" route
    navigate("/login");
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${styles.navbar}`}
    >
      <div className="container-fluid">
        <ScrollLink
          className="navbar-brand website-name"
          to="home" // Replace 'home' with the ID of your home section
          spy={true}
          smooth={true}
          offset={-70}
          duration={100}
        >
          AARNA BANK
        </ScrollLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={isExpanded ? "true" : "false"}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isExpanded ? "show" : ""} ${
            styles.navbarCollapse
          }`}
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <ScrollLink
                className="nav-link"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link"
                to="discover"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
              >
                Discover
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link"
                to="service"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
              >
                Service
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link"
                to="signup"
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
              >
                Signup
              </ScrollLink>
            </li>
            {/* Add similar ScrollLink components for other sections */}
          </ul>

          <button
            className={`btn btn-success text-dark ${styles.signInBtn}`}
            type="button" onClick={handleLoginClick}
          >
            Log in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
