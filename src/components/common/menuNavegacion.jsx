import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { Person, Cart } from "react-bootstrap-icons";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import "./menuNavegacion.css";

const MenuNavegacion = () => {
  const [loginshow, loginsetShow] = useState(false);
  const [registershow, registersetShow] = useState(false);

  const loginhandleClose = () => loginsetShow(false);
  const registerhandleClose = () => registersetShow(false);
  const loginhandleShow = () => loginsetShow(true);
  const registerhandleShow = () => registersetShow(true);


  return (
    <Navbar bg="dark" variant="dark" expand="lg" id="menuNavbar">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#home">
          <img
            src="../../src/assets/16.png"
            className="logoNavbar"
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
            <Nav.Link href="#">Administrador</Nav.Link>
            <NavDropdown title="Login" className="dropMenu">
              <NavDropdown.Item onClick={loginhandleShow}>
                <Person></Person> Iniciar Sesión
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <div className="dropdown-header">
                ¿No tienes cuenta? Regístrate.
              </div>
              <NavDropdown.Item className="text-center" onClick={registerhandleShow}>
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
      
      <Modal show={loginshow} onHide={loginhandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={loginhandleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={loginhandleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={registershow} onHide={registerhandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={registerhandleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={registerhandleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};

export default MenuNavegacion;
