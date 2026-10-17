import { Navigate } from 'react-router-dom';
import { obtenerSesion, esAdmin } from '../../data/auth';

// Protege una página: solo deja pasar al administrador.
//  - sin sesión      -> manda a /login
//  - con sesión pero no admin -> manda al inicio
//  - admin           -> muestra la página (children)
function AdminLock({ children }) {
  const sesion = obtenerSesion();

  if (!sesion) {
    return <Navigate to="/login" replace />;
  }

  if (!esAdmin(sesion)) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default AdminLock;
