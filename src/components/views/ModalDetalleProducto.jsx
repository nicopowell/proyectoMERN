import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalDetalleProducto({show, handleClose}) {
  return (
    <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
         
          <Modal.Title>Detalle de (id)Pizza Napolitana</Modal.Title>
        </Modal.Header>
        <Modal.Body>Que Contiene: <br/>Tomate, mozzarella, anchoas, orégano, alcaparras y aceite de oliva. <br/>
        8 porciones Precio: $1.600,00    <br/>1 (una) unidad por pedido</Modal.Body>
            <Modal.Footer>
          <Button variant="primary btnCard fw-semibold p-3 p-lg-2 text-light" onClick={handleClose}>
            Salir
          </Button>
          <Button variant="primary btnCard fw-semibold p-3 p-lg-2 text-light" onClick={handleClose}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDetalleProducto;