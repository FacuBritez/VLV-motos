import React from 'react';
import '../stylesheets/Servicios.scss';

function Servicios() {
  return (
    <section id="servicios" className="alt">
      <div className="container">
        <h2 className="section-title center">Nuestros <span>servicios</span></h2>
        <p className="section-lead center">Todo lo que tu moto necesita, en un solo lugar.</p>

        <div className="servicios-grid">
          <div className="servicio reveal">
            <i className="fa-solid fa-wrench"></i>
            <h3>Reparación</h3>
            <p>Arreglos generales y puesta a punto de todo tipo de motos.</p>
          </div>
          <div className="servicio reveal">
            <i className="fa-solid fa-gears"></i>
            <h3>Mantenimiento</h3>
            <p>Service completo, cambio de aceite, filtros y bujías.</p>
          </div>
          <div className="servicio reveal">
            <i className="fa-solid fa-bolt"></i>
            <h3>Eléctrico</h3>
            <p>Instalaciones eléctricas, luces, batería y diagnóstico.</p>
          </div>
          <div className="servicio reveal">
            <i className="fa-solid fa-fire"></i>
            <h3>Soldaduras</h3>
            <p>Trabajos de soldadura y refuerzos con terminación prolija.</p>
          </div>
          <div className="servicio reveal">
            <i className="fa-solid fa-gauge-high"></i>
            <h3>Afinación</h3>
            <p>Regulación de motor, carburación e inyección.</p>
          </div>
          <div className="servicio reveal">
            <i className="fa-solid fa-clipboard-check"></i>
            <h3>Diagnóstico</h3>
            <p>Revisión inicial <b>sin cargo</b> antes de cualquier trabajo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicios;