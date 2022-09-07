import React, { useState, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import PortfolioContainer from "./components/PortfolioContainer";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const storageKey = "theme-preference";

  const getColorPreference = () => {
    if (localStorage.getItem(storageKey))
      return localStorage.getItem(storageKey);
    else
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  };

  const [theme, setTheme] = useState(getColorPreference);

  return (
    <div className={`App ${theme}-background min-h-screen`}>
      <Nav
        theme={theme}
        setTheme={setTheme}
        introRef={introRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <div className="intro">
        <Header theme={theme} setTheme={setTheme} introRef={introRef} />
      </div>
      <About theme={theme} aboutRef={aboutRef} />
      <PortfolioContainer theme={theme} projectsRef={projectsRef} />
      <Contact theme={theme} contactRef={contactRef} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
