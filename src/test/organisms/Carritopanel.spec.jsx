import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import CarritoPanel from '../../components/organisms/Carritopanel.jsx';
 
const p1 = { id: 1, name: 'Pokeball', price: 200, image: 'https://ejemplo.com/a.png' };
const p2 = { id: 2, name: 'Superball', price: 600, image: 'https://ejemplo.com/b.png' };
 
afterEach(cleanup);
 
describe('Carritopanel', () => {
  it('muestra el mensaje de carrito vacío y el total en 0', () => {
    render(<CarritoPanel carrito={[]} total={0} onQuitar={() => {}} />);
    expect(screen.getByText('El carrito está vacío')).toBeTruthy();
    expect(screen.getByText('Total: $0')).toBeTruthy();
  });
 
  it('lista los productos y muestra el total a pagar', () => {
    render(<CarritoPanel carrito={[p1, p2]} total={800} onQuitar={() => {}} />);
    expect(screen.getByText('Pokeball')).toBeTruthy();
    expect(screen.getByText('Superball')).toBeTruthy();
    expect(screen.getByText('Total: $800')).toBeTruthy();
  });
 
  it('llama a onQuitar con la posición del producto', () => {
    const onQuitar = jasmine.createSpy('spy');
    render(<CarritoPanel carrito={[p1, p2]} total={800} onQuitar={onQuitar} />);
    fireEvent.click(screen.getAllByText('Quitar')[1]);
    expect(onQuitar).toHaveBeenCalledWith(1);
  });
});