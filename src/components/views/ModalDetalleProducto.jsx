import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from 'react-bootstrap/Image';

function ModalDetalleProducto({ producto, show, handleClose }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalle: {producto.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body >
              <Image
               src={producto.imagen}
              className="position-flex"  fluid
            />
         <br /> Que Contiene:
         <br />
         {producto.detalle}
          <br />
          Presentacion: 8 porciones 
           <br />
           Precio: {producto.precio}
           <br />
           Categoria: {producto.categoria}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary btnCard fw-semibold p-3 p-lg-2 text-light"
            onClick={handleClose}
          >
            Salir
          </Button>
          <Button
            variant="primary btnCard fw-semibold p-3 p-lg-2 text-light"
            onClick={handleClose}
          >
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDetalleProducto;
