import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Products from '../../pages/Products.jsx';

afterEach(cleanup);

describe('Products Page', () => {
  it('muestra las tres categorías de productos', () => {
    render(<Products />);
    expect(screen.getByText('Pokeballs')).toBeTruthy();
    expect(screen.getByText('Caramelos')).toBeTruthy();
    expect(screen.getByText('Piedras Evolutivas')).toBeTruthy();
  });

  it('el contador del carrito sube al agregar un producto', () => {
    render(<Products />);
    expect(screen.getByRole('button', { name: 'Carrito: 0 productos' })).toBeTruthy();

    fireEvent.click(screen.getAllByText('Agregar al carrito')[0]);

    expect(screen.getByRole('button', { name: 'Carrito: 1 productos' })).toBeTruthy();
  });

  it('la ventanilla muestra el total y permite quitar el producto', () => {
    render(<Products />);
    fireEvent.click(screen.getAllByText('Agregar al carrito')[0]); // Pokeball $200
    fireEvent.click(screen.getByRole('button', { name: 'Carrito: 1 productos' }));

    expect(screen.getByText('Tu carrito')).toBeTruthy();
    expect(screen.getByText('Total: $200')).toBeTruthy();

    fireEvent.click(screen.getByText('Quitar'));
    expect(screen.getByText('El carrito está vacío')).toBeTruthy();
  });
});