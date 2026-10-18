import CarritoItem from '../molecules/Carritoitem';
import Text from '../atoms/Text';
import '../../styles/organismsStyle/Carritopanel.css';
 
function CarritoPanel({ carrito, total, onQuitar }) {
  return (
    <div className="carrito-panel">
      <h2>Tu carrito</h2>
 
      {carrito.length === 0 && <Text variant="p">El carrito está vacío</Text>}
 
      {carrito.map((producto, indice) => (
        <CarritoItem
          key={indice}
          producto={producto}
          onQuitar={() => onQuitar(indice)}
        />
      ))}
 
      <Text variant="p" className="carrito-total">Total: ${total}</Text>
    </div>
  );
}
 
export default CarritoPanel;