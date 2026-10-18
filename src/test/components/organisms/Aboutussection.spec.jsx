import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import AboutUsSection from '../../../components/organisms/AboutUsSection.jsx';

afterEach(cleanup);

describe('AboutUsSection', () => {
  it('muestra el título principal', () => {
    render(<AboutUsSection />);
    expect(
      screen.getByRole('heading', { name: 'Queremos ser el mejor compañero para tu Pokémon' })
    ).toBeTruthy();
  });

  it('muestra el texto de la veterinaria', () => {
    render(<AboutUsSection />);
    expect(screen.getByText(/cada huellita cuenta/)).toBeTruthy();
  });

  it('muestra la imagen de la veterinaria', () => {
    render(<AboutUsSection />);
    expect(screen.getByAltText('veterinaria')).toBeTruthy();
  });
});