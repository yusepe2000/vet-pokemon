import Image from '../atoms/Image';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import '../../styles/moleculesStyle/Carritoitem.css';
 
function CarritoItem({ producto, cantidad = 1, onQuitar }) {
  return (
    <div className="carrito-item">
      <Image src={producto.image} alt={producto.name} />
      <Text variant="p">{producto.name}</Text>
      {cantidad > 1 && <Text variant="p" className="carrito-cantidad">x{cantidad}</Text>}
      <Text variant="p">${producto.price}</Text>
      <Button className="Eliminar" onClick={onQuitar}>Quitar</Button>
    </div>
  );
}
 
export default CarritoItem;