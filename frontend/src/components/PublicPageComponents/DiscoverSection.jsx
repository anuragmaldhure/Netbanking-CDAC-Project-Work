import React from "react";
import styles from "./DiscoverSection.module.css";
import { Link as ScrollLink } from "react-scroll";

const DiscoverSection = () => {
  return (
    <section id="discover" className={`discover py-3 ${styles.discover}`}>
      <div className={`row align-items-center container my-3 mx-auto`}>
        <div className={`img col-lg-6 col-md-6 col-12 pt-5 pb-5 ${styles.img}`}>
          <img
            className="img-fluid"
            src="../../assets/images/2.png"
            alt="Discover Section"
          />
        </div>
        <div
          className={`text col-lg-6 col-md-6 col-12 pt-5 pb-5 ${styles.text}`}
        >
          <h6 className={styles.title}>CONVENIENT ACCESS</h6>
          <h2 className={styles.heading}>Login Anytime, Anywhere</h2>
          <p className={styles.description}>
            Access your account seamlessly from any device, whether it's your laptop, tablet, or smartphone. Enjoy the convenience of managing your account on the go, without any restrictions on time or location. We keep security top notch and all transactions need OTP verification from your email.
          </p>

          <ScrollLink
            to="service" // Replace 'service' with the ID of the next section
            spy={true}
            smooth={true}
            offset={-70}
            duration={200}
            className={styles.learnMoreLink}
          >
            Learn More
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;