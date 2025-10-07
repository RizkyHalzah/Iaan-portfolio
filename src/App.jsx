import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ToolsSection from "./components/ToolsSection";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container mx-auto px-12 scroll-smooth">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about" className="scroll-mt-20">
        <About />
      </section>

      <section id="tools" className="scroll-mt-20">
        <ToolsSection />
      </section>

      <section id="project" className="scroll-mt-20">
        <Project />
      </section>

      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
