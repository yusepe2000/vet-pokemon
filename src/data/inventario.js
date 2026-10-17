import productosIniciales from './Products.js';

// Los productos se guardan en localStorage para que el administrador
// pueda agregar, editar y eliminar sin tocar el código (temporal).
const CLAVE_PRODUCTOS = 'productosHuellitas';

export const CATEGORIAS = ['Pokeballs', 'Caramelos', 'Piedras Evolutivas'];

export function obtenerProductos() {
  try {
    const guardados = JSON.parse(localStorage.getItem(CLAVE_PRODUCTOS));
    if (Array.isArray(guardados)) return guardados;
  } catch {
    // si el dato está corrupto se usan los productos iniciales
  }
  return productosIniciales;
}

export function guardarProductos(lista) {
  localStorage.setItem(CLAVE_PRODUCTOS, JSON.stringify(lista));
}

export function restaurarProductos() {
  localStorage.removeItem(CLAVE_PRODUCTOS);
  return productosIniciales;
}

export function imagenPorDefecto() {
  return productosIniciales[0].image;
}
