import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Membership from "./components/Membership";
import Trainers from "./components/Trainers";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen font-inter overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Membership />
      <Trainers />
      <Testimonials />
      <Gallery />
      <Contact />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;