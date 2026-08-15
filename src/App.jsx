import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Creative } from "./components/Creative/Creative";
import { Why } from "./components/why/Why";
import { useScrollReveal } from "./hooks/useScrollReveal";

function App() {
  useScrollReveal();

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Why />
      <About />
      <Experience />
      <Projects />
      <Creative/>
      <Contact />
    </div>
  );
}

export default App;
