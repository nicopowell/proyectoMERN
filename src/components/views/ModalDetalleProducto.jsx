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
                    <div className="px-2 pt-3">
                        <p className="mb-2"><span className="fw-bold">Que Contiene:</span> {producto.detalle}</p>
                        <p className="mb-2"><span className="fw-bold">Precio:</span> {producto.precio}</p>
                        <p><span className="fw-bold">Categoria:</span> {producto.categoria}</p>
                    </div>
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
