import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../../../components/organisms/Header.jsx';

afterEach(cleanup);

function mostrarHeader() {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
}

describe('Header', () => {
  it('muestra el nombre y el logo de la veterinaria', () => {
    mostrarHeader();
    expect(screen.getByText('Veterinaria Huellitas')).toBeTruthy();
    expect(screen.getByAltText('Logo Veterinaria Huellitas')).toBeTruthy();
  });

  it('muestra los enlaces del menú', () => {
    mostrarHeader();
    ['Inicio', 'Nosotros', 'Productos', 'Blog'].forEach((texto) => {
      expect(screen.getByText(texto)).toBeTruthy();
    });
  });

  it('los enlaces apuntan a las rutas correctas', () => {
    mostrarHeader();
    expect(screen.getByText('Nosotros').getAttribute('href')).toBe('/nosotros');
    expect(screen.getByText('Productos').getAttribute('href')).toBe('/products');
    expect(screen.getByText('Blog').getAttribute('href')).toBe('/blog');
  });
});