import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import AboutSection from '../../components/organisms/AboutSection.jsx';

afterEach(cleanup);

describe('AboutSection', () => {
  it('muestra el título "Conoce Quiénes Somos"', () => {
    render(<AboutSection />);
    expect(screen.getByText('Conoce')).toBeTruthy();
    expect(screen.getByText('Quiénes Somos')).toBeTruthy();
  });

  it('muestra la descripción de la veterinaria', () => {
    render(<AboutSection />);
    expect(screen.getByText(/dedicación y profesionalismo/)).toBeTruthy();
  });

  it('muestra la imagen y el botón "Ver más"', () => {
    render(<AboutSection />);
    expect(screen.getByAltText('pokemones')).toBeTruthy();
    expect(screen.getByText('Ver más')).toBeTruthy();
  });
});