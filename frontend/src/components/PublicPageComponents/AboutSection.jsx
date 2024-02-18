import React, { useEffect } from "react";
import styles from "./AboutSection.module.css";
import { Link as ScrollLink } from "react-scroll";

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

const AboutSection = () => {
  useEffect(() => {
    const aboutText = document.querySelector(`.${styles.text}`);
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            minus animi qui aperiam illo quae voluptas a distinctio veritatis!
            Rerum similique consequatur tenetur! Obcaecati repellendus nihil
            illum natus harum sequi?
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