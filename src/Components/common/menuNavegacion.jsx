import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { Person, Cart } from "react-bootstrap-icons";
import "./menuNavegacion.css";

const MenuNavegacion = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" id="menuNavbar">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#home">
          <img
            src="../../src/assets/LogoConLemaNaranja.png"
            className="logoNavbar p-3"
          ></img>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#">Pagina Principal</Nav.Link>
            <NavDropdown title="Nuestros Productos" className="dropMenu">
              <NavDropdown.Item href="#pizzas">Pizzas</NavDropdown.Item>
              <NavDropdown.Item href="#pastas">Pastas</NavDropdown.Item>
              <NavDropdown.Item href="#bebidas-sin-alcohol">
                Bebidas sin alcohol
              </NavDropdown.Item>
              <NavDropdown.Item href="#bebidas-con-alcohol">
                Bebidas con alcohol
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Administrador" className="dropMenu">
              <NavDropdown.Item href="#usuarios">Usuarios</NavDropdown.Item>
              <NavDropdown.Item href="#productos">Productos</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Login" className="dropMenu">
              <NavDropdown.Item>
                <Person></Person> Iniciar Sesión
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <div className="dropdown-header">
                ¿No tienes cuenta? Regístrate.
              </div>
              <NavDropdown.Item className="text-center">
                <Button className="btnRegistro btn">Registro</Button>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              id="carrito"
              className="d-flex flex-column align-items-center"
            >
              <Cart size={35}></Cart>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuNavegacion;
