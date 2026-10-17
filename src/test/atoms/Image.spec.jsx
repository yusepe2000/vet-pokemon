import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Image from '../../components/atoms/Image.jsx';
 
afterEach(cleanup);
 
describe('Image', () => {
  it('muestra la imagen con su src', () => {
    render(<Image src="https://ejemplo.com/pika.png" alt="Pikachu" />);
    expect(screen.getByAltText('Pikachu').getAttribute('src')).toBe(
      'https://ejemplo.com/pika.png'
    );
  });
 
  it('usa el texto alternativo recibido', () => {
    render(<Image src="https://ejemplo.com/a.png" alt="Logo Huellitas" />);
    expect(screen.getByAltText('Logo Huellitas')).toBeTruthy();
  });
 
  it('aplica la clase recibida', () => {
    render(<Image src="https://ejemplo.com/a.png" alt="Foto" className="imgPoke" />);
    expect(screen.getByAltText('Foto').className).toContain('imgPoke');
  });
});