import Image from '../atoms/Image';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

function ProductCard({ product }) {
  return (
    <div className="card-producto">
      <Image src={product.image} alt={product.name} />
      <Text variant="p" className="nombre-producto">{product.name}</Text>
      <Text variant="p" className="precio-producto">${product.price}</Text>
      <Button className="Agregar">Agregar al carrito</Button>
    </div>
  );
}

export default ProductCard;