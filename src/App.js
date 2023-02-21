import IntroSection from "./components/sections/IntroSection";
import Navbar from "./components/sections/Navbar";
import AboutSection from "./components/sections/AboutSection";
import ContactIcons from "./components/ux/ContactIcons";
import WorksSection from "./components/sections/WorksSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/sections/Footer";



function App() {



  return (
    <section className="font-montserrat bg-[#CAD2C5]  ">
      <Navbar />
      <IntroSection />
      <AboutSection />

      <WorksSection  />

      <ContactSection />
      <Footer />

      <ContactIcons />
    </section>
  );
}

export default App;
