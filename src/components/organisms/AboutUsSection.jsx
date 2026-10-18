import AboutUsText from '../molecules/AboutUsText';
import enfermera from '../../data/image/enfermera.webp';
import '../../styles/organismsStyle/AboutUssection.css';

function AboutUsSection() {
  return (
    <div className="seccion-nosotros">
      <AboutUsText titulo="Queremos ser el mejor compañero para tu Pokémon">
        En Huellitas, creemos que cada Pokémon merece recibir amor, cuidado y la mejor
        atención. Somos una veterinaria dedicada al bienestar de nuestros queridos
        compañeros Pokémon, ofreciendo un espacio seguro, acogedor y lleno de cariño para
        cuidar de ellos en cada etapa de su vida. Nuestro equipo trabaja con pasión para
        mantener a cada Pokémon saludable, feliz y listo para seguir viviendo grandes
        aventuras junto a sus entrenadores. Desde un pequeño Pikachu hasta un poderoso
        Charizard, en Huellitas todos reciben el cuidado que merecen. Porque para
        nosotros, cada huellita cuenta y cada Pokémon es parte de nuestra familia.
      </AboutUsText>
      <img src={enfermera} alt="veterinaria" className="img-nosotros" />
    </div>
    
  );
}

export default AboutUsSection;