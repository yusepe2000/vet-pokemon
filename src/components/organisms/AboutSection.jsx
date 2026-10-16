import React from 'react';
import muchosPokes from '../image/muchosPokes.webp'; 

export const AboutSection = () => {
  return (
    <div className="seccion-index">
      <article id="Nosotros">
        <div className="nosotros-imagen">
          <img src={muchosPokes} alt="pokemones" className="imgPoke" />
        </div>
        <div className="nosotros-texto">
          <h2>
            <span className="titulo-rojo">Conoce </span>
            <span className="titulo-celeste">Quiénes Somos</span>
          </h2>
          <p>
            En Huellitas cuidamos a cada Pokémon con amor, dedicación y profesionalismo.
            Nuestro objetivo es mantenerlos sanos, felices y listos para vivir nuevas aventuras junto a sus entrenadores.
          </p>
          <a href="#nosotros" className="btn">Ver más</a>
        </div>
      </article>
    </div>
  );
};