import React from "react";

function Contacto() {

    return (
        <div> {/*sin este div no se queda centrado*/}
            <div id="contacto">
                <h2>Información de contacto</h2>
                <br />
                <p>Mandanos un mensaje!</p>
                <div className="links">
                    <a href="https://api.whatsapp.com/send?phone=011 5944-7636" target="_blank">
                        <i className="fab fa-whatsapp" style={{color: "#25d366"}}></i> 011 5944-7636
                    </a>
                    <a href="mailto:vlv-motos@outlook.com" target="_blank" style={{ whiteSpace: 'nowrap' }}>
                        <i className="far fa-envelope" style={{color: "grey"}}></i> vlv-motos@outlook.com
                    </a>
                    <br />
                    <a href="https://www.facebook.com/Vlv-motos-180447498801595" target="_blank">
                        <i className="fab fa-facebook-f" style={{color: "#3b5998"}}></i> vlv-motos
                    </a>
                    <a href="" target="_blank"></a>
                </div>
            </div>
            <div id="horarios">
                <h2>
                    Horarios
                </h2>
                <p>
                    Lun-Vie: 9.00 am - 21.00 pm<br />
                    Sábado: Cerrado<br />
                    Domingo: Cerrado
                </p>
            </div>
        </div>
    )
}

export default Contacto;