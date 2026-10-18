import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../../../components/atoms/Input';

describe('Input Component', () => {
  it('renderiza con la clase form-control y el placeholder', () => {
    render(<Input placeholder="Tu correo" />);
    const input = screen.getByPlaceholderText('Tu correo');
    expect(input).toHaveClass('form-control');
    expect(input).toHaveAttribute('type', 'text');
  });

  it('respeta el type recibido', () => {
    render(<Input type="password" placeholder="clave" />);
    expect(screen.getByPlaceholderText('clave')).toHaveAttribute('type', 'password');
  });

  it('dispara onChange al escribir', () => {
    const spy = jasmine.createSpy('onChange');
    render(<Input placeholder="nombre" onChange={spy} />);
    fireEvent.change(screen.getByPlaceholderText('nombre'), { target: { value: 'Ash' } });
    expect(spy).toHaveBeenCalled();
  });

  it('reenvía la ref al input', () => {
    const ref = { current: null };
    render(<Input ref={ref} />);
    expect(ref.current instanceof HTMLInputElement).toBeTrue();
  });
});
