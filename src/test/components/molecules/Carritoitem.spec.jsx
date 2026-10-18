import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import CarritoItem from '../../components/molecules/Carritoitem.jsx';

const producto = {
  id: 1,
  name: 'Pokeball',
  price: 200,
  image: 'https://ejemplo.com/pokeball.png',
};

afterEach(cleanup);

describe('Carritoitem', () => {
  it('muestra el nombre y el precio', () => {
    render(<CarritoItem producto={producto} />);
    expect(screen.getByText('Pokeball')).toBeTruthy();
    expect(screen.getByText('$200')).toBeTruthy();
  });

  it('muestra la imagen del producto', () => {
    render(<CarritoItem producto={producto} />);
    expect(screen.getByAltText('Pokeball')).toBeTruthy();
  });

  it('llama a onQuitar al presionar "Quitar"', () => {
    const onQuitar = jasmine.createSpy('spy');
    render(<CarritoItem producto={producto} onQuitar={onQuitar} />);
    fireEvent.click(screen.getByText('Quitar'));
    expect(onQuitar).toHaveBeenCalledTimes(1);
  });
});