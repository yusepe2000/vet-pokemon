import Button from '../atoms/Button';
import '../../styles/organismsStyle/ProductStock.css';
import Text from '../atoms/Text';
import Image from '../atoms/Image';

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
        <Button className="ventanilla-x" onClick={onCerrar} aria-label="Cerrar">
          ×
        </Button>

        <Imagen src={producto.image} alt={producto.name} className="ventanilla-img" />
        <Text variant='h2' className="ventanilla-nombre">{producto.name}</Text>
        <Text className="ventanilla-descripcion">
          {producto.descripcion || 'Sin descripción'}
        </Text>

        <div className="ventanilla-datos">
          <Text variant='p'>Precio: ${producto.price}</Text>
          <Text variant='p' className="ventanilla-stock">Stock: {producto.stock}</Text>
        </div>

        <Button className="Agregar" onClick={agregarYCerrar}>
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
}
export default ProductStock;