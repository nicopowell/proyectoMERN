import { Container } from "react-bootstrap";
import { Link } from "react-router-dom"
import './estilosError.css'

const Error404 = () => {
  return (
    <>
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <h1 className="my-5 titulo404">¡Eso aún se está cocinando!</h1>
        
        <img src="../../src/assets/404.gif" alt="error404" className="imgError align-items-center img-fluid"></img>
        <Link to="/" className="mb-5 titulo404 fs-3" id="volverAInicio">
          Volver a la Página Principal
        </Link>
        
      </Container>
    </>
  );
};

export default Error404;
