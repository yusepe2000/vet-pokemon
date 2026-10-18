import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import ProductCard from '../../components/molecules/ProductCard.jsx';

const producto = {
  id: 1,
  name: 'Pokeball',
  price: 200,
  category: 'Pokeballs',
  image: 'https://ejemplo.com/pokeball.png',
};

afterEach(cleanup);

describe('ProductCard', () => {
  it('muestra el nombre y el precio del producto', () => {
    render(<ProductCard product={producto} />);
    expect(screen.getByText('Pokeball')).toBeTruthy();
    expect(screen.getByText('$200')).toBeTruthy();
  });

  it('muestra la imagen con su texto alternativo', () => {
    render(<ProductCard product={producto} />);
    expect(screen.getByAltText('Pokeball')).toBeTruthy();
  });

  it('llama a onAgregar y onEliminar al presionar los botones', () => {
    const onAgregar = jasmine.createSpy('spy');
    const onEliminar = jasmine.createSpy('spy');
    render(
      <ProductCard product={producto} onAgregar={onAgregar} onEliminar={onEliminar} />
    );

    fireEvent.click(screen.getByText('Agregar al carrito'));
    fireEvent.click(screen.getByText('Eliminar'));

    expect(onAgregar).toHaveBeenCalledTimes(1);
    expect(onEliminar).toHaveBeenCalledTimes(1);
  });
});