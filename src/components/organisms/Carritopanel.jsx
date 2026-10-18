import CarritoItem from '../molecules/Carritoitem';
import Text from '../atoms/Text';
import '../../styles/organismsStyle/Carritopanel.css';
 
function CarritoPanel({ carrito, total, onQuitar }) {
  // junta los productos repetidos: guarda cuántos hay y la posición del primero
  const grupos = [];
  carrito.forEach((producto, indice) => {
    const grupo = grupos.find((g) => g.producto.id === producto.id);
    if (grupo) {
      grupo.cantidad = grupo.cantidad + 1;
    } else {
      grupos.push({ producto, cantidad: 1, indice });
    }
  });

  return (
    <div className="carrito-panel">
      <h2>Tu carrito</h2>
 
      {carrito.length === 0 && <Text variant="p">El carrito está vacío</Text>}
 
      {grupos.map((grupo) => (
        <CarritoItem
          key={grupo.producto.id}
          producto={grupo.producto}
          cantidad={grupo.cantidad}
          onQuitar={() => onQuitar(grupo.indice)}
        />
      ))}
 
      <Text variant="p" className="carrito-total">Total: ${total}</Text>
    </div>
  );
}
 
export default CarritoPanel;