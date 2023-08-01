import "react-bootstrap";
import Cards from "../cards";
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

      <Cards />
         </>
  );
};

export default SobreNosotros;
