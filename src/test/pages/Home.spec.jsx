import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home.jsx';

afterEach(cleanup);

function mostrarHome() {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<p>Página Nosotros</p>} />
      </Routes>
    </MemoryRouter>
  );
}

describe('Home Page', () => {
  it('muestra el título "Quiénes Somos"', () => {
    mostrarHome();
    expect(screen.getByText('Quiénes Somos')).toBeTruthy();
  });

  it('muestra los cuatro servicios', () => {
    mostrarHome();
    expect(screen.getByText('Cuidado Dental')).toBeTruthy();
    expect(screen.getByText('Enfermedades y Venenos')).toBeTruthy();
    expect(screen.getByText('Heridas de Combate')).toBeTruthy();
    expect(screen.getByText('Cuidado General')).toBeTruthy();
  });

  it('el botón "Ver más" lleva a la página Nosotros', () => {
    mostrarHome();
    fireEvent.click(screen.getByText('Ver mas'));
    expect(screen.getByText('Página Nosotros')).toBeTruthy();
  });
});