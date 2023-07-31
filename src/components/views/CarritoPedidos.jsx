import "./carrito/estilosCarrito.css";
import ItemCarrito from "./carrito/ItemCarrito";
import { Container, Col, Row, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const CarritoPedidos = ({ carrito, setCarrito }) => {
  const calcularTotal = () => {
    const total = carrito.reduce((accumulator, item) => {
      return accumulator + item.producto.precio * item.cantidad;
    }, 0);
    return total;
  };
  const eliminarProducto = (productoId) => {
    const carritoActualizado = carrito.filter(
      (item) => item.producto.id !== productoId
    );
    setCarrito(carritoActualizado);
  };
  return (
    <>
      <section className="my-4">
        <Container className=" align-items-center ">
          <h1 className="mt-5 p-2 titulo">Tu pedido</h1>
          <Row>
            <Col lg={8}>
              <div className="table-responsive">
                <Table hover className="table-sm">
                  <thead>
                    <tr>
                      <th>Cantidad</th>
                      <th>Producto</th>
                      <th>Precio</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {carrito.map((producto) => (
                      <ItemCarrito key={producto.producto.id} item={producto} eliminarProducto={eliminarProducto}/>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Col>
            <Col lg={4}>
              <aside>
                <Container className="d-flex justify-content-center align-items-center flex-column">
                  <img
                    src="../../src/assets/18.png"
                    alt="logoRB"
                    className="logoConSombra"
                  />
                  <h5>Total a pagar: ${calcularTotal()}</h5>
                  <Button id="btnConfirmarPedido" className="mt-2">
                    Confirmar pedido
                  </Button>
                  <Link to="/" className="mb-3" id="linkSeguirComprando">
                    Seguir comprando
                  </Link>
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
