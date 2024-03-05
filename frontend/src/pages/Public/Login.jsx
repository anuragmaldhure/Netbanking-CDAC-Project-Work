import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Image from "../../assets/images/obj.jpg";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const [usernameInput, setUsername] = useState("");
  const [passwordInput, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const BASE_URL = "http://65.2.82.68:8080";

  // clear if any previous data
  if (sessionStorage.getItem("jwt") || sessionStorage.getItem("role")) {
    sessionStorage.clear();
  }

  const handleLogin = async () => {
    if (!usernameInput.trim() || !passwordInput.trim()) {
      toast.error("Please enter both username and password");
      return;
    }

    try {

      // console.log(usernameInput);
      // console.log(passwordInput);

      axios.defaults.headers.post["Content-Type"] = "application/json";

      // console.log(BASE_URL + "/login");
      // console.log(axios.defaults.headers);
      const response = await axios.post(BASE_URL + "/login" 
      ,{
        "username": usernameInput,
        "password": passwordInput
      }
      );

      // console.log(response);

      const token = response.data.jwt;
      const role = response.data.role;

      // console.log(token);
      // console.log(role);

      const setAuthToken = (token) => {
        if (token) {
          sessionStorage.setItem("jwt", token);
          sessionStorage.setItem("role", role);
        }
      };

      setAuthToken(token);

      // // setting a default authorization header for Axios requests
      // axios.defaults.headers.common[
      //   "Authorization"
      // ] = `Bearer ${sessionStorage.getItem("jwt")}`;
      // axios.defaults.headers.post["Content-Type"] = "application/json";

      toast.success(" Welcome dear " + role + "..." + response.data.mesg);

      switch (role) {
        case "CUSTOMER":
          navigate("/Customer/Account/ViewAccountBalance");
          break;
        case "EMPLOYEE":
          navigate("/Employee/Accounts/SearchCustomer47");
          break;
        case "MANAGER":
          navigate("/Manager/Home");
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
              value={usernameInput}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className={styles.passInputDiv}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={`${styles.input} ${styles.customFont}`}
                value={passwordInput}
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
                <Link className={styles.btmTextHighlighted} to="/signup"> Sign Up</Link>
              </p>
              <p className={styles.loginBottomP}>
                Go to {" "}
                <Link className={styles.btmTextHighlighted} to="/"> Bank Home Page</Link>
              </p>
              <p className={styles.loginBottomP}>
                Forgot Password? {" "}
                <Link className={styles.btmTextHighlighted} to="/reset"> Reset Password</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
