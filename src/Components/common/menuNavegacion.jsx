import { Navbar, Container, Nav } from 'react-bootstrap';

const MenuNavegacion = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Rolling Bites</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="ms-auto">
                        <Nav.Link href='#'>Inicio</Nav.Link>
                        <Nav.Link href='#'>Registro</Nav.Link>
                        <Nav.Link href='#'>Administrador</Nav.Link>
                        <Nav.Link href='#'>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            
        </Navbar>
    );
};

export default MenuNavegacion;