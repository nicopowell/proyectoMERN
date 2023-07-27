import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { CartFill } from "react-bootstrap-icons";
import ModalDetalleProducto from "../ModalDetalleProducto";
import { useState } from "react";
import './cardProducto.css'

const CardProducto = ({producto}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  if (!producto) {
    return null;
  }
  return (
    <>
      <Col md={6} lg={3} className="my-2">
      <Card className="cardProducto">
                <div className="position-relative">
                    <Card.Img
                        variant="top"
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="position-relative imagenProductoCard"
                    />
                    <Button className="btnCard btnAgregarAlPedido">
                        <CartFill size={23}></CartFill>
                    </Button>
                </div>

                <Card.Body className="d-flex align-items-center justify-content-between">
                    <div>
                        <Card.Title>{producto.nombre}</Card.Title>
                        <Card.Text className="text-secondary">${producto.precio}</Card.Text>
                    </div>
            <div>
              <Button
                variant="primary btnCard fw-semibold p-3 p-lg-2 text-light"
                type="submit"
                onClick={handleShow}
              >
                Detalle
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <ModalDetalleProducto show={show} handleClose={handleClose} />
    </>
  );
  }
export default CardProducto;
