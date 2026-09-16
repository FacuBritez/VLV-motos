import React from 'react';
import '../stylesheets/Hero.scss';

function Hero() {
  return (
    <header className="hero" id="inicio">
      <div className="hero-inner">
        <span className="hero-kicker">Buenos Aires · Desde 2008</span>
        <h1>VLV <em>Motos</em></h1>
        <p>
          Taller de barrio, servicio profesional. Reparación, mantenimiento y
          diagnóstico sin cargo para que tu moto esté siempre a punto.
        </p>
        <div className="hero-cta">
          <a
            href="https://wa.me/5491159447636"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <i className="fa-brands fa-whatsapp"></i> Escribinos
          </a>
          <a href="#mapa" className="btn btn-ghost">Ver taller</a>
        </div>
      </div>
    </header>
  );
}

export default Hero;