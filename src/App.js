import IntroSection from "./components/sections/IntroSection";
import Navbar from "./components/sections/Navbar";
import AboutSection from "./components/sections/AboutSection";


function App() {
  return (
    <section className="font-montserrat bg-[#CAD2C5] h-screen">
      <Navbar />
      <IntroSection />
      <AboutSection />
    </section>
  );
}

export default App;
