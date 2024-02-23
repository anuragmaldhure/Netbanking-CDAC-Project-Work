import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Image from "../../assets/images/obj.jpg";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      toast.error("Please enter both username and password");
      return;
    }

    // Simulating successful login
    // Here you can replace this with your actual login authentication logic
    console.log(
      "Logging in with username:",
      username,
      "and password:",
      password
    );

    // Set loginSuccess to true on successful login
    setLoginSuccess(true);
  };

  useEffect(() => {
    // Use the effect to handle successful login and navigation
    if (loginSuccess) {
      // Show toast for 2 seconds
      toast.success("Login successful", { autoClose: 2000 });

      // Navigate to /Customer/Account/ViewAccountBalance after 2 seconds
      const timeoutId = setTimeout(() => {
        navigate("/Customer/Account/ViewAccountBalance");
      }, 2000);

      // Cleanup the timeout to prevent unexpected behavior
      return () => clearTimeout(timeoutId);
    }
  }, [loginSuccess, navigate]);

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
              className={`${styles.input} ${styles.customFont}`}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className={styles.passInputDiv}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={`${styles.input} ${styles.customFont}`}
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
              <button
                type="button"
                className={`btn btn-success ${styles.loginButton}`}
                onClick={handleLogin}
              >
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
