import React from 'react';
import '../stylesheets/Contacto.scss';

function Contacto() {
  return (
    <section id="contacto">
      <div className="container">
        <h2 className="section-title center">Contacto y <span>horarios</span></h2>
        <p className="section-lead center">Estamos para ayudarte. Escribinos o pasá por el taller.</p>

        <div className="info-grid">
          <div className="info-card reveal">
            <h3>Información de contacto</h3>
            <ul className="contact-list">
              <a href="https://wa.me/5491159447636" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-whatsapp"></i>
                <span>
                  <span className="label">WhatsApp</span>
                  <span className="value">+54 11 5944-7636</span>
                </span>
              </a>

              <a href="mailto:vlv-motos@outlook.com" target="_blank" rel="noreferrer">
                <i className="fa-solid fa-envelope"></i>
                <span>
                  <span className="label">Email</span>
                  <span className="value">vlv-motos@outlook.com</span>
                </span>
              </a>

              <a href="https://www.facebook.com/Vlv-motos-180447498801595" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-facebook"></i>
                <span>
                  <span className="label">Facebook</span>
                  <span className="value">VLV Motos</span>
                </span>
              </a>
            </ul>
          </div>

          <div className="info-card reveal">
            <h3>Horarios de atención</h3>
            <ul className="horarios-list">
              <li><span className="day">Lunes a Viernes</span><span className="hour">9:00 – 21:00</span></li>
              <li><span className="day">Sábado</span><span className="closed">Cerrado</span></li>
              <li><span className="day">Domingo</span><span className="closed">Cerrado</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;