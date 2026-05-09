import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Location from "../components/Location";
import FloatingContact from "../components/FloatingContact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Section Divider */}
      <div className="section-divider" />

      <Services />

      <div className="section-divider" />

      <Gallery />

      <div className="section-divider" />

      <Testimonials />

      <div className="section-divider" />

      <Location />

      <FloatingContact />
      <Footer />
    </>
  );
}

export default Home;