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
              src="../../assets/images/1.svg"
              alt="Reduce Expenses"
            />
            <h5 className="fw-bold pt-4">Reduce Expenses</h5>
            <p>
              Take control of your finances now! Implement strategic cost-saving measures to significantly reduce expenses and improve financial health. Let us guide you through making informed decisions for long-term savings and stability. Virtual / Neo banking also reduces our operational expneses.
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
              src="../../assets/images/2.png"
              alt="Virtual Offices"
            />
            <h5 className="fw-bold pt-4">Virtual Offices</h5>
            <p>
              Welcome to the future of work! Our virtual office solutions provide a modern and flexible workspace that adapts to your needs. With advanced technology and seamless connectivity, collaborate effectively with your team from anywhere. Experience convenience and efficiency, redefining the way you work.
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
              src="../../assets/images/3.png"
              alt="Premium Benefits"
            />
            <h5 className="fw-bold pt-4">Premium Benefits</h5>
            <p>
              Enjoy a range of advantages, including personalized services, priority access to events, and special discounts. Our commitment to excellence ensures you receive exceptional value and unparalleled benefits. Join us in unlocking a world of privileges designed to enhance your lifestyle and satisfaction.
            </p>
          </ScrollLink>
        </div>
      </div>
    </section>
  );  
};

export default ServiceSection;