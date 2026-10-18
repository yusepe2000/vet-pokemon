import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import logoPoke from '../../data/image/logoPoke.webp';
import { obtenerSesion, cerrarSesion, esAdmin, EVENTO_SESION } from '../../data/auth';

const links = [
  { ruta: '/', texto: 'Inicio' },
  { ruta: '/nosotros', texto: 'Nosotros' },
  { ruta: '/products', texto: 'Productos' },
];

function Header() {
  const [sesion, setSesion] = useState(() => obtenerSesion());
  const navigate = useNavigate();

  // se actualiza cuando alguien inicia o cierra sesion
  useEffect(() => {
    const refrescar = () => setSesion(obtenerSesion());
    window.addEventListener(EVENTO_SESION, refrescar);
    return () => window.removeEventListener(EVENTO_SESION, refrescar);
  }, []);

  const salir = () => {
    cerrarSesion();
    navigate('/');
  };

  return (
  <BootstrapNavbar  expand="lg" sticky="top" variant="dark" className="navbar-huellitas"  style={{ backgroundColor: '#DC0A0A' }}>
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
            {esAdmin(sesion) && (
              <Nav.Link as={Link} to="/admin">
                Administración
              </Nav.Link>
            )}
            <Nav.Link href="/#Servicios">Servicios</Nav.Link>
            <Nav.Link href="/#contacto">Contacto</Nav.Link>
          </Nav>

          <Nav className="align-items-lg-center">
            {sesion ? (
              <>
                <span className="navbar-text text-white me-3">
                  Hola, <strong>{sesion.nombre || sesion.email}</strong>
                </span>
                <Nav.Link as="button" type="button" onClick={salir}>
                  Cerrar sesión
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/registro">
                  Regístrate
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  Iniciar Sesión
                </Nav.Link>
              </>
            )}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Header;