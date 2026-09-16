import React from 'react';
import '../stylesheets/Footer.scss';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        Copyright © {year} · Desarrollado por{' '}
        <a
          href="https://www.linkedin.com/in/facundoivanbritez/"
          target="_blank"
          rel="noreferrer"
        >
          Facundo Britez
        </a>
      </div>
    </footer>
  );
}

export default Footer;