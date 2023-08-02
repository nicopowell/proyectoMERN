import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { consultaCambiarEstadoUsuarios } from "../../helpers/queris";

const ItemUsuario = ({ usuario, numeroDeUsuario }) => {
    const [estado, setEstado] = useState(usuario.estado);
    const cambiarEstado = () => {
        const nuevoEstado = estado === "Activo" ? "Suspendido" : "Activo";

        consultaCambiarEstadoUsuarios({ estado: nuevoEstado }, usuario.id)
            .then(() => {
                setEstado(nuevoEstado);
            })
            .catch((error) => {
                console.error("Error al cambiar el estado del usuario:", error);
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
                <Button variant="danger">Borrar</Button>
            </td>
        </tr>
    );
};

export default ItemUsuario;
