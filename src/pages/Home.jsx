import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PromoBanner from "../components/PromoBanner";
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
      <PromoBanner />
      <Services />
      <Gallery />
      <Testimonials />
      <Location />
      <FloatingContact />
      <Footer />
    </>
  );
}

export default Home;