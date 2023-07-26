import "./carrito/estilosCarrito.css";
import ItemCarrito from "./carrito/ItemCarrito";
import { Container, Col, Row, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CarritoPedidos = ({ carritoProp }) => {
  const [carrito, setCarrito] = useState(carritoProp)

  useEffect(() => {
    // Guardo el carrito en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const calcularTotal = () => {
    return carrito.reduce((total, producto) => total + producto.precio, 0);
  };

 

  const eliminarProducto = (id) => {
    const indiceProducto = carrito.findIndex((producto) => producto.id === id);
  
    if (indiceProducto !== -1) {
      const carritoModificado = [...carrito];
      carritoModificado.splice(indiceProducto, 1);
      setCarrito(carritoModificado);
    }
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
                      <ItemCarrito
                        key={producto.id}
                        producto={producto}
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
