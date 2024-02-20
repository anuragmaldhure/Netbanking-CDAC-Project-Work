import React, { useState } from "react";
import styles from "./SignUpForm.module.css";

const SignUpForm = () => {
  const [count, setCount] = useState(2);

  const onValidation = (current, messageString, booleanTest) => {
    let message = current;
    message.textContent = messageString;
    booleanTest !== 0
      ? setCount((prevCount) => prevCount + 1)
      : setCount(count);
  };

  const handleInputChange = (e, index) => {
    const inputValue = e.target.value;
    const currentErrorDisplayer = document.getElementsByClassName(
      `${styles.error}`
    )[index];

    if (index === 3) {
      // Handle phone validation
      inputValue === inputValue.replace(/\D/g, "")
        ? onValidation(currentErrorDisplayer, "", 1)
        : onValidation(
            currentErrorDisplayer,
            "*Please enter a valid number",
            0
          );
    } else if (index === 2) {
      // Handle email validation
      inputValue.includes("@") && inputValue.includes(".com")
        ? onValidation(currentErrorDisplayer, "", 1)
        : onValidation(
            currentErrorDisplayer,
            "*Please provide a valid email",
            0
          );
    } else if (index === 4) {
      // Handle password validation
      inputValue.length >= 8
        ? onValidation(currentErrorDisplayer, "", 1)
        : onValidation(
            currentErrorDisplayer,
            "Password requires a minimum of 8 characters",
            0
          );
    } else if (index === 5) {
      // Handle password confirmation validation
      const password = document.querySelector(`#${styles.userPassword}`).value;
      inputValue === password
        ? onValidation(currentErrorDisplayer, "", 1)
        : onValidation(currentErrorDisplayer, "*Password did not match", 0);
    } else {
      // Handle generic input validation
      inputValue !== ""
        ? onValidation(currentErrorDisplayer, "", 0)
        : onValidation(currentErrorDisplayer, "*This field is required", 0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (count > 5) {
      // Perform the desired action on successful form submission
      console.log("Form submitted successfully");
    } else {
      // Display error messages for empty fields
      const errorDisplayers = document.getElementsByClassName(
        `${styles.error}`
      );
      for (let i = 0; i < errorDisplayers.length; i++) {
        errorDisplayers[i].textContent = "*This field is required";
      }
    }
  };
  return (
    <div>
      <main className={`${styles.cardContainer} ${styles.UpAnimationClass}`}>
        <div className={styles.imageContainer}>
          <h1 className={styles.company}>
            Basket <sup>&trade;</sup>
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
            className={`${styles.formContainer} ${styles.RightAnimationClass}`}
          >
            <h1 className={styles.formHeader}>Get started</h1>
            {/* Mapping over input fields */}
            {[
              {
                label: "First name",
                type: "text",
                name: "f-name",
                id: "f-name",
              },
              {
                label: "Last name",
                type: "text",
                name: "l-name",
                id: "l-name",
              },
              { label: "E-mail", type: "email", name: "mail", id: "mail" },
              { label: "Phone", type: "tel", name: "phone", id: "phone" },
              {
                label: "Password",
                type: "password",
                name: "user-password",
                id: "user-password",
              },
              {
                label: "Confirm Password",
                type: "password",
                name: "user-password-confirm",
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
                  onChange={(e) => handleInputChange(e, index)}
                />
                <span>{inputField.label}</span>
                <div className={styles.error}></div>
              </div>
            ))}

            <div id="btm">
              <button type="submit" className={styles.submitBtn}>
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
      <section className={`${styles.outroOverlay} ${styles.disabled} ${styles.UpAnimationClass}`}>

        <h1 className={styles.company}>
          Basket <sup>&trade;</sup>
        </h1>
        <h1 className={styles.outroGreeting}>Thank's for signing up..!</h1>
        <img
          src=".../../assets/images/shape.svg"
          alt=""
          className={styles.shape}
        />
        <img
          src="../../assets/images/signedUp.svg"
          alt=""
          id={styles.signedUpIllustration}
          className={styles.RightAnimationClass}
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
