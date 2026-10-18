import Image from '../atoms/Image';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import '../../styles/moleculesStyle/productCard.css';
 
function ProductCard({ product, onAgregar, onEliminar }) {
  return (
    <div className="card-producto">
      <Image src={product.image} alt={product.name} />
      <Text variant="p" className="nombre-producto">{product.name}</Text>
      <Text variant="p" className="precio-producto">${product.price}</Text>
      <div className="botones-producto">
        <Button className="Eliminar" onClick={onEliminar}>Eliminar</Button>
        <Button className="Agregar" onClick={onAgregar}>Agregar al carrito</Button>
      </div>
    </div>
  );
}
 
export default ProductCard;