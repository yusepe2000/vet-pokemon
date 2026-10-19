import { useState } from 'react';
import Button from '../components/atoms/Button';
import Input from '../components/atoms/Input';
import Text from '../components/atoms/Text';
import FormField from '../components/molecules/FormField';
import { obtenerUsuarios } from '../data/auth';
import { obtenerProductos, guardarProductos, restaurarProductos, imagenPorDefecto, CATEGORIAS } from '../data/inventario';

function Admin() {
  const [productos, setProductos] = useState(obtenerProductos());
  const usuarios = obtenerUsuarios();

  // datos del formulario
  const [idEdicion, setIdEdicion] = useState(null); // null = estamos creando uno nuevo
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [categoria, setCategoria] = useState(CATEGORIAS[0]);
  const [imagen, setImagen] = useState('');
  const [mensaje, setMensaje] = useState('');

  const limpiarFormulario = () => {
    setIdEdicion(null);
    setNombre('');
    setPrecio('');
    setStock('');
    setCategoria(CATEGORIAS[0]);
    setImagen('');
  };

  // pasa los datos del producto al formulario para editarlo
  const editar = (producto) => {
    setIdEdicion(producto.id);
    setNombre(producto.name);
    setPrecio(String(producto.price));
    setStock(producto.stock === undefined ? '0' : String(producto.stock));
    setCategoria(producto.category);
    setImagen(producto.image);
    setMensaje('');
  };

  const eliminar = (id) => {
    const nuevaLista = productos.filter((p) => p.id !== id);
    guardarProductos(nuevaLista);
    setProductos(nuevaLista);
    setMensaje('Producto eliminado.');
  };

  const guardar = (e) => {
    e.preventDefault();

    if (nombre.trim() === '') {
      setMensaje('El nombre es obligatorio.');
      return;
    }
    if (Number(precio) <= 0) {
      setMensaje('El precio debe ser un número mayor a 0.');
      return;
    }
    // el stock es obligatorio y debe ser un número entero de 0 o más
    if (stock === '' || Number(stock) < 0 || !Number.isInteger(Number(stock))) {
      setMensaje('El stock debe ser un número entero de 0 o más.');
      return;
    }

    let nuevaLista;

    if (idEdicion !== null) {
      // editar: se reemplazan los datos del producto con ese id
      nuevaLista = productos.map((p) =>
        p.id === idEdicion
          ? { ...p, name: nombre.trim(), price: Number(precio), category: categoria, image: imagen || p.image }
          : p
      );
      setMensaje('Producto actualizado.');
    } else {
      // crear: el id nuevo es el mayor que existe + 1
      let nuevoId = 1;
      for (let i = 0; i < productos.length; i++) {
        if (productos[i].id >= nuevoId) {
          nuevoId = productos[i].id + 1;
        }
      }
      const nuevo = {
        id: nuevoId,
        name: nombre.trim(),
        price: Number(precio),
        category: categoria,
        image: imagen || imagenPorDefecto(),
      };
      nuevaLista = [...productos, nuevo];
      setMensaje('Producto agregado.');
    }

    guardarProductos(nuevaLista);
    setProductos(nuevaLista);
    limpiarFormulario();
  };

  const restaurar = () => {
    setProductos(restaurarProductos());
    limpiarFormulario();
    setMensaje('Se restauraron los productos originales.');
  };

  return (
    <div className="container py-4">
      <Text variant='h1' className="h3 mb-4">Panel de administración</Text>

      {mensaje && (
        <div className="alert alert-info py-2" role="status">
          {mensaje}
        </div>
      )}

      <section className="mb-5">
        <Text variant='h2' className="h4">{idEdicion !== null ? 'Editar producto' : 'Agregar producto'}</Text>

        <form onSubmit={guardar} className="row g-3 align-items-end" noValidate>
          <div className="col-md-3">
            <FormField htmlFor="adm-nombre" label="Nombre">
              <Input id="adm-nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </FormField>
          </div>

          <div className="col-md-2">
            <FormField htmlFor="adm-precio" label="Precio">
              <Input id="adm-precio" type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} />
            </FormField>
          </div>

          <div className="col-md-3">
            <FormField htmlFor="adm-categoria" label="Categoría">
              <select
                id="adm-categoria"
                className="form-select"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                {CATEGORIAS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </FormField>
          </div>

          <div className="col-md-4">
            <FormField htmlFor="adm-imagen" label="URL de la imagen (opcional)">
              <Input id="adm-imagen" value={imagen} onChange={(e) => setImagen(e.target.value)} />
            </FormField>
          </div>

          <div className="col-12 d-flex gap-2">
            <Button type="submit" className="btn btn-danger">
              {idEdicion !== null ? 'Guardar cambios' : 'Agregar producto'}
            </Button>
            {idEdicion !== null && (
              <Button className="btn btn-secondary" onClick={limpiarFormulario}>
                Cancelar edición
              </Button>
            )}
          </div>
        </form>
      </section>

      <section className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Text variant='h2' className="h4 mb-0">Productos ({productos.length})</Text>
          <Button className="btn btn-outline-secondary btn-sm" onClick={restaurar}>
            Restaurar productos originales
          </Button>
        </div>

        <div className="table-responsive">
          <table className="table table-striped align-middle">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.category}</td>
                  <td>${p.price}</td>
                  <td className="d-flex gap-2">
                    <Button className="btn btn-sm btn-primary" onClick={() => editar(p)}>
                      Editar
                    </Button>
                    <Button className="btn btn-sm btn-outline-danger" onClick={() => eliminar(p.id)}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <Text variant='h2' className="h4">Usuarios ({usuarios.length})</Text>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Rol</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((u) => (
                <tr key={u.email}>
                  <td>{u.nombre}</td>
                  <td>{u.email}</td>
                  <td>{u.rol}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Admin;
