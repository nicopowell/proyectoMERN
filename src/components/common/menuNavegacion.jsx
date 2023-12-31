import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { Cart } from "react-bootstrap-icons";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import Login from "../views/Login";
import "./menuNavegacion.css";
import { useState } from "react";
import logo from "../../assets/16.png"

const MenuNavegacion = ({ usuarioLogueado, setUsuarioLogueado }) => {
    const [estaLogueado, setEstaLogueado] = useState(!!usuarioLogueado);

    const logout = () => {
        Swal.fire({
            icon:'warning',
            title: 'Esta seguro que desea cerrar sesion?',
            showDenyButton: true,
            confirmButtonText: 'Si',
            denyButtonText: `No`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Se cerro sesion de manera exitosa', '', 'success')
              setUsuarioLogueado({});
              sessionStorage.removeItem("usuario");
              setEstaLogueado(false);
            }
          })
    };
    return (
        <Navbar bg="dark" variant="dark" expand="lg" id="menuNavbar">
            <Container className="d-flex justify-content-between">
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} className="logoNavbar"></img>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <NavLink end className={"nav-item nav-link"} to="/">
                            Página Principal
                        </NavLink>
                        {estaLogueado ? (
                            <>
                                {usuarioLogueado === "Admin" || usuarioLogueado.perfil === "Admin" ? (
                                    <NavLink
                                        end
                                        className={"nav-item nav-link"}
                                        to="/administrador"
                                    >
                                        Administrador
                                    </NavLink>
                                ) : null}
                                <Button className={"nav-item nav-link btnLogout"} onClick={logout}>
                                    Cerrar Sesión
                                </Button>
                            </>
                        ) : (
                            <Login
                                setUsuarioLogueado={setUsuarioLogueado}
                                setEstaLogueado={setEstaLogueado}
                            ></Login>
                        )}

                        <NavLink end className={"nav-item nav-link"} to="/pedidos" id="carrito">
                            <Cart size={35}></Cart>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MenuNavegacion;
