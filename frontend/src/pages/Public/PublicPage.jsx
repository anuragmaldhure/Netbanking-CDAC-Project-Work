import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.css";

//import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from "../../components/PublicPageComponents/Navbar";
import HeroSection from "../../components/PublicPageComponents/HeroSection";
// import AboutSection from "../../components/PublicPageComponents/AboutSection";
import DiscoverSection from "../../components/PublicPageComponents/DiscoverSection";
import ServiceSection from "../../components/PublicPageComponents/ServiceSection";
import SignUpSection from "../../components/PublicPageComponents/SignUpSection";
import Footer from "../../components/PublicPageComponents/Footer";
// import "./App.css";
import Cursor from "../../components/PublicPageComponents/Cursor";
import AboutSection from "../../components/PublicPageComponents/AboutSection";

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