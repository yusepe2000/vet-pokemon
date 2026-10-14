import React from 'react';
import { Link } from 'react-router-dom';
import logoPoke from '../image/logoPoke.webp';

export const Header = () => {
  return (
    <header id="header">
      <div className="marca">
        <img src={logoPoke} alt="Logo Veterinaria Huellitas" className="logo" />
        <h1>Veterinaria Huellitas</h1>
      </div>

      <nav>
        <Link to="/">Inicio</Link>
        <a href="/#Nosotros">Nosotros</a>
        <Link to="/products">Productos</Link>
        <a href="/#Servicios">Servicios</a>
        <a href="/#contacto">Contacto</a>
      </nav>

      <section>
        <a href="#register">Regístrate</a>
        <a href="#login">Iniciar Sesión</a>
      </section>
    </header>
  );
};

export default Header;
