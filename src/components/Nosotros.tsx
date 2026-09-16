import React, { useState } from 'react';
import '../stylesheets/Nosotros.scss';

const VIDEO_ID = 'shj5StU1uWY';

function Nosotros() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="nosotros">
      <div className="container">
        <div className="nosotros-grid">
          <div className="nosotros-text reveal">
            <h2 className="section-title">Sobre <span>nosotros</span></h2>
            <p className="nosotros-intro">Un taller hecho a mano, con años de oficio.</p>
            <p>
              Somos un taller mecánico de motos con más de <b>15 años de experiencia</b>.
              Nos enfocamos en brindar servicios de reparación y mantenimiento de alta calidad,
              incluyendo instalaciones eléctricas, afinación y soldaduras, entre otros.
            </p>
            <p>
              Ofrecemos <b>diagnóstico sin cargo</b> para garantizar que tu moto reciba la atención adecuada.
              Si buscás un taller confiable y profesional, <b>contactanos hoy mismo</b>.
            </p>
            <span className="badge-exp">+15 años de oficio</span>
          </div>

          <div className="video-wrap reveal">
            {playing ? (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                title="Video del taller"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <div className="video-thumb" onClick={() => setPlaying(true)}>
                <img
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt="Miniatura del video del taller"
                />
                <button className="play-btn" aria-label="Reproducir video">
                  <i className="fa-solid fa-play"></i>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;