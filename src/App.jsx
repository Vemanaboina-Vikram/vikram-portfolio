import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";


function App() {
  return (
    <>
    
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Projects />
      <Experience />
      <Research />
      <Achievements />
      <Contact />
      <Footer />
      
    </>
  );
}

export default App;