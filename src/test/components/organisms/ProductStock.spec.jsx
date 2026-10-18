import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import ProductStock from '../../components/organisms/ProductStock.jsx';

const producto = {
  id: 3,
  name: 'Ultraball',
  price: 1200,
  image: 'https://ejemplo.com/a.png',
  descripcion: 'Muy buena para capturar pokemon dificiles.',
  stock: 15,
};

afterEach(cleanup);

describe('ProductStock', () => {
  it('no muestra nada cuando no hay producto seleccionado', () => {
    const { container } = render(
      <ProductStock producto={null} onCerrar={() => {}} onAgregar={() => {}} />
    );
    expect(container.firstChild).toBeNull();
  });

  it('muestra nombre, descripción, precio y stock del producto', () => {
    render(<ProductStock producto={producto} onCerrar={() => {}} onAgregar={() => {}} />);
    expect(screen.getByText('Ultraball')).toBeTruthy();
    expect(screen.getByText('Muy buena para capturar pokemon dificiles.')).toBeTruthy();
    expect(screen.getByText('Precio: $1200')).toBeTruthy();
    expect(screen.getByText('Stock: 15')).toBeTruthy();
  });

  it('agrega y cierra con el botón, y cierra con la X', () => {
    const onAgregar = jasmine.createSpy('agregar');
    const onCerrar = jasmine.createSpy('cerrar');
    render(<ProductStock producto={producto} onCerrar={onCerrar} onAgregar={onAgregar} />);

    fireEvent.click(screen.getByText('Agregar al carrito'));
    expect(onAgregar).toHaveBeenCalled();
    expect(onCerrar).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByLabelText('Cerrar'));
    expect(onCerrar).toHaveBeenCalledTimes(2);
  });
});