import { render, screen, fireEvent } from '@testing-library/react';
import Admin from '../../pages/Admin';
import { obtenerProductos } from '../../data/inventario';
import productosIniciales from '../../data/Products';

const llenar = (nombre, precio, stock = '10') => {
  fireEvent.change(screen.getByLabelText('Nombre'), { target: { value: nombre } });
  fireEvent.change(screen.getByLabelText('Precio'), { target: { value: precio } });
  fireEvent.change(screen.getByLabelText('Stock'), { target: { value: stock } });
};

describe('Admin Page', () => {
  it('muestra los productos y los usuarios', () => {
    render(<Admin />);
    expect(screen.getByText(`Productos (${productosIniciales.length})`)).toBeTruthy();
    expect(screen.getByText('entrenador@duoc.cl')).toBeTruthy();
    expect(screen.getByText('admin@duoc.cl')).toBeTruthy();
  });

  it('valida que el nombre sea obligatorio', () => {
    render(<Admin />);
    fireEvent.click(screen.getByText('Agregar producto', { selector: 'button' }));
    expect(screen.getByText('El nombre es obligatorio.')).toBeTruthy();
  });

  it('valida que el precio sea mayor a 0', () => {
    render(<Admin />);
    llenar('Pikaball', '0');
    fireEvent.click(screen.getByText('Agregar producto', { selector: 'button' }));
    expect(screen.getByText('El precio debe ser un número mayor a 0.')).toBeTruthy();
  });

  it('valida que el stock sea un entero de 0 o más', () => {
    render(<Admin />);
    llenar('Pikaball', '500', '-1');
    fireEvent.click(screen.getByText('Agregar producto', { selector: 'button' }));
    expect(screen.getByText('El stock debe ser un número entero de 0 o más.')).toBeTruthy();

    llenar('Pikaball', '500', '');
    fireEvent.click(screen.getByText('Agregar producto', { selector: 'button' }));
    expect(screen.getByText('El stock debe ser un número entero de 0 o más.')).toBeTruthy();

    llenar('Pikaball', '500', '2.5');
    fireEvent.click(screen.getByText('Agregar producto', { selector: 'button' }));
    expect(screen.getByText('El stock debe ser un número entero de 0 o más.')).toBeTruthy();
    expect(obtenerProductos().length).toBe(productosIniciales.length);
  });

  it('guarda el stock del producto nuevo', () => {
    render(<Admin />);
    llenar('Pikaball', '500', '7');
    fireEvent.click(screen.getByText('Agregar producto', { selector: 'button' }));
    const guardados = obtenerProductos();
    expect(guardados[guardados.length - 1].stock).toBe(7);
  });

  it('al editar carga el stock y permite cambiarlo', () => {
    render(<Admin />);
    fireEvent.click(screen.getAllByText('Editar')[3]); // Masterball (stock 1)
    expect(screen.getByLabelText('Stock')).toHaveValue(1);

    fireEvent.change(screen.getByLabelText('Stock'), { target: { value: '5' } });
    fireEvent.click(screen.getByText('Guardar cambios'));
    expect(obtenerProductos()[3].name).toBe('Masterball');
    expect(obtenerProductos()[3].stock).toBe(5);
  });

  it('agrega un producto nuevo y lo guarda', () => {
    render(<Admin />);
    llenar('Pikaball', '500');
    fireEvent.click(screen.getByText('Agregar producto', { selector: 'button' }));

    expect(screen.getByText('Producto agregado.')).toBeTruthy();
    expect(screen.getByText('Pikaball')).toBeTruthy();
    const guardados = obtenerProductos();
    expect(guardados.length).toBe(productosIniciales.length + 1);
    expect(guardados[guardados.length - 1].name).toBe('Pikaball');
    expect(guardados[guardados.length - 1].id).toBe(15);
  });

  it('edita un producto existente', () => {
    render(<Admin />);
    fireEvent.click(screen.getAllByText('Editar')[0]);
    expect(screen.getByLabelText('Nombre')).toHaveValue('Pokeball');

    fireEvent.change(screen.getByLabelText('Nombre'), { target: { value: 'Pokeball Plus' } });
    fireEvent.click(screen.getByText('Guardar cambios'));

    expect(screen.getByText('Producto actualizado.')).toBeTruthy();
    expect(obtenerProductos()[0].name).toBe('Pokeball Plus');
    expect(obtenerProductos().length).toBe(productosIniciales.length);
  });

  it('cancelar la edición vuelve al modo agregar', () => {
    render(<Admin />);
    fireEvent.click(screen.getAllByText('Editar')[0]);
    fireEvent.click(screen.getByText('Cancelar edición'));
    expect(screen.getByRole('heading', { name: 'Agregar producto' })).toBeTruthy();
    expect(screen.getByLabelText('Nombre')).toHaveValue('');
  });

  it('elimina un producto', () => {
    render(<Admin />);
    fireEvent.click(screen.getAllByText('Eliminar')[0]);
    expect(screen.getByText('Producto eliminado.')).toBeTruthy();
    expect(obtenerProductos().length).toBe(productosIniciales.length - 1);
  });

  it('restaura los productos originales', () => {
    render(<Admin />);
    fireEvent.click(screen.getAllByText('Eliminar')[0]);
    fireEvent.click(screen.getByText('Restaurar productos originales'));
    expect(screen.getByText(`Productos (${productosIniciales.length})`)).toBeTruthy();
    expect(obtenerProductos().length).toBe(productosIniciales.length);
  });
});
