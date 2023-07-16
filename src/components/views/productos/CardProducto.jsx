import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { CardImage } from "react-bootstrap-icons";

const CardProducto = () => {
    return (
        <Col md={6} lg={3} className="my-2">
            <Card>
                <Card.Img
                    variant="top"
                    src="https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg"
                />
                <Card.Body className="d-flex align-items-center justify-content-between">
                    <div>
                        <Card.Title>Pizza</Card.Title>
                        <Card.Text className="text-secondary">$1.600</Card.Text>
                    </div>
                    <div>
                        <Button className="btnVerMas fw-semibold p-sm-3 p-lg-2 text-light">Ver mas</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardProducto;
