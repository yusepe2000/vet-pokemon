import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Button from '../../components/atoms/Button.jsx';

afterEach(cleanup);

describe('Button', () => {
  it('muestra el texto que recibe', () => {
    render(<Button>Agregar</Button>);
    expect(screen.getByText('Agregar')).toBeTruthy();
  });

  it('llama a onClick al hacer clic', () => {
    const onClick = jasmine.createSpy('spy');
    render(<Button onClick={onClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('aplica la clase recibida y es de tipo button', () => {
    render(<Button className="Agregar">Hola</Button>);
    const boton = screen.getByRole('button');
    expect(boton.className).toContain('Agregar');
    expect(boton.getAttribute('type')).toBe('button');
  });
});