import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';

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
        <p>TRABAJO GRUPAL - PROYECTO FINAL</p>
        <p>Nadie llega a la cima sin la ayuda de otros.</p>
        <p>Se agradeze a RollingCode por la gran opportunidad junto a la Municipalidad de San Miguel de Tucumnan</p>
      </section>
      <Container>
        <Row md={6} lg={3} className="my-2" >
        <Card border="primary"  style={{ width: "18rem" }}>
            <Card.Img variant="top" src="./src/assets/jmg.jpeg"/>
            <Card.Body>
              <Card.Title>Intregrante : Marisa Garat </Card.Title>
              <Card.Text>
                Estudiante de RollingCode School
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Repositor - RedSocial</ListGroup.Item>
              <Card.Link href="https://github.com/Maoi11"> <Github></Github></Card.Link>
              <Card.Link href=""><Facebook></Facebook></Card.Link>
             </ListGroup>
             </Card>



        <Card border="primary"  style={{ width: "18rem" }}>
            <Card.Img variant="top" src="./src/assets/jmg.jpeg"/>
            <Card.Body>
              <Card.Title>Intregrante : Gimenez Juan Manuel </Card.Title>
              <Card.Text>
                Estudiante de RollingCode School
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Repositor - RedSocial</ListGroup.Item>
              <Card.Link href="https://github.com/juanmakorn"> <Github></Github></Card.Link>
              <Card.Link href="https://www.facebook.com/Jmg19890609/"><Facebook></Facebook></Card.Link>
             </ListGroup>
             </Card>

             <Card border="primary"  style={{ width: "18rem" }}>
            <Card.Img variant="top" src="./src/assets/jmg.jpeg"/>
            <Card.Body>
              <Card.Title>Intregrante : Nicolas Powell </Card.Title>
              <Card.Text>
                SCRUM del trabajo grupal ,Estudiante de RollingCode School
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Repositor - RedSocial</ListGroup.Item>
              <Card.Link href="https://github.com/nicopowell"> <Github></Github></Card.Link>
              <Card.Link href=""><Facebook></Facebook></Card.Link>
             </ListGroup>
           </Card>


           <Card border="primary"  style={{ width: "18rem" }}>
            <Card.Img variant="top" src="./src/assets/jmg.jpeg"/>
            <Card.Body>
              <Card.Title>Intregrante : Julián Ignacio Montenegro</Card.Title>
              <Card.Text>
                Estudiante de RollingCode School
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Repositor - RedSocial</ListGroup.Item>
              <Card.Link href="https://github.com/JulianIgnacio"> <Github></Github></Card.Link>
              <Card.Link href=""><Facebook></Facebook></Card.Link>
             </ListGroup>
             </Card>


        </Row>
      </Container>
    </>
  );
};

export default SobreNosotros;
