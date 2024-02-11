import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import DiscoverSection from "./components/DiscoverSection";
import ServiceSection from "./components/ServiceSection";
import SignUpSection from "./components/SignupSection";
import Footer from "./components/Footer";
import "./App.css";
import Cursor from "./components/Cursor";


function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DiscoverSection />
      <ServiceSection />
      <SignUpSection />
      <Footer />
      <Cursor />
    </div>
  );
}

export default App;
