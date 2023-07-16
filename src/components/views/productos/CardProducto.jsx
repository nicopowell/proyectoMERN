import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { CartFill } from "react-bootstrap-icons";

const CardProducto = () => {
    return (
        <Col md={6} lg={3} className="my-2">
            <Card className="cardProducto">
                <div className="position-relative">
                    <Card.Img
                        variant="top"
                        src="https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg"
                        className="position-relative"
                    />
                    <Button className="btnCard btnAgregarAlPedido">
                        <CartFill size={23}></CartFill>
                    </Button>
                </div>

                <Card.Body className="d-flex align-items-center justify-content-between">
                    <div>
                        <Card.Title>Pizza</Card.Title>
                        <Card.Text className="text-secondary">$1.600</Card.Text>
                    </div>
                    <div>
                        <Button className="btnCard fw-semibold p-3 p-lg-2 text-light">
                            Ver mas
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardProducto;
