import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import BlogCard from '../../components/molecules/BlogCard.jsx';
 
const post = {
  id: 1,
  titulo: 'UN CHARMANDER LLEGÓ CON LA COLA APAGADA',
  fecha: '3 sep 2025',
  categoria: 'Urgencias',
  texto: 'El Centro Pokémon recibió de madrugada a un Charmander.',
  image: 'https://ejemplo.com/charmander.png',
  alt: 'Charmander recuperado',
};
 
afterEach(cleanup);
 
describe('BlogCard', () => {
  it('muestra el título y el texto de la noticia', () => {
    render(<BlogCard post={post} />);
    expect(screen.getByText('UN CHARMANDER LLEGÓ CON LA COLA APAGADA')).toBeTruthy();
    expect(screen.getByText('El Centro Pokémon recibió de madrugada a un Charmander.')).toBeTruthy();
  });
 
  it('muestra la fecha y la categoría', () => {
    render(<BlogCard post={post} />);
    expect(screen.getByText('3 sep 2025 | Urgencias')).toBeTruthy();
  });
 
  it('muestra la imagen con su texto alternativo', () => {
    render(<BlogCard post={post} />);
    expect(screen.getByAltText('Charmander recuperado')).toBeTruthy();
  });
});
