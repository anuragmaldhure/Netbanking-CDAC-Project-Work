import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./SignUpForm.module.css";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // Add state for animation classes
  const [animationClasses, setAnimationClasses] = useState({
    cardContainer: "",
    formContainer: "",
    outroOverlay: "",
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
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the desired action on successful form submission
    console.log("Form submitted successfully");

    // Trigger animation classes on form submission
    setAnimationClasses({
      cardContainer: styles.UpAnimationClass,
      formContainer: styles.RightAnimationClass,
      outroOverlay: styles.UpAnimationClass,
    });
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
            Sign up today to get exciting offers..!
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

        <div className={styles.authorLink}>
          &copy;&nbsp;
          <a href="https://www.0xabdulkhalid.ml/">0xabdulkhalid</a> |
          <a href="https://www.github.com/0xabdulkhalid/basket-sign-up-form/">
            Source Code
          </a>
        </div>
      </section>
    </div>
  );
};

export default SignUpForm;
