import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "../../assets/images/obj.jpg";
import GoogleSvg from "../../assets/images/icons8-google.svg";

import styles from "./Login.module.css"; // Importing the CSS module

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!username.trim()) {
      toast.error("Please enter your username");
      return;
    }

    if (!password.trim()) {
      toast.error("Please enter your password");
      return;
    }

    // Here you can perform login authentication logic
    console.log("Logging in with username:", username, "and password:", password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginLeft}>
        <img src={Image} alt="" className={styles.loginImage} />
      </div>
      <div className={styles.loginRight}>
        <div className={styles.loginCenter}>
          <h2>Welcome back!</h2>
          <p>Please enter your details</p>
          <form>
            <input
              type="text"
              placeholder="Username"
              className={`${styles.usernameInput} ${styles.customFont}`}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className={styles.passInputDiv}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={`${styles.passwordInput} ${styles.customFont}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className={styles.showPasswordButton}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className={styles.loginCenterButtons}>
              <button type="button" className={styles.loginButton} onClick={handleLogin}>
                Log In
              </button>
              <button type="button" className={styles.googleLoginButton}>
                <img
                  src={GoogleSvg}
                  alt=""
                  className={styles.googleIcon}
                />
                Log In 
              </button>
            </div>
            <div className={styles.loginBottom}>
              <p className={styles.loginBottomP}>
                Don't have an account?{" "}
                <a
                  href="http://localhost:3000/Signup"
                  className={styles.signUpLink}
                >
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
