import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from 'react-bootstrap/Image';

function ModalDetalleProducto({ show, handleClose }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalle: Pizza Napolitana</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Image
              src="https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg"
              className="position-flex"  fluid
            />
         <br /> Que Contiene:
         <br />
          Tomate, mozzarella, anchoas, orégano, alcaparras y aceite de oliva.
          <br />
          Presentacion: 8 porciones 
           <br />
           Precio: $1.600,00-
           <br />
           1 (una) unidad por pedido.
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
