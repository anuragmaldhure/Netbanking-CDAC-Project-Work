import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Image from "../../assets/images/obj.jpg";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!username.trim() || !password.trim()) {
      toast.error("Please enter both username and password");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/signin", {
        username: username,
        password: password,
      });
      const token = response.data.jwt;
      // const userId = response.data.userId;
      const role = response.data.role;

      sessionStorage.setItem("jwt", token);
      // sessionStorage.setItem("id", userId);
      sessionStorage.setItem("role", role);

      toast.success(" Welcome dear " + role + "..." + response.data.mesg);
      switch (role) {
        case "CUSTOMER":
          navigate("/Customer/Account/ViewAccountBalance");
          break;
        case "EMPLOYEE":
          navigate("/Employee/Accounts/SearchCustomer47");
          break;
        case "MANAGER":
          navigate("/Manager/Dashboard/ManagerHome");
          break;
        default:
          navigate("/public"); // Redirect to default page for unknown roles
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Invalid username or password");
      } else {
        // toast.error("An error occurred. Please try again later.");
        toast.error("An error occurred. Please try again later.");
      }
    }
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
                <a href="http://localhost:3000/Signup" className={styles.signUpLink}>
                  Sign Up
                </a>
              </p>
              <p className={styles.loginBottomP}>
                Go to {" "}
                <Link className={styles.btmTextHighlighted} to="/public"> Bank Home Page</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
