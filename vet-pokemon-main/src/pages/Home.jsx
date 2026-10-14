import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../components/atoms/Image';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';


function Home() {
  const navigate = useNavigate();

  const servicios = [
    { id: 1, name: 'Cuidado Dental' },
    { id: 2, name: 'Enfermedades y Venenos' },
    { id: 3, name: 'Heridas de Combate' },
    { id: 4, name: 'Cuidado General' }
  ];

  return (
    <main>
      
      <div className="seccion-index">
        <article id="Nosotros">
          <div className="nosotros-imagen">
            <Image 
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" 
              alt="Pokémones" 
              className="imgPoke" 
            />
          </div>
          <div className="nosotros-texto">
            <Text variant="h2">
              <span className="titulo-rojo">Conoce </span>
              <span className="titulo-celeste">Quiénes Somos</span>
            </Text>
            <Text variant="p">
              En Huellitas cuidamos a cada Pokémon con amor, dedicación y profesionalismo.
              Nuestro objetivo es mantenerlos sanos, felices y listos para vivir nuevas aventuras junto a sus entrenadores.
            </Text>
            <Button onClick={() => navigate('/products')}>
              Ver más
            </Button>
          </div>
        </article>
      </div>

      
      <section id="Servicios" className="seccion-servicios">
        <Text variant="h2" className="servicios-titulo">
          Nuestros <span className="destacado">Servicios</span>
        </Text>

        <div className="servicios-grid">
          {servicios.map((s) => (
            <div key={s.id} className="servicio-card">
              <Text variant="p">{s.name}</Text>
            </div>
          ))}
        </div>

        <article id="contacto">
          <div>
            <Text variant="h2">Contacto</Text>
            <a href="mailto:mat.oviedo@duocuc.cl">
              <Image 
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png" 
                alt="Email" 
                className="img-contacto" 
              />
            </a>
            <a href="tel:+56912341234">
              <Image 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02Zu33YkwMxUTIyO7t_qw_bywcv8LmeJ2wfFVQDbKbQ&s=10" 
                alt="Teléfono" 
                className="img-contacto" 
              />
            </a>
            <a href="https://www.instagram.com/poke_veterinaria/" target="_blank" rel="noreferrer">
              <Image 
                src="https://www.designenlassen.de/blog/wp-content/uploads/2024/02/Instagram_icon.png.webp" 
                alt="Instagram" 
                className="img-contacto" 
              />
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Home;