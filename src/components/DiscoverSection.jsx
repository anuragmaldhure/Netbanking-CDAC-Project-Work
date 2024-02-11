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
            src="./src/assets/images/2.png"
            alt="Discover Section"
          />
        </div>
        <div
          className={`text col-lg-6 col-md-6 col-12 pt-5 pb-5 ${styles.text}`}
        >
          <h6 className={styles.title}>UNLIMITED ACCESS</h6>
          <h2 className={styles.heading}>Login to your account at any time</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            esse sed maiores ratione quas obcaecati error quae. Earum voluptas
            quaerat et omnis provident maiores placeat velit vitae adipisci
            necessitatibus? Minus!
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
