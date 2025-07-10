import { ScrollTrigger } from "gsap/all";
import Hero from "./components/features/Hero";
import gsap from "gsap";
import About from "./components/features/About";
import Navbar from "./components/features/Navbar";
import Features from "./components/features/Features";
import Story from "./components/features/Story";
import Contact from "./components/features/Contact";
import Footer from "./components/features/Footer";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
