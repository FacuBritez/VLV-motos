import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import Mapa from './components/Mapa';
import Footer from './components/Footer';
import { useReveal } from './hooks/useReveal';

function App() {
  useReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <Nosotros />
      <Servicios />
      <Contacto />
      <Mapa />
      <Footer />
    </>
  );
}

export default App;