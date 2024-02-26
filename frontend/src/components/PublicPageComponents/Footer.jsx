import React from "react";
import styles from "./Footer.module.css";
import { Link as ScrollLink } from "react-scroll";
// import "@fortawesome/fontawesome-free/css/all.css";

const Footer = () => {
  return (
    <footer className={`bg-dark text-center text-white ${styles.footer}`}>
      <div className="container p-4 pb-0">
        <section className="mb-4">
          {/* Social media icons with smooth scrolling */}
          <ScrollLink
            to="facebook-section" // Replace with the section ID you want to scroll to
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`btn btn-outline-light btn-floating m-1 ${styles.socialIcon}`}
          >
            <i className="fab fa-facebook-f"></i>
          </ScrollLink>
          {/* Add other social media icons similarly */}
          <ScrollLink
            to="twitter-section" // Replace with the section ID you want to scroll to
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`btn btn-outline-light btn-floating m-1 ${styles.socialIcon}`}
          >
            <i className="fab fa-twitter"></i>
          </ScrollLink>
          <ScrollLink
            to="instagram-section" // Replace with the section ID you want to scroll to
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`btn btn-outline-light btn-floating m-1 ${styles.socialIcon}`}
          >
            <i className="fab fa-instagram"></i>
          </ScrollLink>
        </section>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <p>
          {/* Copyright text */}© 2022 Copyright:
          <a
            className="text-white"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            AARNABANK
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;