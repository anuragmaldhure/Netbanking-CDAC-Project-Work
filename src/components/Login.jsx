import React, { useEffect, useState } from "react";
import Image from "../assets/images/obj.jpg";
import Logo from "../assets/images/logo.png";
import GoogleSvg from "../assets/images/icons8-google.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./Login.module.css"; // Importing the CSS module

// Component definition
const Login = () => {
  // State for controlling password visibility
  const [showPassword, setShowPassword] = useState(false);

  // JSX structure with styles applied using CSS Modules
  return (
    <div className={styles.loginMain}>
      <div className={styles.loginLeft}>
        <img src={Image} alt="" className={styles.loginLeftImg} />
      </div>
      <div className={styles.loginRight}>
        <div className={styles.loginRightContainer}>
          <div className={styles.loginLogo}>
            <img src={Logo} alt="" className={styles.loginLogoImg} />
          </div>
          <div className={styles.loginCenter}>
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form>
              <input
                type="email"
                placeholder="Email"
                className={styles.input}
              />
              <div className={styles.passInputDiv}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className={styles.input}
                />
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                    className={styles.eyeIcon}
                  />
                ) : (
                  <FaEye
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                    className={styles.eyeIcon}
                  />
                )}
              </div>
              <div className={styles.loginCenterOptions}>
                <div className={styles.rememberDiv}>
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember for 30 days
                  </label>
                </div>
                <a href="#" className={styles.forgotPassLink}>
                  Forgot password?
                </a>
              </div>
              <div className={styles.loginCenterButtons}>
                <button type="button" className={styles.loginButton}>
                  Log In
                </button>
                <button type="button" className={styles.googleLoginButton}>
                  <img src={GoogleSvg} alt="" className={styles.googleIcon} />
                  Log In with Google
                </button>
              </div>
            </form>
          </div>
          <p className={styles.loginBottomP}>
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

// Exporting the component
export default Login;
