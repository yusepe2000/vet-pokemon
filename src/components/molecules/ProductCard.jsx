import Image from '../atoms/Image';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import '../../styles/moleculesStyle/productCard.css';
 
function ProductCard({ product, onAgregar, onEliminar, onVerDetalle }) {
  // frena el clic para que el botón no abra también la ventanilla
  const agregar = (e) => {
    e.stopPropagation();
    onAgregar();
  };

  const eliminar = (e) => {
    e.stopPropagation();
    onEliminar();
  };

  return (
    <div className="card-producto" onClick={onVerDetalle}>
      <Image src={product.image} alt={product.name} />
      <Text variant="p" className="nombre-producto">{product.name}</Text>
      <Text variant="p" className="precio-producto">${product.price}</Text>
      <div className="botones-producto">
        <Button className="Eliminar" onClick={eliminar}>Eliminar</Button>
        <Button className="Agregar" onClick={agregar}>Agregar al carrito</Button>
      </div>
    </div>
  );
}
 
export default ProductCard;