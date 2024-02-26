// ForgotPasswordForm.jsx
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./ForgotPasswordForm.module.css";
import illustration from "../../assets/images/obj.jpg";

const ForgotPasswordForm = () => {
  const [accountNumber, setAccountNumber] = useState("");

  const handleInputChange = (e) => {
    setAccountNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Password reset request submitted successfully", {
      autoClose: 2000,
    });
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
