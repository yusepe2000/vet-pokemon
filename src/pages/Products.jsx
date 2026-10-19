import { useState } from 'react';
import products from '../data/Products';
import { obtenerProductos } from '../data/inventario';
import ProductCard from '../components/molecules/ProductCard';
import CarritoPanel from '../components/organisms/Carritopanel';
import ProductStock from '../components/organisms/ProductStock';
import Button from '../components/atoms/Button';
import '../styles/pagesStyle/productsStyle.css';
import Text from '../components/atoms/Text';

const categorias = ['Pokeballs', 'Caramelos', 'Piedras Evolutivas'];

function Products() {
  const products = obtenerProductos();
  const [carrito, setCarrito] = useState([]);
  const [abierto, setAbierto] = useState(false);
  const [seleccionado, setSeleccionado] = useState(null);
  const [aviso, setAviso] = useState('');

  let total = 0;
  for (let i = 0; i < carrito.length; i++) {
    total = total + carrito[i].price;
  }

  const cantidadEnCarrito = (id) => {
    let cantidad = 0;
    for (let i = 0; i < carrito.length; i++) {
      if (carrito[i].id === id) {
        cantidad++;
      }
      return cantidad;
    }
  };

  const hayStock = (producto) => {
    return cantidadEnCarrito(producto.id) < producto.stock;
  }

  const agregar = (producto) => {
    if (!hayStock(producto)) {
      setAviso(`No hay suficiente stock de ${producto.name}.`);
      return;
    }
    setAviso('');
    setCarrito([...carrito, producto]);
  };

  const quitar = (indice) => {
    setCarrito(carrito.filter((producto, i) => i !== indice));
  };

  const eliminar = (id) => {
    const indice = carrito.findIndex((producto) => producto.id === id);
    if (indice !== -1) {
      quitar(indice);
    }
  };

  return (
    <>
      <div className="carrito-barra">
        <div className="carrito-caja">
          <Button className="carrito" onClick={() => setAbierto(!abierto)}>
            Carrito: {carrito.length} productos
          </Button>

          {abierto && (
            <CarritoPanel carrito={carrito} total={total} onQuitar={quitar} />
          )}
        </div>
      </div>

      {aviso && (
        <Text className="aviso-stock" role="alert">
          {aviso}
        </Text>
      )}

      <section id="Productos">
        {categorias.map((categoria) => (
          <div key={categoria} className="palabra">
            <Text variant='h2'>{categoria}</Text>
            <div className="productos-k">
              {products
                .filter((p) => p.category === categoria)
                .map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    onAgregar={() => agregar(p)}
                    onEliminar={() => eliminar(p.id)}
                    onVerDetalle={() => setSeleccionado(p)}
                  />
                ))}
            </div>
          </div>
        ))}
      </section>

      <ProductStock
        producto={seleccionado}
        onCerrar={() => setSeleccionado(null)}
        onAgregar={() => agregar(seleccionado)}
      />
    </>
  );
}
export default Products;