import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

function ModalDetalleProducto({ producto, show, handleClose }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{producto.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={producto.imagen} className="position-flex" fluid />
          <br /> <b>Que Contiene:</b>
          <br />
          {producto.detalle}
          <br />
          <b>Precio:$</b> {producto.precio} <b>-</b>
          <br />
          <b>Categoria:</b> {producto.categoria}
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
