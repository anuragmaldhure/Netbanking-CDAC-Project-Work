import React from "react";
import styles from "./ServiceSection.module.css";
import { Link as ScrollLink } from "react-scroll";

const ServiceSection = () => {
  return (
    <section id="service" className={`service py-2 pb-5 ${styles.service}`}>
      <div className="col mx-auto align-items-center my-2">
        <div className="heading text-center pt-5">
          <h2 className="fw-bolder pb-4 text-light">Our Service</h2>
        </div>
        <div className="row mx-auto justify-content-center align-items-center text-center container">
          {/* First Card */}
          <ScrollLink
            to="reduce-expenses"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`card col-lg-3 col-md-3 col-12 m-2 ${styles.card} ${styles.scrollLink}`} // Apply the scroll-link class here
          >
            <img
              className="img-fluid w-75"
              src="./src/assets/images/1.svg"
              alt="Reduce Expenses"
            />
            <h5 className="fw-bold pt-4">Reduce Expenses</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur, at exercitationem beatae hic doloremque ea.
            </p>
          </ScrollLink>
          {/* Second Card */}
          <ScrollLink
            to="virtual-offices"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`card col-lg-3 col-md-3 col-12 m-2 ${styles.card} ${styles.scrollLink}`} // Apply the scroll-link class here
          >
            <img
              className="img-fluid w-75"
              src="./src/assets/images/2.png"
              alt="Virtual Offices"
            />
            <h5 className="fw-bold pt-4">Virtual Offices</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur, at exercitationem beatae hic doloremque ea.
            </p>
          </ScrollLink>
          {/* Third Card */}
          <ScrollLink
            to="premium-benefits"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`card col-lg-3 col-md-3 col-12 m-2 ${styles.card} ${styles.scrollLink}`} // Apply the scroll-link class here
          >
            <img
              className="img-fluid w-75"
              src="./src/assets/images/3.png"
              alt="Premium Benefits"
            />
            <h5 className="fw-bold pt-4">Premium Benefits</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur, at exercitationem beatae hic doloremque ea.
            </p>
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
