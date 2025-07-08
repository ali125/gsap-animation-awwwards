import { ScrollTrigger } from "gsap/all";
import Hero from "./components/features/Hero";
import gsap from "gsap";
import About from "./components/features/About";
import Navbar from "./components/features/Navbar";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
};

export default App;
