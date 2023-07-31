import {
  Navbar,
  Nav,
  NavDropdown,
  Container
} from "react-bootstrap";
import { Cart } from "react-bootstrap-icons";
import { Link, NavLink} from "react-router-dom";
import Login from "../views/Login";
import "./menuNavegacion.css";

const MenuNavegacion = ({usuarioLogueado, setUsuarioLogueado}) => {
  

  const logout = ()=>{
    setUsuarioLogueado({});
    sessionStorage.removeItem('usuario');
  }
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
                <NavLink end className={"nav-item nav-link"} onClick={logout} to="/">Logout</NavLink>
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
    </Navbar>
  );
};

export default MenuNavegacion;
