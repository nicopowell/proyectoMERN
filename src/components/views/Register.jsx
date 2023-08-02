import { useState } from "react";
import { Form, Button,Modal,NavItem,NavDropdown} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { registrar} from "../helpers/queris";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = ({setEstaLogueado}) => {
    const [registershow, registersetShow] = useState(false);

    const registerhandleClose = () => registersetShow(false);
    const registerhandleShow = () => registersetShow(true);

    const { register, handleSubmit, formState: { errors}, reset } = useForm();
    const navegacion = useNavigate();

    const onSubmit = (usuario)=>{
          usuario.estado = "Activo";
          usuario.perfil = "Usuario";
              registrar(usuario).then((respuesta)=>{
               if(respuesta && respuesta.status === 201){
                sessionStorage.setItem('usuario', JSON.stringify(usuario.perfil));
                 Swal.fire(
                  'Fantastico',
                   `su usuario quedo registrado exitosamente`,
                   'success'
                 );
                 setEstaLogueado(true)
                 reset();
                 navegacion('/');
                 registerhandleClose()
               }else if(respuesta === null){
                Swal.fire(
                  'Error',
                  'Este usuario o correo ya existe',
                  'error'
                )
               }else{
                 Swal.fire(
                   'Error',
                   'No se pudo registrar su usuario exitosamente ',
                   'error'
                 )
               }
             })
          }

    return (
        <>
        <NavDropdown.Item className="text-center">
          <NavItem onClick={registerhandleShow}>
          Regístrarse
          </NavItem>
          </NavDropdown.Item>
        
        <Modal show={registershow} onHide={registerhandleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Regístrarse</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>NombreUsuario*</Form.Label>
                        <Form.Control type="text" placeholder="nombreusuario"{...register("nombreUsuario", {
                            required: "El nombre de usuario es obligatorio",
                                minLength: {
                                    value: 2,
                                    message: "La cantidad minima de caracteres es de 2 digitos",
                                },
                                maxLength: {
                                value: 100,
                                message: "La cantidad maxima de caracteres es de 2 digitos",
                                },
                        })}/>
                            <Form.Text className="text-danger">
                                {errors.nombreUsuario?.message}
                            </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Correo electronico*</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            {...register('email', {
                                required: 'El email es un dato obligatorio',
                                pattern:{
                                  value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                                  message: 'El email debe cumplir con el formato mail@dominio.com'
                                }
                               })}
                            />
                            <Form.Text className="text-danger">
                                {errors.email?.message}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Contraseña*</Form.Label>
                            <Form.Control
                            type="password"
                            placeholder="contraseña"
                            {...register("contraseña", {
                                required: 'La contraseña es un dato obligatorio',
                                pattern:{
                                  value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                                  message: 'Su contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.'
                                }
                               })}
                            />
                               <Form.Text className="text-danger">
                                 {errors.contraseña?.message}
                               </Form.Text>
                        </Form.Group>
                        <Button
                        variant="primary"
                        type="submit"
                        className="mt-4 d-block m-auto"
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