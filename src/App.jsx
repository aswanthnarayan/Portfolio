import React, { useState, useEffect } from 'react';
import './App.css';
import ParticleBg from './components/ParticleBg';
import Navbar from './components/Navbar';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > window.innerHeight) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className=''>
      <ParticleBg/>
      <div className="max-w-screen relative z-1 text-white flex flex-col">
        <Navbar />
        <section>
          <HomePage/>
        </section>
        <section>
          <AboutPage/>
        </section>
        <section>
          <ProjectsPage/>
        </section>
        <section>
          <ExperiencePage/>
        </section>
        <section>
          <EducationPage/>
        </section>
        <section>
          <ContactPage/>
        </section>
        {showScrollButton && <ScrollToTopButton />}
      </div>
    </div>
  );
}

export default App;
