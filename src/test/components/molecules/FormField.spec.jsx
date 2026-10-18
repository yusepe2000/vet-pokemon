import { render, screen } from '@testing-library/react';
import FormField from '../../../components/molecules/FormField';

describe('FormField Component', () => {
  it('muestra la etiqueta asociada al input', () => {
    render(
      <FormField htmlFor="correo" label="Email">
        <input id="correo" />
      </FormField>
    );
    expect(screen.getByLabelText('Email')).toBeTruthy();
  });

  it('muestra el mensaje de error', () => {
    render(
      <FormField htmlFor="a" label="Email" error="Correo inválido">
        <input id="a" />
      </FormField>
    );
    expect(screen.getByRole('alert')).toHaveTextContent('Correo inválido');
  });

  it('muestra la ayuda solo cuando no hay error', () => {
    const { rerender } = render(
      <FormField htmlFor="a" label="Fecha" hint="Debes ser mayor de 18 años.">
        <input id="a" />
      </FormField>
    );
    expect(screen.getByText('Debes ser mayor de 18 años.')).toBeTruthy();

    rerender(
      <FormField htmlFor="a" label="Fecha" hint="Debes ser mayor de 18 años." error="Requerido">
        <input id="a" />
      </FormField>
    );
    expect(screen.queryByText('Debes ser mayor de 18 años.')).toBeNull();
  });
});
