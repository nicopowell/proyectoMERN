import { useState } from "react";
import { Form, Button,Modal} from "react-bootstrap";
// import { useForm } from "react-hook-form";
// import { consultaAgregarProducto } from "../../helpers/queris";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

const Register = () => {
    const [registershow, registersetShow] = useState(false);

    const registerhandleClose = () => registersetShow(false);
    const registerhandleShow = () => registersetShow(true);

    // const { register, handleSubmit, formState: { errors}, reset } = useForm();
    // const navegacion = useNavigate();

    return (
        <>
        <Button variant="primary" onClick={registerhandleShow}>
            Regístrarse
        </Button>
        
        <Modal show={registershow} onHide={registerhandleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Regístrarse</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="nombre" autoFocus />
                        <Form.Control.Feedback type="invalid">
                            Ingrese un nombre valido
                            </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" placeholder="apellido" autoFocus />
                        <Form.Control.Feedback type="invalid">
                            Ingrese un apellido valido
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Correo electronico</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            autoFocus
                            />
                        <Form.Control.Feedback type="invalid">
                            Ingrese un email valido
                        </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                            type="password"
                            placeholder="contraseña"
                            autoFocus
                            />
                        <Form.Control.Feedback type="invalid">
                        Ingrese una contraseña valida: 8 caracteres minimos, una
                        mayuscula, una minuscula y un simbolo.
                        </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Repetir contraseña</Form.Label>
                            <Form.Control
                            type="password"
                            placeholder="contraseña"
                            autoFocus
                            />
                        <Form.Control.Feedback type="invalid">
                        Ingrese una contraseña valida: 8 caracteres minimos, una
                        mayuscula, una minuscula y un simbolo.
                        </Form.Control.Feedback>
                        </Form.Group>
                        <Button
                        variant="primary"
                        className="mt-4 d-block m-auto"
                        type="submit"
                        >
                            Registrarse
                        </Button>
                </Form>
            </Modal.Body>
        </Modal>
        </>
    );
}

export default Register;