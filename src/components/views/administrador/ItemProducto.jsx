import React from "react";
import { Button } from "react-bootstrap";
import "./administrador.css";

const ItemProducto = ({producto, numeroDeProducto}) => {
    return (
        <tr>
            <td>{numeroDeProducto}</td>
            <td>{producto.nombre}</td>
            <td>{producto.detalle}</td>
            <td>{producto.categoria}</td>
            <td>${producto.precio}</td>
            <td className="columnaUrl">
            {producto.imagen}
            </td>
            <td>{producto.estado}</td>
            <td className="text-center">
            <Button variant="primary">
                    Suspender
                </Button>
                <Button variant="warning my-1 mx-1">Editar</Button>
                <Button variant="danger">Borrar</Button>
            </td>
        </tr>
    );
};

export default ItemProducto;
