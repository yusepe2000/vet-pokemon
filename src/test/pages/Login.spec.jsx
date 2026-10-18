import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Login from '../../pages/Login';
import { obtenerSesion } from '../../data/auth';

const montar = () =>
  render(
    <MemoryRouter initialEntries={['/login']}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<p>Pantalla de inicio</p>} />
        <Route path="/registro" element={<p>Pantalla de registro</p>} />
        <Route path="/admin" element={<p>Panel admin</p>} />
      </Routes>
    </MemoryRouter>
  );

const completar = (email, password) => {
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: email } });
  fireEvent.change(screen.getByLabelText('Contraseña'), { target: { value: password } });
  fireEvent.click(screen.getByText('Entrar'));
};

describe('Login Page', () => {
  it('renderiza el formulario', () => {
    montar();
    expect(screen.getByRole('heading', { name: 'Iniciar sesión' })).toBeTruthy();
    expect(screen.getByLabelText('Email')).toBeTruthy();
    expect(screen.getByLabelText('Contraseña')).toBeTruthy();
  });

  it('muestra errores de validación con campos vacíos', async () => {
    montar();
    fireEvent.click(screen.getByText('Entrar'));
    expect(await screen.findByText(/Correo inválido/)).toBeTruthy();
    expect(await screen.findByText(/entre 4 y 10 caracteres/)).toBeTruthy();
  });

  it('rechaza un dominio de correo no permitido', async () => {
    montar();
    completar('ash@hotmail.com', 'poke123');
    expect(await screen.findByText(/Correo inválido/)).toBeTruthy();
    expect(obtenerSesion()).toBeNull();
  });

  it('muestra error con credenciales incorrectas', async () => {
    montar();
    completar('entrenador@duoc.cl', 'incorrecta');
    expect(await screen.findByText('Email o contraseña incorrectos.')).toBeTruthy();
    expect(obtenerSesion()).toBeNull();
  });

  it('con credenciales correctas guarda la sesión y redirige al inicio', async () => {
    montar();
    completar('entrenador@duoc.cl', 'poke123');
    await waitFor(() => expect(screen.getByText('Pantalla de inicio')).toBeTruthy());
    expect(obtenerSesion().email).toBe('entrenador@duoc.cl');
  });

  it('tiene enlace a registro', () => {
    montar();
    fireEvent.click(screen.getByText('Regístrate aquí'));
    expect(screen.getByText('Pantalla de registro')).toBeTruthy();
  });

  it('el administrador es redirigido a /admin', async () => {
    montar();
    completar('admin@duoc.cl', 'admin123');
    await waitFor(() => expect(screen.getByText('Panel admin')).toBeTruthy());
    expect(obtenerSesion().rol).toBe('admin');
  });
});
