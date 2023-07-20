import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { Person, Cart } from "react-bootstrap-icons";

const MenuNavegacion = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container className="d-flex justify-content-between">
                <Navbar.Brand href="#home"><img src="../"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="ms-auto">
                        <Nav.Link href='#'>Pagina Principal</Nav.Link>
                        <NavDropdown title="Nuestros Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#bebidas-sin-alcohol">Bebidas sin alcohol</NavDropdown.Item>
                            <NavDropdown.Item href="#bebidas-con-alcohol">Bebidas con alcohol</NavDropdown.Item>
                            <NavDropdown.Item href="#pizzas">Pizzas</NavDropdown.Item>
                            <NavDropdown.Item href="#pastas">Pastas</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href='#'>Administrador</Nav.Link>
                        <Nav.Link href='#'>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            
        </Navbar>
    );
};

export default MenuNavegacion;