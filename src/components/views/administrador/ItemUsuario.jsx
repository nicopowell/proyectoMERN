import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { consultaBorrarUsuario, consultaCambiarEstadoUsuarios, consultaListaUsuarios } from "../../helpers/queris";
import Swal from "sweetalert2";

const ItemUsuario = ({ usuario, numeroDeUsuario, setUsuarios }) => {
    const [estado, setEstado] = useState(usuario.estado);
    const cambiarEstado = () => {
        const nuevoEstado = estado === "Activo" ? "Suspendido" : "Activo";

        consultaCambiarEstadoUsuarios({ estado: nuevoEstado }, usuario._id)
            .then(() => {
                setEstado(nuevoEstado);
            })
            .catch((error) => {
                console.error("Error al cambiar el estado del usuario:", error);
            });
    };

    const borrarUsuario = () => {
        Swal.fire({
          title: `¿Está seguro de borrar el usuario ${usuario.nombreUsuario}?`,
          text: "No se puede revertir este paso",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#00afb9",
          cancelButtonColor: "#d96c06",
          confirmButtonText: "Borrar",
          cancelButtonText: "Cancelar",
        }).then((result) => {
          if (result.isConfirmed) {
            consultaBorrarUsuario(usuario._id)
              .then(() => {
                Swal.fire(
                  "Usuario Eliminado.",
                  "Eliminaste el usuario correctamente.",
                  "success"
                );
                consultaListaUsuarios().then((respuesta) => setUsuarios(respuesta));
              })
              .catch((error) => {
                Swal.fire(
                  "Algo falló",
                  "No se pudo eliminar el usuario. Inténtalo mas tarde.",
                  "error"
                );
                console.log(error);
              });
          }
        });
      };

    return (
        <tr>
            <td>{numeroDeUsuario}</td>
            <td>{usuario.nombreUsuario}</td>
            <td>{usuario.email}</td>
            <td>{usuario.perfil}</td>
            <td>{estado}</td>
            <td className="text-center">
                <Button variant="primary mx-1" onClick={cambiarEstado}>
                    {estado === "Activo" ? "Suspender" : "Activar"}
                </Button>
                <Button variant="danger" onClick={borrarUsuario}>Borrar</Button>
            </td>
        </tr>
    );
};

export default ItemUsuario;
