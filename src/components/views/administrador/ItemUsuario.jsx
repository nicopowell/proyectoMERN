import React from "react";
import { Button } from "react-bootstrap";

const ItemUsuario = () => {
    return (
        <tr>
            <td>1</td>
            <td>Nico</td>
            <td>nico@rollingcode.com</td>
            <td>Usuario</td>
            <td>Activo</td>
            <td className="text-center">
                <Button variant="danger">
                    Borrar
                </Button>
            </td>
        </tr>
    );
};

export default ItemUsuario;