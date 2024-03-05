import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./SignUpForm.module.css";
import { Link } from "react-router-dom";
import axios from "axios";


const SignUpForm = () => {
  const navigate = useNavigate();
  const BASE_URL = "http://65.2.82.68:8080";

  const [formValues, setFormValues] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    username: "", 
    password: "",
    confirmPassword: "",
  });

  const [animationClasses, setAnimationClasses] = useState({
    cardContainer: "",
    formContainer: "",
    outroOverlay: "",
  });

  useEffect(() => {
    if (animationClasses.outroOverlay === styles.UpAnimationClass) {
      toast.success("Account created successfully", { autoClose: 2000 });
      const timeoutId = setTimeout(() => {
        navigate("/login");
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [animationClasses.outroOverlay, navigate]);

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValues.password !== formValues.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }else{
      toast.info("🦄 Processing... Please wait", {
        position: "top-center",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
    });
    }

    try {
      const response = await axios.post(BASE_URL + "/signup", {
        accountHolderFirstName: formValues.fName,
        accountHolderLastName: formValues.lName,
        username: formValues.username,
        password: formValues.password,
        emailId: formValues.email,
        mobileNumber: formValues.phone,
      });
 
      // Check if the response status is 201 (Created) or not
      if (response.status === 201) {
        console.log("Account created successfully:", response.data);
        toast.success("Account created successfully");
        // Redirect to login page after successful signup
        navigate("/login");
      }
      else if(response.status === 417){
        console.log("Username already exists", response.data);
        toast.error("Username already exists! Please try with some different username");
      } 
      else {
        // Handle other response status codes if any
      }
    } catch (error) {
      // Handle error
      console.error("Error creating account:", error);
      // Display error message
      toast.error("Error creating account. Try different username");
    }
  };

  

  return (
    <div>
      <main
        className={`${styles.cardContainer} ${animationClasses.cardContainer}`}
      >
        <div className={styles.imageContainer}>
          <h1 className={styles.company}>
            AARNA BANK <sup>&trade;</sup>
          </h1>
          <img
            src="../../assets/images/signUp.svg"
            className={styles.illustration}
            alt=""
          />
          <p className={styles.quote}>Sign up today to get exciting offers..!</p>
          <a href="#btm" className={styles.mobileBtmNav}>
            <img src="../../assets/images/dbl-arrow.png" alt="" />
          </a>
        </div>
        <form onSubmit={handleSubmit}>
          <div
            className={`${styles.formContainer} ${animationClasses.formContainer}`}
          >
            <h1 className={styles.formHeader}>Get started</h1>
            {[
              {
                label: "First name",
                type: "text",
                name: "fName",
                id: "f-name",
              },
              {
                label: "Last name",
                type: "text",
                name: "lName",
                id: "l-name",
              },
              { label: "E-mail", type: "email", name: "email", id: "mail" },
              { label: "Phone", type: "tel", name: "phone", id: "phone" },
              { label: "Username", type: "text", name: "username", id: "username" }, // Add username field
              {
                label: "Password",
                type: "password",
                name: "password",
                id: "user-password",
              },
              {
                label: "Confirm Password",
                type: "password",
                name: "confirmPassword",
                id: "user-password-confirm",
              },
            ].map((inputField, index) => (
              <div className={styles.inputContainer} key={index}>
                <label htmlFor={inputField.id}></label>
                <input
                  type={inputField.type}
                  name={inputField.name}
                  id={inputField.id}
                  required
                  onChange={(e) => handleInputChange(e, inputField.name)}
                />
                <span>{inputField.label}</span>
                <div className={styles.error}></div>
              </div>
            ))}
            <div id="btm">
              <button
                type="submit"
                className={`${styles.submitBtn} ${styles.submitBtn}`}
              >
                Create Account
              </button>
              <p className={styles.btmText}>
                Already have an account..?{" "}
                <Link to="/login" className={styles.btmTextHighlighted}>Log in</Link>
              </p>
              <p className={styles.btmText}>
                Go back to {" "}
                <Link to="/" className={styles.btmTextHighlighted}>Bank HomePage</Link>
              </p>
            </div>
          </div>
        </form>
      </main>
      <section
        className={`${styles.outroOverlay} ${styles.disabled} ${animationClasses.outroOverlay}`}
      >
        <h1 className={styles.company}>
          AARNA BANK <sup>&trade;</sup>
        </h1>
        <h1 className={styles.outroGreeting}>Thank's for signing up..!</h1>
        <img
          src="../../assets/images/shape.svg"
          alt=""
          className={styles.shape}
        />
        <img
          src="../../assets/images/signedUp.svg"
          alt=""
          className={`${styles.signedUpIllustration} ${animationClasses.RightAnimationClass}`}
        />
      </section>
    </div>
  );
};

export default SignUpForm;
