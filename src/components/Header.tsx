import React from "react";
import '../stylesheets/Header.sass'

function Header() {
    return (
        <header className="header">
            <div className="logo-nav-container">
                <a href="#" className="logo">
                    <img src={require('../assets/logo.png')} alt="" />
                </a>
                <nav className="navigation">
                    <ul>
                        <li><a href="#nosotros">Nosotros</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                        <li><a href="#horarios">Horarios</a></li>
                        <li><a href="#mapa">Taller</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;