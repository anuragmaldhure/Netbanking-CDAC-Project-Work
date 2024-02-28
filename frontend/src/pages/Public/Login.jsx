// LoginForm.jsx
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom"; // Assuming you are using React Router
import styles from "./Login.module.css";
import illustration from "../../assets/images/undraw_login_re_4vu2.svg";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Add authentication logic here
    toast.success("Login successful", {
      autoClose: 2000,
    });
  };

  console.log("Rendering LoginForm");

  return (
    <div>
      <main className={`${styles.cardContainer} ${styles.UpAnimationClass}`}>
        <div className={styles.imageContainer}>
          <h1 className={styles.company}>
            AARNA BANK <sup>&trade;</sup>
          </h1>
          <img
            src={illustration}
            className={`${styles.illustration} ${styles.illustrationLogin}`}
            alt=""
          />
          <p className={styles.quote}>
            Enter your credentials to login.
          </p>
        </div>
        <form onSubmit={handleLogin}>
          <div
            className={`${styles.formContainer} ${styles.RightAnimationClass}`}
          >
            <h1 className={styles.formHeader}>Login</h1>
            <div className={styles.inputContainer}>
              <label htmlFor="username"></label>
              <input
                type="text"
                name="username"
                id="username"
                required
                value={username}
                onChange={handleUsernameChange}
              />
              <span>Username</span>
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="password"></label>
              <input
                type="password"
                name="password"
                id="password"
                required
                value={password}
                onChange={handlePasswordChange}
              />
              <span>Password</span>
            </div>
            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.submitBtn}>
                Login
              </button>
              <Link to="/">Back to Homepage</Link>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default LoginForm;