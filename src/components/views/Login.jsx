import { Form, Button,Modal,NavItem,NavDropdown} from "react-bootstrap";
import { useState } from "react";
import { Person } from "react-bootstrap-icons";
import { login } from "../helpers/queris";
import Register from "./Register";
import { useForm} from 'react-hook-form';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const Login = ({setUsuarioLogueado, setEstaLogueado}) => {
  const [loginshow, loginsetShow] = useState(false);

  const loginhandleClose = () => loginsetShow(false);
  const loginhandleShow = () => loginsetShow(true);


  const { register, handleSubmit, formState: { errors}} = useForm();
  const navegacion = useNavigate();

  

  const onSubmit = (usuario)=>{
    login(usuario).then((respuesta)=>{
      if(respuesta){
        sessionStorage.setItem('usuario', JSON.stringify(respuesta.perfil));
        Swal.fire(
          'Bienvenido',
          `${respuesta.nombreUsuario} iniciaste sesion correctamente`,
          'success'
        );
        setEstaLogueado(true)
        setUsuarioLogueado(respuesta);
        //redireccionar
        if(respuesta.perfil === "Admin"){
          navegacion('/administrador');
        } else {
          navegacion('/');
        }
        
      }else{
        Swal.fire(
          'Error',
          'Email o contraseña incorrecto ',
          'error'
        )
      }
    })
  }
  return (
    <>
    <NavDropdown title="Ingresar" className="dropMenu">
    <NavDropdown.Item >
    <NavItem onClick={loginhandleShow}>
    <Person></Person> Iniciar Sesión
    </NavItem>
    </NavDropdown.Item>
      <NavDropdown.Divider />
      <div className="dropdown-header">
        ¿No tienes cuenta? Regístrate.
        </div>
        <NavDropdown.Divider />
        <Register setEstaLogueado={setEstaLogueado}></Register>
          </NavDropdown>


    <Modal show={loginshow} onHide={loginhandleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Iniciar Sesión</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Correo electronico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese un email"
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
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
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
          className="mt-4 d-block m-auto"
          type="submit"
        >
          Iniciar Sesion
        </Button>
      </Form>
    </Modal.Body>
  </Modal>
  </>
  );
};

export default Login;