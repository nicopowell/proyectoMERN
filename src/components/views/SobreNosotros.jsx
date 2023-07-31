import "react-bootstrap";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Github, Facebook } from "react-bootstrap-icons";

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
        <h1>Rolling Bites</h1>
        <p>TRABAJO GRUPAL - PROYECTO FINAL</p>
        <p>Nadie llega a la cima sin la ayuda de otros.</p>
        <p>
          Se agradeze a RollingCode por la gran oportunidad junto a la
          Municipalidad de San Miguel de Tucuman
        </p>
      </section>
      <h1 className="display-4 text-center"> Integrantes</h1>
      <hr />

      <Row md={4} ld={3} className="mb-3">
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./src/assets/powell.jpeg" />
          <Card.Body>
            <Card.Title>Nicolas Powell </Card.Title>
            <Card.Text>
              SCRUM del trabajo grupal ,Estudiante de RollingCode School
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Repositor </ListGroup.Item>
        <a  href={'https://github.com/nicopowell'} className='bs-light mx-2' target='_blank'><Github>Git</Github></a>
          </ListGroup>
        </Card>

        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./src/assets/hack.png" />
          <Card.Body>
            <Card.Title> Marisa Garat </Card.Title>
            <Card.Text>Estudiante de RollingCode School</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Repositor </ListGroup.Item>
            <Card.Link href="https://github.com/Maoi11">
             <Github></Github>
            </Card.Link>
           </ListGroup>
        </Card>

        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./src/assets/jmg.jpeg" />
          <Card.Body>
            <Card.Title>Gimenez Juan Manuel </Card.Title>
            <Card.Text>Estudiante de RollingCode School</Card.Text>
            </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Repositor </ListGroup.Item>
            <a href={'https://github.com/juanmakorn'} className='bs-light mx-2' target='_blank'><Github></Github></a>
          </ListGroup>
        </Card>

        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./src/assets/julianmontenegro.jpeg" />
          <Card.Body>
            <Card.Title>Julián Ignacio Montenegro</Card.Title>
            <Card.Text>Estudiante de RollingCode School</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Repositor </ListGroup.Item>
            <Card.Link href="https://github.com/JulianIgnacio">
              {" "}
              <Github></Github>
            </Card.Link>
           
          </ListGroup>
        </Card>
      </Row>
    </>
  );
};

export default SobreNosotros;
