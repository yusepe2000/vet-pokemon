import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import AboutUsText from '../../../components/molecules/AboutUsText.jsx';
 
afterEach(cleanup);
 
describe('AboutUsText', () => {
  it('muestra el título como encabezado', () => {
    render(<AboutUsText titulo="Nuestro equipo">Texto</AboutUsText>);
    expect(screen.getByRole('heading', { name: 'Nuestro equipo' })).toBeTruthy();
  });
 
  it('muestra el texto que recibe', () => {
    render(<AboutUsText titulo="Título">Cuidamos a cada Pokémon</AboutUsText>);
    expect(screen.getByText('Cuidamos a cada Pokémon')).toBeTruthy();
  });
 
  it('usa la clase texto-nosotros en el contenedor', () => {
    const { container } = render(<AboutUsText titulo="Título">Texto</AboutUsText>);
    expect(container.querySelector('.texto-nosotros')).toBeTruthy();
  });
});