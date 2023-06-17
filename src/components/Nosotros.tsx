import React from "react";
import '../stylesheets/Nosotros.sass'

function Nosotros() {

    const year: number = new Date().getFullYear() - 2008;

    return (
        <>
            <div id="separador"></div> {/*Borde rojo entre el banner y el contenido*/}
            <div className="ancla" id="nosotros">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <h2>Sobre nosotros</h2>
                            {/*Tabla descripción*/}
                            <p>
                                Somos un taller mecánico de motos con más de
                                <b> {year} años de experiencia</b>.
                                Nos enfocamos en brindar servicios de reparación
                                y mantenimiento de alta calidad, incluyendo instalaciones
                                eléctricas, afinación y soldaduras, entre otros.
                                Ofrecemos diagnóstico sin cargo para garantizar
                                que su moto reciba la atención adecuada.
                                <br />Si está buscando un taller mecánico de motos confiable
                                y profesional ¡Contáctenos hoy mismo!
                            </p>
                        </div>
                        <div className="col-lg-6 col-12 iframe">
                            <div>
                                <iframe className="video" width="100%" height="315" src="https://www.youtube.com/embed/shj5StU1uWY"
                                    title="YouTube video player"
                                    style={{ border: "none" }}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nosotros;