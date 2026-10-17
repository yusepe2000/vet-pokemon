import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Text from '../../components/atoms/Text.jsx';
 
afterEach(cleanup);
 
describe('Text', () => {
    
  it('muestra el texto que recibe', () => {
    render(<Text variant="p">Hola Pokémon</Text>);
    expect(screen.getByText('Hola Pokémon')).toBeTruthy();
  });
 
  it('con variant="p" crea un párrafo', () => {
    render(<Text variant="p">Párrafo</Text>);
    expect(screen.getByText('Párrafo').tagName).toBe('P');
  });
 
  it('con variant="h2" crea un título y aplica la clase', () => {
    render(<Text variant="h2" className="servicios-titulo">Título</Text>);
    const titulo = screen.getByText('Título');
    expect(titulo.tagName).toBe('H2');
    expect(titulo.className).toContain('servicios-titulo');
  });
});