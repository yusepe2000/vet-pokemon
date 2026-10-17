// Autenticación del lado del cliente usando localStorage (sin backend).
// Es suficiente para el proyecto académico, pero las contraseñas se guardan
// en texto plano en el navegador: NO usar así en producción.

const CLAVE_USUARIOS = 'usuariosHuellitas';
const CLAVE_SESION = 'sesionHuellitas';
export const EVENTO_SESION = 'sesion-huellitas';

function avisarCambioSesion() {
  window.dispatchEvent(new Event(EVENTO_SESION));
}

export const PATRON_CORREO = /^[a-zA-Z0-9._%+-]+@(duoc\.cl|profesor\.duoc\.cl|duocuc\.cl|gmail\.com)$/i;

export const usuariosIniciales = [
  { nombre: 'Enfermera Joy', email: 'admin@duoc.cl', password: 'admin123', fechaNacimiento: '1990-01-01', rol: 'admin' },
  { nombre: 'Entrenador Demo', email: 'entrenador@duoc.cl', password: 'poke123', fechaNacimiento: '2000-01-01', rol: 'cliente' },
  
];

export function obtenerUsuarios() {
  let guardados = [];
  try {
    const dato = JSON.parse(localStorage.getItem(CLAVE_USUARIOS));
    if (Array.isArray(dato)) guardados = dato;
  } catch {
    guardados = [];
  }
  const correos = guardados.map((u) => String(u.email || '').toLowerCase());
  const faltantes = usuariosIniciales.filter((u) => !correos.includes(u.email.toLowerCase()));
  const lista = [...faltantes, ...guardados];
  localStorage.setItem(CLAVE_USUARIOS, JSON.stringify(lista));
  return lista;
}

export function restaurarUsuarios() {
  localStorage.setItem(CLAVE_USUARIOS, JSON.stringify(usuariosIniciales));
  return usuariosIniciales;
}

export function autenticar(email, password) {
  const correo = String(email || '').trim().toLowerCase();
  return (
    obtenerUsuarios().find((u) => u.email.toLowerCase() === correo && u.password === password) || null
  );
}

export function registrarUsuario({ nombre, email, password, fechaNacimiento = '' }) {
  const correo = String(email || '').trim().toLowerCase();
  const usuarios = obtenerUsuarios();
  if (usuarios.some((u) => u.email.toLowerCase() === correo)) {
    return { ok: false };
  }
  const nuevo = {
    nombre: String(nombre || '').trim(),
    email: correo,
    password: String(password || ''),
    fechaNacimiento,
    rol: 'cliente',
  };
  localStorage.setItem(CLAVE_USUARIOS, JSON.stringify([...usuarios, nuevo]));
  return { ok: true };
}

export function esMayorDeEdad(fechaNacimiento, edadMinima = 18) {
  if (!fechaNacimiento) return false;
  const nacimiento = new Date(fechaNacimiento);
  if (isNaN(nacimiento.getTime())) return false;
  const hoy = new Date();
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) edad--;
  return edad >= edadMinima;
}

export function obtenerSesion() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE_SESION)) || null;
  } catch {
    return null;
  }
}

export function iniciarSesion(usuario) {
  const datos = {
    nombre: String(usuario.nombre || '').trim(),
    email: String(usuario.email || '').trim().toLowerCase(),
    rol: usuario.rol || 'cliente',
  };
  localStorage.setItem(CLAVE_SESION, JSON.stringify(datos));
  avisarCambioSesion();
  return datos;
}

export function esAdmin(sesion) {
  return Boolean(sesion) && sesion.rol === 'admin';
}

export function cerrarSesion() {
  localStorage.removeItem(CLAVE_SESION);
  avisarCambioSesion();
}
