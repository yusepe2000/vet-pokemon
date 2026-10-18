import Button from '../atoms/Button';
import '../../styles/organismsStyle/ProductStock.css';

function ProductStock({ producto, onCerrar, onAgregar }) {
  // si no hay producto elegido, no se muestra nada
  if (!producto) return null;

  const agregarYCerrar = () => {
    onAgregar();
    onCerrar();
  };

  return (
    <div className="ventanilla-fondo" onClick={onCerrar}>
      <div className="ventanilla-caja" onClick={(e) => e.stopPropagation()}>
        <button className="ventanilla-x" onClick={onCerrar} aria-label="Cerrar">
          ×
        </button>

        <img src={producto.image} alt={producto.name} className="ventanilla-img" />
        <h2 className="ventanilla-nombre">{producto.name}</h2>
        <p className="ventanilla-descripcion">
          {producto.descripcion || 'Sin descripción'}
        </p>

        <div className="ventanilla-datos">
          <p>Precio: ${producto.price}</p>
          <p className="ventanilla-stock">Stock: {producto.stock}</p>
        </div>

        <Button className="Agregar" onClick={agregarYCerrar}>
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
}
export default ProductStock;