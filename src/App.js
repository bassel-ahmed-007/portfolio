import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/UI/Hero";
import Skills from "./components/UI/Skills";
import Projects from "./components/UI/Projects";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <main className="container">
        <Hero />
        <Skills />
        <Projects />
      </main>
    </>
  );
}

export default App;
