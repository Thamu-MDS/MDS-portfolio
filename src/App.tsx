import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import MatrixRain from './components/ui/MatrixRain';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "MDS Thamu | Full Stack Developer";
  }, []);

  return (
    <ThemeProvider>
      <MatrixRain />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;