import "./carrito/estilosCarrito.css";
import ItemCarrito from "./carrito/ItemCarrito";
import { Container, Col, Row, ListGroup, Button, Table } from "react-bootstrap";
import { Trash3Fill } from "react-bootstrap-icons";

const CarritoPedidos = () => {
  return (
    <>
      <section className="my-4">
        <Container className=" align-items-center ">
          <h1 className="mt-5 p-2 titulo">Tu pedido</h1>
          <Row>
            <Col lg={8}>
              <Table hover>
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
              <div className="d-flex justify-content-center">
              <Button id="btnSeguirComprando" className>Seguir comprando</Button>
              </div>
            </Col>
            <Col lg={4}>
              <aside>
                <Container  className="d-flex justify-content-center align-items-center flex-column">
                  <img
                    src="../../src/assets/18.png"
                    alt="logoRB"
                    className="sombra"
                  />
                  <h5>Total a pagar: ${3000}</h5>{" "}
                  {/*enviar state suma de productos*/}
                  <Button id="btnConfirmarPedido">Confirmar pedido</Button>
                </Container>
              </aside>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CarritoPedidos;
