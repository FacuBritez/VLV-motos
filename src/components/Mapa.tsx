import React from 'react';
import '../stylesheets/Mapa.scss';

function Mapa() {
  return (
    <section id="mapa" className="alt">
      <div className="container">
        <h2 className="section-title center">Dónde <span>encontrarnos</span></h2>
        <p className="section-lead center">Gral. Gregorio Aráoz de Lamadrid 606, Buenos Aires.</p>

        <div className="mapa-wrap reveal">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.651993585004!2d-58.36312658473961!3d-34.63823368045056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334b0854c4db5%3A0xf6439e3997612974!2sGral.%20Gregorio%20Ar%C3%A1oz%20de%20Lamadrid%20606%2C%20C1166%20AAL%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1629052951344!5m2!1ses!2sar"
            loading="lazy"
            title="Ubicación del taller VLV Motos"
          />
        </div>

        <div className="mapa-actions">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Gral.+Gregorio+Ar%C3%A1oz+de+Lamadrid+606,+C1166+AAL,+Buenos+Aires"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <i className="fa-solid fa-diamond-turn-right"></i> Abrir en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

export default Mapa;