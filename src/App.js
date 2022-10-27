import IntroSection from "./components/sections/IntroSection";
import Navbar from "./components/sections/Navbar";
import AboutSection from "./components/sections/AboutSection";
import ContactIcons from "./components/ux/ContactIcons";


function App() {
  return (
    <section className="font-montserrat bg-[#CAD2C5] h-screen">
      <Navbar />
      <IntroSection />
      <AboutSection />

      <ContactIcons />
    </section>
  );
}

export default App;
