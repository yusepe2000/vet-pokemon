import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Navbar from '../../../components/organisms/Navbar.jsx';
 
afterEach(cleanup);
 
describe('Navbar', () => {
  it('muestra el nombre de la veterinaria', () => {
    render(<Navbar />);
    expect(screen.getByText('Veterinaria Huellitas')).toBeTruthy();
  });
 
  it('muestra los enlaces Inicio y Productos', () => {
    render(<Navbar />);
    expect(screen.getByText('Inicio')).toBeTruthy();
    expect(screen.getByText('Productos')).toBeTruthy();
  });
 
  it('los enlaces apuntan a las rutas correctas', () => {
    render(<Navbar />);
    expect(screen.getByText('Inicio').getAttribute('href')).toBe('/');
    expect(screen.getByText('Productos').getAttribute('href')).toBe('/products');
  });
});