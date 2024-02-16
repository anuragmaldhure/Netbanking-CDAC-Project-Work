import React from "react";
import { Link as ScrollLink } from "react-scroll";

import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.mid}>
      <video autoPlay muted loop>
        <source
          className={styles.embedResponsive}
          src="../../assets/videos/6.mp4"
          type="video/mp4"
        />
      </video>
      <div className={`${styles.hero} text-center`}>
        <h2 className="text-light display-4 fw-bold">
          Virtual Banking Made Easy
        </h2>
        <p className="text-light mx-auto">
          A virtual bank is a bank that offers its services only via the
          Internet, email, and other electronic means, often including
          telephone, online chat, and mobile check deposit. A virtual bank has
          no branch network.
        </p>
        <ScrollLink
          to="about" // Replace 'about' with the ID of the next section
          spy={true}
          smooth={true}
          offset={-70}
          duration={8000}
        >
          Get Started
        </ScrollLink>
      </div>
    </div>
  );
};

export default HeroSection;