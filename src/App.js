import React from "react";
import "./App.css";
import Image from './Image'
import ProjectsSection from "./ProjectsSection";
import AboutUs from './AboutUs'
import './Navbar.css'
import Skills from "./Skills";
import Contact from "./Contact";

function App() {
  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <div className="navbar">
        <div className="navbar-content">
          <ul>
            <li onClick={() => scrollTo("home")}>Home</li>
            <li onClick={() => scrollTo("about")}>About</li>
            <li onClick={() => scrollTo("project")}>Projects</li>
            <li onClick={() => scrollTo("skills")}>Skills</li>
            <li onClick={() => scrollTo("contact")}>Contact</li>
          </ul>
        </div>
      </div>
      <main>
        <section id="home">
          <Image />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="project">
          <ProjectsSection />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
