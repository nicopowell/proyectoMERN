import React from "react";
import CardSobreNos from "./cardSobreNos";
import image1 from "../assets/powell.jpeg";
import image2 from "../assets/marisa.jpeg";
import image3 from "../assets/julianmontenegro.jpeg";
import image4 from "../assets/jmg.jpeg";
import { Col, Row } from "react-bootstrap";

const cardsSobreNos = [
  {
    id: 1,
    title: "Nicolas Powell",
    text: " SCRUM, Estudiante de RollingCode School",
    image: image1,
    url: "https://github.com/nicopowell",
  },
  {
    id: 2,
    title: "Marisa Garat",
    text: "Estudiante de RollingCode School",
    image: image2,
    url: "https://github.com/Maoi11",
  },
  {
    id: 3,
    title: "Julián Ignacio Montenegro",
    text: "Estudiante de RollingCode School",
    image: image3,
    url: "https://github.com/JulianIgnacio",
  },
  {
    id: 4,
    title: "Juan Manuel Gimenez",
    text: "Estudiante de RollingCode School",
    image: image4,
    url: "https://github.com/juanmakorn",
  },
];

function CardsSobreNos() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <Row>
        {cardsSobreNos.map(({ title, image, url, id, text }) => (
          <Col sm={12} md={6} className="col-md-4 max-width: auto p-2" key={id}>
            <CardSobreNos
              imageSource={image}
              title={title}
              url={url}
              text={text}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CardsSobreNos;
