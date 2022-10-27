import IntroSection from "./components/sections/IntroSection";
import Navbar from "./components/sections/Navbar";
import AboutSection from "./components/sections/AboutSection";
import ContactIcons from "./components/ux/ContactIcons";
import WorksSection from "./components/sections/WorksSection";


function App() {
  return (
    <section className="font-montserrat bg-[#CAD2C5] h-[2000px] ">
      <Navbar />
      <IntroSection />
      <AboutSection />
      <WorksSection />

      <ContactIcons />
    </section>
  );
}

export default App;
