import React from 'react';
import MuchosPokes from '../../data/image/MuchosPokes.webp'; 
import '../../styles/organismsStyle/Aboutsection.css';
import Text from '../atoms/Text';
import Image from '../atoms/Image';

export const AboutSection = () => {
  return (
    <div className="seccion-index">
      <article id="Nosotros">
        <div className="nosotros-imagen">
          <Image src={MuchosPokes} alt="pokemones" className="imgPoke" />
        </div>
        <div className="nosotros-texto">
          <Text variant='h2'>
            <Text variant='span' className="titulo-rojo">Conoce </Text>
            <Text variant='span' className="titulo-celeste">Quiénes Somos</Text>
          </Text>
          <Text variant='p'>
            En Huellitas cuidamos a cada Pokémon con amor, dedicación y profesionalismo.
            Nuestro objetivo es mantenerlos sanos, felices y listos para vivir nuevas aventuras junto a sus entrenadores.
          </Text>
          <a href="#nosotros" className="btn">Ver más</a>
        </div>
      </article>
    </div>
  );
};

export default AboutSection;