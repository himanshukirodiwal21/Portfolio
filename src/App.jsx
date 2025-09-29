import React from 'react';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

// Import the custom hook for animations
import { useFadeInOnScroll } from './hooks/useFadeIn';

function App() {
  // This line activates the scroll animation for any element with the 'fade-in' class
  useFadeInOnScroll();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
      </main>
      <Footer />
    </>
  );
}

export default App;