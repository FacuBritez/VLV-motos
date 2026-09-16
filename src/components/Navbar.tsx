import React, { useEffect, useState } from 'react';
import '../stylesheets/Navbar.scss';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#inicio" className="brand">
          VLV<span>.</span>Motos
        </a>
        <ul className="nav-links">
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#contacto">Contacto</a></li>
          <li><a href="#mapa">Taller</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;