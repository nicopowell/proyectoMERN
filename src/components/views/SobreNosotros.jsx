import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Container } from "react-bootstrap";

const SobreNosotros = () => {
  return (
    <>
      <img
        src="https://images.pexels.com/photos/8753672/pexels-photo-8753672.jpeg"
        alt="Banner con platos de comida"
        className="w-100"
        id="bannerIndex"
      />
      <section className="seccionInfoRestaurante text-light py-3 text-center mb-5">
        <h1>
          Rolling Bites
        </h1>
        <p>Informacion extra</p>
      </section>
      <Container>
        <Col md={6} lg={3} className="my-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </>
  );
};

export default SobreNosotros;
