import React from "react";

import { Link } from "react-router-dom"; // Import Link from react-router-dom
import styles from "./SignUpSection.module.css";

const SignUpSection = () => {
  return (
    <section id="signup" className={`signup py-3 ${styles.signup}`}>
      <div className="row align-items-center container my-3 mx-auto">
        <div
          className={`text col-lg-6 col-md-6 col-12 pt-5 pb-5 ${styles.text}`}
        >
          <h6>JOIN OUR TEAM</h6>
          <h2>Creating an account is incredibly simple</h2>
          <p>
            Joining our team is just a few clicks away. Experience a seamless registration process that takes only minutes to complete. Get ready to embark on a rewarding journey with us!
          </p>

          <Link to="/Signup" className={styles.startNow}>
            
              Start Now
           
          </Link>
        </div>
        <div className={`img col-lg-6 col-md-6 col-12 pt-5 pb-5 ${styles.img}`}>
          <img
            className="img-fluid"
            src="../../assets/images/4.png"
            alt="Sign Up Section"
          />
        </div>
      </div>
    </section>
  );
};

export default SignUpSection;
