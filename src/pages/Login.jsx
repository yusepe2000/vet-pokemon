import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../styles/pagesStyle/Form.css';
import Text from '../components/atoms/Text';

import FormField from '../components/molecules/FormField';
import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';
import { autenticar, iniciarSesion, PATRON_CORREO } from '../data/auth';

const MSG_CORREO = 'Correo inválido. Usa un correo @duoc.cl, @profesor.duoc.cl, @duocuc.cl o @gmail.com.';
const MSG_PASS = 'La contraseña debe tener entre 4 y 10 caracteres.';

export function Login() {
  const navigate = useNavigate();
  const [errorLogin, setErrorLogin] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: '', password: '' } });

  const onSubmit = (data) => {
    setErrorLogin('');
    const usuario = autenticar(data.email, data.password);
    if (!usuario) {
      setErrorLogin('Email o contraseña incorrectos.');
      return;
    }
    iniciarSesion(usuario);
    // el administrador va directo a su panel
    navigate(usuario.rol === 'admin' ? '/admin' : '/');
  };

  return (
    <div id="titulo" className="py-5">
      <div id="datos" className="p-4">
        <Text variant='h1' className="h3 text-white mb-3">Iniciar sesión</Text>

        <form id="formulario" onSubmit={handleSubmit(onSubmit)} noValidate>
          {errorLogin && (
            <div className="alert alert-danger py-2" role="alert">
              {errorLogin}
            </div>
          )}

          <FormField htmlFor="login-email" label="Email" error={errors.email?.message}>
            <Input
              id="login-email"
              type="email"
              className={errors.email ? 'is-invalid' : ''}
              {...register('email', {
                required: MSG_CORREO,
                pattern: { value: PATRON_CORREO, message: MSG_CORREO },
              })}
            />
          </FormField>

          <FormField htmlFor="login-pass" label="Contraseña" error={errors.password?.message}>
            <Input
              id="login-pass"
              type="password"
              className={errors.password ? 'is-invalid' : ''}
              {...register('password', {
                required: MSG_PASS,
                minLength: { value: 4, message: MSG_PASS },
                maxLength: { value: 10, message: MSG_PASS },
              })}
            />
          </FormField>

          <Button type="submit" className="btn btn-light w-100">
            Entrar
          </Button>
        </form>
        <Text className="small text-white text-center mt-2 mb-0">
          Recuerda que tu correo debe ser @duoc.cl, @profesor.duoc.cl, @duocuc.cl o @gmail.com.
        </Text>
        <Text className="small text-white text-center mt-2 mb-0">
          ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>
        </Text>
      </div>
    </div>
  );
}

export default Login;
