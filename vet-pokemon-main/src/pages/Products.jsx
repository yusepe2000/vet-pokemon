import { Container, Row } from 'react-bootstrap';
import products from '../data/Products';
import ProductCard from '../components/molecules/ProductCard';
import '../styles/Products.css';
function Products() {
  return (
    <Container className="my-5">
      <h1>Productos</h1>
      <Row>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
}

export default Products;