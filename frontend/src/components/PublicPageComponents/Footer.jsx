import React from "react";
import styles from "./Footer.module.css";
import { Link as ScrollLink } from "react-scroll";
// import "@fortawesome/fontawesome-free/css/all.css";

const Footer = () => {
  return (
    <footer className={`bg-dark text-center text-white ${styles.footer}`}>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <p>
          {/* Copyright text */}© 2023 Copyright : 
          <a
            className="text-white"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            : AARNA BANK
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;