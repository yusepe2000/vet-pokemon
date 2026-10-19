import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../styles/pagesStyle/Form.css';

import FormField from '../components/molecules/FormField';
import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';
import Text from '../components/atoms/Text';
import { registrarUsuario, esMayorDeEdad, PATRON_CORREO } from '../data/auth';

const MSG_CORREO = 'Correo inválido. Usa un correo @duoc.cl, @profesor.duoc.cl, @duocuc.cl o @gmail.com.';
const MSG_PASS = 'La contraseña debe tener entre 4 y 10 caracteres.';

export function Registro() {
  const navigate = useNavigate();
  const [errorGeneral, setErrorGeneral] = useState('');
  const [errorPass2, setErrorPass2] = useState('');
  const [errorEdad, setErrorEdad] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { nombre: '', email: '', fechaNacimiento: '', password: '', password2: '' },
  });

  const onSubmit = (data) => {
    setErrorGeneral('');
    setErrorPass2('');
    setErrorEdad('');

    if (!esMayorDeEdad(data.fechaNacimiento)) {
      setErrorEdad('Debes ser mayor de 18 años para crear una cuenta.');
      return;
    }
    if (data.password !== data.password2) {
      setErrorPass2('Las contraseñas no coinciden.');
      return;
    }

    const resultado = registrarUsuario({
      nombre: data.nombre,
      email: data.email,
      password: data.password,
      fechaNacimiento: data.fechaNacimiento,
    });
    if (!resultado.ok) {
      setErrorGeneral('Este correo ya está registrado.');
      return;
    }
    navigate('/login');
  };

  return (
    <div id="titulo" className="py-5">
      <div id="datos" className="p-4">
        <Text variant='h1' className="h3 text-white mb-3">Registrar usuario</Text>

        <form id="formulario" onSubmit={handleSubmit(onSubmit)} noValidate>
          {errorGeneral && (
            <div className="alert alert-danger py-2" role="alert">
              {errorGeneral}
            </div>
          )}

          <FormField htmlFor="reg-nombre" label="Nombre" error={errors.nombre?.message}>
            <Input
              id="reg-nombre"
              className={errors.nombre ? 'is-invalid' : ''}
              {...register('nombre', {
                required: 'El nombre debe tener al menos 2 caracteres.',
                minLength: { value: 2, message: 'El nombre debe tener al menos 2 caracteres.' },
              })}
            />
          </FormField>

          <FormField htmlFor="reg-email" label="Email" error={errors.email?.message}>
            <Input
              id="reg-email"
              type="email"
              className={errors.email ? 'is-invalid' : ''}
              {...register('email', {
                required: MSG_CORREO,
                pattern: { value: PATRON_CORREO, message: MSG_CORREO },
              })}
            />
          </FormField>

          <FormField
            htmlFor="reg-fecha"
            label="Fecha de nacimiento"
            error={errors.fechaNacimiento?.message || errorEdad}
            hint="Debes ser mayor de 18 años."
          >
            <Input
              id="reg-fecha"
              type="date"
              className={errors.fechaNacimiento || errorEdad ? 'is-invalid' : ''}
              {...register('fechaNacimiento', { required: 'Debes ingresar tu fecha de nacimiento.' })}
            />
          </FormField>

          <FormField htmlFor="reg-pass" label="Contraseña" error={errors.password?.message}>
            <Input
              id="reg-pass"
              type="password"
              className={errors.password ? 'is-invalid' : ''}
              {...register('password', {
                required: MSG_PASS,
                minLength: { value: 4, message: MSG_PASS },
                maxLength: { value: 10, message: MSG_PASS },
              })}
            />
          </FormField>

          <FormField
            htmlFor="reg-pass2"
            label="Repetir contraseña"
            error={errors.password2?.message || errorPass2}
          >
            <Input
              id="reg-pass2"
              type="password"
              className={errors.password2 || errorPass2 ? 'is-invalid' : ''}
              {...register('password2', { required: 'Las contraseñas no coinciden.' })}
            />
          </FormField>

          <Button type="submit" className="btn btn-light w-100 mt-2">
            Registrarme
          </Button>
        </form>

        <Text className="small text-white text-center mt-3 mb-0">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </Text>
      </div>
    </div>
  );
}

export default Registro;
