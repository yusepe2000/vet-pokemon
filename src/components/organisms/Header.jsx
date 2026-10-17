import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import logoPoke from '../../data/image/logoPoke.webp';

const links = [
  { ruta: '/', texto: 'Inicio' },
  { ruta: '/nosotros', texto: 'Nosotros' },
  { ruta: '/products', texto: 'Productos' },
];

function Header() {
  return (
  <BootstrapNavbar  expand="lg"  variant="dark" className="navbar-huellitas"  style={{ backgroundColor: '#DC0A0A' }}>
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="marca">
          <img src={logoPoke} alt="Logo Veterinaria Huellitas" className="logo" />
          Veterinaria Huellitas
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="menu-principal" />
        <BootstrapNavbar.Collapse id="menu-principal">
          <Nav className="me-auto">
            {links.map((link) => (
              <Nav.Link key={link.ruta} as={Link} to={link.ruta}>
                {link.texto}
              </Nav.Link>
            ))}
            <Nav.Link href="/#Servicios">Servicios</Nav.Link>
            <Nav.Link href="/#contacto">Contacto</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="#register">Regístrate</Nav.Link>
            <Nav.Link href="#login">Iniciar Sesión</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Header;