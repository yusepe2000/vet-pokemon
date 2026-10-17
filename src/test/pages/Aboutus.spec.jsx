import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import AboutUs from '../../pages/AboutUs.jsx';
 
afterEach(cleanup);
 
describe('AboutUs Page', () => {
  it('muestra el título de la página', () => {
    render(<AboutUs />);
    expect(
      screen.getByRole('heading', { name: 'Queremos ser el mejor compañero para tu Pokémon' })
    ).toBeTruthy();
  });
 
  it('menciona el cuidado de los Pokémon', () => {
    render(<AboutUs />);
    expect(screen.getByText(/cuidado y la mejor atención/)).toBeTruthy();
  });
 
  it('muestra la imagen de la veterinaria', () => {
    render(<AboutUs />);
    expect(screen.getByAltText('veterinaria')).toBeTruthy();
  });
});