import React from "react";
import Card from "../components/card";

import image1 from "../assets/powell.jpeg";
import image2 from '../assets/hack.png';
import image3 from '../assets/julianmontenegro.jpeg';
import image4 from '../assets/jmg.jpeg';

const cards = [
  {
    id: 1,
    title: "Nicolas Powell",
    text: " SCRUM del trabajo grupal ,Estudiante de RollingCode School",
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
    id: 3,
    title: "Gimenez Juan Manuel",
    text: "Estudiante de RollingCode School",
    image: image4,
    url: "https://github.com/juanmakorn",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id, text}) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url}  text={text}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;