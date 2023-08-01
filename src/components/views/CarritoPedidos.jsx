import "./carrito/estilosCarrito.css";
import ItemCarrito from "./carrito/ItemCarrito";
import { Container, Col, Row, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { agregarPedido } from "../helpers/queris";

const CarritoPedidos = ({ carrito, setCarrito }) => {
  const navegacion = useNavigate();

  const calcularTotal = () => {
    const total = carrito.reduce((accumulator, item) => {
      return accumulator + item.producto.precio * item.cantidad;
    }, 0);
    return total;
  };

  const eliminarProducto = (productoId) => {
    Swal.fire({
      title: "Eliminar producto",
      text: "¿Deseas eliminar este producto de tu carrito?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        const carritoActualizado = carrito.filter(
          (item) => item.producto.id !== productoId
        );
        setCarrito(carritoActualizado);
      }
    });
  };

  const confirmarPedido = (carrito, total) => {
    agregarPedido(carrito, total).then((respuestaCreated) => {
      if (respuestaCreated && respuestaCreated.status === 201) {
        Swal.fire(
          "Pedido exitoso",
          "¡Tu pedido fue realizado y pronto llegará a tu mesa!",
          "success"
        );
        setCarrito([]);
        navegacion("/");
      } else {
        Swal.fire(
          "Tuvimos un problema",
          "No pudimos concretar tu pedido. Intentá de nuevo mas tarde",
          "error"
        );
      }
    });
  };
  return (
    <>
      <section className="my-4 mainSection">
        <Container className=" align-items-center ">
          <h1 className="mt-5 p-2 titulo">Tu pedido</h1>
          {carrito.length === 0 ? (
            <article className="text-center">
              <h3>Tu carrito está vacío</h3>
              <Link
                to="/"
                className="mb-3 btn btn-light"
                id="linkAgregarProductos"
              >
                Agregar productos
              </Link>
            </article>
          ) : (
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
                        <ItemCarrito
                          key={producto.producto.id}
                          item={producto}
                          eliminarProducto={eliminarProducto}
                        />
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
                    <Button
                      id="btnConfirmarPedido"
                      className="mt-2"
                      onClick={() => confirmarPedido(carrito, calcularTotal())}
                      disabled={carrito.length === 0}
                    >
                      Confirmar pedido
                    </Button>
                    <Link to="/" className="mb-3" id="linkSeguirComprando">
                      Seguir comprando
                    </Link>
                  </Container>
                </aside>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </>
  );
};

export default CarritoPedidos;