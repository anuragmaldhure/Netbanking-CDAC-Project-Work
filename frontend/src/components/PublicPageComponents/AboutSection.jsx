import React, { useEffect } from "react";
import styles from "./AboutSection.module.css"; // Import the new CSS file
import { Link as ScrollLink } from "react-scroll";

const AboutSection = () => {
  useEffect(() => {
    const aboutText = document.querySelector(".text");
    aboutText.classList.add("show");
  }, []);

  return (
    <section id="about" className={`about py-3 ${styles.about}`}>
      <div className="row align-items-center container my-3 mx-auto">
        <div
          className={`text col-lg-6 col-md-6 col-12 pt-5 pb-5 ${styles.text}`}
        >
          <h6>PREMIUM BANK</h6>
          <h2>Unlimited Transaction with zero fees</h2>
          <p>
            Welcome to AARNA Bank, where we redefine your banking experience.
            Enjoy the freedom of unlimited transactions with zero fees. Our
            cutting-edge technology ensures seamless and secure online banking
            for all your financial needs.
          </p>
          <p>
            At AARNA Bank, we prioritize your convenience. Access your account
            anytime, anywhere, and make transactions without worrying about
            hidden charges. Experience the future of banking with us.
          </p>
          <ScrollLink
            to="discover" // Replace 'discover' with the ID of the next section
            spy={true}
            smooth={true}
            offset={-70}
            duration={200}
            className={styles.learnMore}
          >
            Learn More
          </ScrollLink>
        </div>
        <div className={`img col-lg-6 col-md-6 col-12 pt-5 pb-5 ${styles.img}`}>
          <img
            className="img-fluid"
            src="../../assets/images/1.svg"
            alt="About Section"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
