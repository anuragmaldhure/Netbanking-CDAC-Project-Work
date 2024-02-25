import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./SignUpForm.module.css";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    accountHolderFirstName: "",
    accountHolderLastName: "",
    username: "",
    password: "",
    emailId: "",
    mobileNumber: ""
  });

  // Add state for animation classes
  const [animationClasses, setAnimationClasses] = useState({
    cardContainer: "",
    formContainer: "",
    outroOverlay: ""
  });

  useEffect(() => {
    if (animationClasses.outroOverlay === styles.UpAnimationClass) {
      // Show toast for 2 seconds
      toast.success("Account created successfully", { autoClose: 2000 });

      // Navigate to /login after 2 seconds
      const timeoutId = setTimeout(() => {
        navigate("/login");
      }, 2000);

      // Cleanup the timeout to prevent unexpected behavior
      return () => clearTimeout(timeoutId);
    }
  }, [animationClasses.outroOverlay, navigate]);

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

        // Check if passwords match
        if (formValues.password !== formValues.confirmPassword) {
          toast.error("Passwords do not match");
          return;
        }

    toast.info("Processing ... Please wait!");

    // Perform the desired action on successful form submission
    console.log("Form submitted successfully");

    try {
      const response = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formValues)
      });

      if (response.ok) {
        // Trigger animation classes on form submission
        setAnimationClasses({
          cardContainer: styles.UpAnimationClass,
          formContainer: styles.RightAnimationClass,
          outroOverlay: styles.UpAnimationClass
        });
      } else {
        throw new Error("Failed to create account");
      }
    } catch (error) {
      console.error("Error creating account:", error);
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
          <p className={styles.quote}>
            Sign up today to get exciting offers and best in-class banking experience!
          </p>
          <a href="#btm" className={styles.mobileBtmNav}>
            <img src="../../assets/images/dbl-arrow.png" alt="" />
          </a>
        </div>
        <form onSubmit={handleSubmit}>
          <div
            className={`${styles.formContainer} ${animationClasses.formContainer}`}
          >
            <h1 className={styles.formHeader}>Get started</h1>
            {/* Mapping over input fields */}
            {[
              {
                label: "First name",
                type: "text",
                name: "accountHolderFirstName",
                id: "f-name"
              },
              {
                label: "Last name",
                type: "text",
                name: "accountHolderLastName",
                id: "l-name"
              },
              {
                label: "Username",
                type: "text",
                name: "username",
                id: "username"
              },
              { label: "E-mail", type: "email", name: "emailId", id: "mail" },
              {
                label: "Password",
                type: "password",
                name: "password",
                id: "user-password"
              },
              {
                label: "Confirm Password",
                type: "password",
                name: "confirmPassword",
                id: "user-password-confirm"
              },
              { label: "Phone", type: "tel", name: "mobileNumber", id: "phone" }
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
                <span className={styles.btmTextHighlighted}>Log in</span>
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
