import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { Person, Cart } from "react-bootstrap-icons";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
        <Navbar.Brand as={Link} to="/">
          <img src="../../src/assets/16.png" className="logoNavbar"></img>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <NavLink end className={"nav-item nav-link"} to="/">
              Pagina Principal
            </NavLink>
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
            <NavLink end className={"nav-item nav-link"} to="/administrador">
              Administrador
            </NavLink>
            <NavDropdown title="Login" className="dropMenu">
              <NavDropdown.Item onClick={loginhandleShow}>
                <Person></Person> Iniciar Sesión
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <div className="dropdown-header">
                ¿No tienes cuenta? Regístrate.
              </div>
              <NavDropdown.Item
                className="text-center"
                onClick={registerhandleShow}
              >
                <Button className="btnRegistro btn">Registro</Button>
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink
              end
              className={"nav-item nav-link"}
              to="/pedidos"
              id="carrito"
            >
              <Cart size={35}></Cart>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <Modal show={loginshow} onHide={loginhandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
              <Form.Control.Feedback type="invalid">
                Ingrese un email valido
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                autoFocus
              />
              <Form.Control.Feedback type="invalid">
                Ingrese una contraseña valida: 8 caracteres minimos, una
                mayuscula, una minuscula y un simbolo.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="d-flex justify-content-between mt-4">
              <div>
                <input type="checkbox" /> Recordarme
              </div>
              <div>
                <a href="/pages/error404.html" className="text-dark">
                  ¿Has olvidado tu contraseña?
                </a>
              </div>
            </Form.Group>
            <Button
              variant="primary"
              className="mt-4 d-block m-auto"
              type="submit"
            >
              Iniciar Sesion
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer className="justify-content-center mt-4">
          <p>¿Aún no tienes cuenta?</p>
          <Button variant="primary" onClick={registerhandleShow}>
            Regístrarse
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={registershow} onHide={registerhandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Regístrarse</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="nombre" autoFocus />
              <Form.Control.Feedback type="invalid">
                Ingrese un nombre valido
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" placeholder="apellido" autoFocus />
              <Form.Control.Feedback type="invalid">
                Ingrese un apellido valido
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
              <Form.Control.Feedback type="invalid">
                Ingrese un email valido
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="contraseña"
                autoFocus
              />
              <Form.Control.Feedback type="invalid">
                Ingrese una contraseña valida: 8 caracteres minimos, una
                mayuscula, una minuscula y un simbolo.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Repetir contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="contraseña"
                autoFocus
              />
              <Form.Control.Feedback type="invalid">
                Ingrese una contraseña valida: 8 caracteres minimos, una
                mayuscula, una minuscula y un simbolo.
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              variant="primary"
              className="mt-4 d-block m-auto"
              type="submit"
            >
              Registrarse
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
};

export default MenuNavegacion;
