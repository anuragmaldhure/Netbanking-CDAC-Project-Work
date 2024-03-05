import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./ForgotPasswordForm.module.css";
import illustration from "../../assets/images/undraw_login_re_4vu2.svg";
import axios from "axios";

const ForgotPasswordForm = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const BASE_URL = "http://65.2.82.68:8080";

  const handleInputChange = (e) => {
    setAccountNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      toast.success("Password was reset. Please check your mail ! Redirecting...", {
        autoClose: 4000,
      });

      await axios.post(BASE_URL + "/reset", accountNumber, {
        headers: {
          "Content-Type": "text/plain",
        },
      });

      // Redirect to login page after 3 seconds
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (error) {
      console.error("Error occurred:", error.message);
      toast.error("Failed to submit password reset request");
    }
  };

  console.log("Rendering ForgotPasswordForm");

  return (
    <div>
      <main className={`${styles.cardContainer} ${styles.UpAnimationClass}`}>
        <div className={styles.imageContainer}>
          <h1 className={styles.company}>
            AARNA BANK <sup>&trade;</sup>
          </h1>
          <img src={illustration} className={styles.illustration} alt="" />
          <p className={styles.quote}>
            Enter your account number to reset your password.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div
            className={`${styles.formContainer} ${styles.RightAnimationClass}`}
          >
            <h1 className={styles.formHeader}>Forgot Password</h1>
            <div className={styles.inputContainer}>
              <label htmlFor="accountNumber"></label>
              <input
                type="text"
                name="accountNumber"
                id="accountNumber"
                required
                value={accountNumber}
                onChange={handleInputChange}
              />
              <span>Account Number</span>
              <div className={styles.error}></div>
            </div>
            <div>
              <button type="submit" className={styles.submitBtn}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ForgotPasswordForm;
