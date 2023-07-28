import React from "react";
import { Button } from "react-bootstrap";

const ItemUsuario = ({usuario, numeroDeUsuario}) => {
    return (
        <tr>
            <td>{numeroDeUsuario}</td>
            <td>{usuario.nombreUsuario}</td>
            <td>{usuario.email}</td>
            <td>{usuario.perfil}</td>
            <td>{usuario.estado}</td>
            <td className="text-center">
                <Button variant="primary my-1 mx-1">Suspender</Button>
                <Button variant="danger">Borrar</Button>
            </td>
        </tr>
    );
};

export default ItemUsuario;
