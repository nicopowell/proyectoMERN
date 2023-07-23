import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { CartFill } from "react-bootstrap-icons";
import ModalDetalleProducto from "../ModalDetalleProducto";
import { useState } from "react";

const CardProducto = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Col md={6} lg={3} className="my-2">
        <Card className="cardProducto">
          <div className="position-relative">
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg"
              className="position-relative"
            />
            <Button
              className="btnCard btnAgregarAlPedido"
              type="submit"
              onClick={handleShow}
            >
              <CartFill size={23}></CartFill>
            </Button>
          </div>

          <Card.Body className="d-flex align-items-center justify-content-between">
            <div>
              <Card.Title>Pizza Napolitana 8 Porciones</Card.Title>
              <Card.Text className="text-secondary">$1.600,00</Card.Text>
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
};

export default CardProducto;
