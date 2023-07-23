import React from "react";
import { Button } from "react-bootstrap";
import "./administrador.css";

const ItemProducto = () => {
    return (
        <tr>
            <td>1</td>
            <td>Pizza</td>
            <td>Pizza de Masa madre</td>
            <td>Pizzas</td>
            <td>$1.600</td>
            <td className="columnaUrl">
                https://images.pexels.com/photos/3682837/pexels-photo-3682837.jpeg
            </td>
            <td>Activo</td>
            <td className="text-center">
                <Button variant="warning my-1 mx-1">Editar</Button>
                <Button variant="danger">Borrar</Button>
            </td>
        </tr>
    );
};

export default ItemProducto;
