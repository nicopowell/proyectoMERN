import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { Cart } from "react-bootstrap-icons";
import { useState } from "react";
import { Link, NavLink ,useNavigate} from "react-router-dom";
import Login from "../views/Login";
import "./menuNavegacion.css";

const MenuNavegacion = ({usuarioLogueado, setUsuarioLogueado}) => {
  
  const navegacion = useNavigate();

  const logout = ()=>{
    setUsuarioLogueado({});
    sessionStorage.removeItem('usuario');
    navegacion('/');
  }
  const [registershow, registersetShow] = useState(false);

  const registerhandleClose = () => registersetShow(false);
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
              <NavDropdown.Item
                end
                className={"nav-item nav-link"}
                as={NavLink}
                to="/*"
                id="linkPizzas"
              >
                Pizzas
              </NavDropdown.Item>
              <NavDropdown.Item
                end
                className={"nav-item nav-link"}
                as={NavLink}
                to="/*"
                id="linkPastas"
              >
                Pastas
              </NavDropdown.Item>
              <NavDropdown.Item
                end
                className={"nav-item nav-link"}
                as={NavLink}
                to="/*"
                id="linkBebidasSinAlcohol"
              >
                Bebidas sin alcohol
              </NavDropdown.Item>
              <NavDropdown.Item
                end
                className={"nav-item nav-link"}
                as={NavLink}
                to="/*"
                id="linkBebidasConAlcohol"
              >
                Bebidas con alcohol
              </NavDropdown.Item>
            </NavDropdown>
            {
              (usuarioLogueado.nombreUsuario)?(
                <>
                <NavLink end className={"nav-item nav-link"} to="/administrador">
                  Administrador
                </NavLink>
                <NavLink end className={"nav-item nav-link"} onClick={logout}>Logout</NavLink>
                </>
              ): <Login setUsuarioLogueado={setUsuarioLogueado}></Login>
            }

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
