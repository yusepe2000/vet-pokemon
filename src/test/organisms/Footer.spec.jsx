import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Footer from '../../components/organisms/Footer.jsx';

afterEach(cleanup);

describe('Footer', () => {
  it('muestra el lema de la veterinaria', () => {
    render(<Footer />);
    expect(screen.getByText('Veterinaria Huellitas - Cuidando pokemones desde 1996')).toBeTruthy();
  });

  it('muestra los derechos reservados', () => {
    render(<Footer />);
    expect(
      screen.getByText('© 2026 Veterinaria Huellitas. Todos los derechos reservados.')
    ).toBeTruthy();
  });

  it('se renderiza como etiqueta footer con dos párrafos', () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('footer')).toBeTruthy();
    expect(container.querySelectorAll('p').length).toBe(2);
  });
});