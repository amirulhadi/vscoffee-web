import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CoffeeCounter from './components/CoffeeCounter';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen hero-gradient text-text-white">
      <Navbar />
      <main>
        <HeroSection />
        <CoffeeCounter />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
