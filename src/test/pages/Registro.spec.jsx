import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Registro from '../../pages/Registro';
import { autenticar } from '../../data/auth';

const montar = () =>
  render(
    <MemoryRouter initialEntries={['/registro']}>
      <Routes>
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<p>Pantalla de login</p>} />
      </Routes>
    </MemoryRouter>
  );

const completar = ({
  nombre = 'Ash Ketchum',
  email = 'ash@gmail.com',
  fecha = '2000-05-20',
  pass = 'pika1',
  pass2 = 'pika1',
} = {}) => {
  fireEvent.change(screen.getByLabelText('Nombre'), { target: { value: nombre } });
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: email } });
  fireEvent.change(screen.getByLabelText('Fecha de nacimiento'), { target: { value: fecha } });
  fireEvent.change(screen.getByLabelText('Contraseña'), { target: { value: pass } });
  fireEvent.change(screen.getByLabelText('Repetir contraseña'), { target: { value: pass2 } });
  fireEvent.click(screen.getByText('Registrarme'));
};

describe('Registro Page', () => {
  it('renderiza todos los campos', () => {
    montar();
    ['Nombre', 'Email', 'Fecha de nacimiento', 'Contraseña', 'Repetir contraseña'].forEach((l) =>
      expect(screen.getByLabelText(l)).toBeTruthy()
    );
  });

  it('muestra errores cuando se envía vacío', async () => {
    montar();
    fireEvent.click(screen.getByText('Registrarme'));
    expect(await screen.findByText(/al menos 2 caracteres/)).toBeTruthy();
    expect(await screen.findByText(/Correo inválido/)).toBeTruthy();
    expect(await screen.findByText('Debes ingresar tu fecha de nacimiento.')).toBeTruthy();
  });

  it('rechaza menores de 18 años', async () => {
    montar();
    completar({ fecha: new Date().toISOString().slice(0, 10) });
    expect(await screen.findByText('Debes ser mayor de 18 años para crear una cuenta.')).toBeTruthy();
    expect(autenticar('ash@gmail.com', 'pika1')).toBeNull();
  });

  it('rechaza contraseñas que no coinciden', async () => {
    montar();
    completar({ pass2: 'otra1' });
    expect(await screen.findByText('Las contraseñas no coinciden.')).toBeTruthy();
    expect(autenticar('ash@gmail.com', 'pika1')).toBeNull();
  });

  it('rechaza un correo ya registrado', async () => {
    montar();
    completar({ email: 'entrenador@duoc.cl' });
    expect(await screen.findByText('Este correo ya está registrado.')).toBeTruthy();
  });

  it('registra al usuario y redirige a /login', async () => {
    montar();
    completar();
    await waitFor(() => expect(screen.getByText('Pantalla de login')).toBeTruthy());
    expect(autenticar('ash@gmail.com', 'pika1').nombre).toBe('Ash Ketchum');
  });
});
