import React, { useState } from "react";
import styles from "./Register.module.css";

const Register = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    
    First_Name: "",
    Last_Name: "",
    Mobile_Number: "",
    Email_ID: "",
    Password: "",
    Date_of_Birth: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Generate a random Customer_ID (for demonstration purposes)
    const generatedCustomerId = Math.floor(Math.random() * 1000) + 1;

    // Combine form data with the generated Customer_ID
    const dataWithCustomerId = {
      ...formData,
      Customer_ID: generatedCustomerId,
    };

    // Perform registration logic here
    console.log("Form submitted:", dataWithCustomerId);

    // Assuming you have an API endpoint for registration
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataWithCustomerId),
      });

      if (response.ok) {
        // Registration successful
        console.log("Registration successful");
      } else {
        // Registration failed
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        {/* Registration form fields */}


        <label>
          First Name:
          <input
            type="text"
            name="First_Name"
            value={formData.First_Name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="Last_Name"
            value={formData.Last_Name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Mobile Number:
          <input
            type="text"
            name="Mobile_Number"
            value={formData.Mobile_Number}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email ID:
          <input
            type="email"
            name="Email_ID"
            value={formData.Email_ID}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Date of Birth:
          <input
            type="date"
            name="Date_of_Birth"
            value={formData.Date_of_Birth}
            onChange={handleChange}
            required
          />
        </label>

        {/* Submit button */}
        <button type="submit" className={styles.registerButton}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;