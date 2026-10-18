import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import AdminLock from '../../../components/templates/AdminLock';
import { iniciarSesion } from '../../../data/auth';

const montar = () =>
  render(
    <MemoryRouter initialEntries={['/admin']}>
      <Routes>
        <Route
          path="/admin"
          element={
            <AdminLock>
              <p>Contenido secreto</p>
            </AdminLock>
          }
        />
        <Route path="/login" element={<p>Pantalla de login</p>} />
        <Route path="/" element={<p>Pantalla de inicio</p>} />
      </Routes>
    </MemoryRouter>
  );

describe('AdminLock', () => {
  it('sin sesión redirige a /login', () => {
    montar();
    expect(screen.getByText('Pantalla de login')).toBeTruthy();
    expect(screen.queryByText('Contenido secreto')).toBeNull();
  });

  it('con sesión de cliente redirige al inicio', () => {
    iniciarSesion({ nombre: 'Ash', email: 'ash@duoc.cl', rol: 'cliente' });
    montar();
    expect(screen.getByText('Pantalla de inicio')).toBeTruthy();
    expect(screen.queryByText('Contenido secreto')).toBeNull();
  });

  it('con sesión de administrador muestra el contenido', () => {
    iniciarSesion({ nombre: 'Joy', email: 'admin@duoc.cl', rol: 'admin' });
    montar();
    expect(screen.getByText('Contenido secreto')).toBeTruthy();
  });
});
