import React from "react";
import '../stylesheets/Mapa.sass'

function Mapa() {
    return (
        <div id="mapa">
            <h2>Donde encontrarnos</h2>
            <p>Gral. Gregorio Aráoz de Lamadrid 606</p>
            <div className="map-wrapper">
                <iframe className="googlemap"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.651993585004!2d-58.36312658473961!3d-34.63823368045056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334b0854c4db5%3A0xf6439e3997612974!2sGral.%20Gregorio%20Ar%C3%A1oz%20de%20Lamadrid%20606%2C%20C1166%20AAL%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1629052951344!5m2!1ses!2sar"
                    width="600"
                    height="450"
                    style={{border: "0"}}
                    loading="lazy"
                    title="Mapa con ubicación del taller"
                />
            </div>
        </div>
    )
}

export default Mapa;