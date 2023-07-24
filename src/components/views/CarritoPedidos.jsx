import './carrito/estilosCarrito.css';
import ItemCarrito from './carrito/ItemCarrito';
import { Container, Col, Row, ListGroup, Button, Table} from 'react-bootstrap'
import { Trash3Fill } from 'react-bootstrap-icons';

const CarritoPedidos = () => {
    return (
        <>
        <section>
            <Container>
            <h1 className='mt-5 p-2 titulo' >Tu pedido</h1>
            <Row>
                <Col lg={8}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Cantidad</th>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <ItemCarrito></ItemCarrito>
                            <ItemCarrito></ItemCarrito>
                            <ItemCarrito></ItemCarrito>
                        </tbody>

                    </Table>
                </Col>
            </Row>
            </Container>

        </section>

            
        </>
    );
};

export default CarritoPedidos;