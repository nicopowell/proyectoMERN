import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./administrador.css";
import { consultaCambiarEstado } from "../../helpers/queris";

const ItemProducto = ({ producto, numeroDeProducto }) => {
    const [estado, setEstado] = useState(producto.estado);
    const cambiarEstado = () => {
        const nuevoEstado = estado === "Activo" ? "De baja" : "Activo";

        consultaCambiarEstado({ estado: nuevoEstado }, producto.id)
            .then(() => {
                setEstado(nuevoEstado);
            })
            .catch((error) => {
                console.error("Error al cambiar el estado del producto:", error);
            });
    };

    return (
        <tr>
            <td>{numeroDeProducto}</td>
            <td>{producto.nombre}</td>
            <td>{producto.detalle}</td>
            <td>{producto.categoria}</td>
            <td>${producto.precio}</td>
            <td className="columnaUrl">{producto.imagen}</td>
            <td>{estado}</td>
            <td className="text-center">
                <Button variant="primary mx-1" onClick={cambiarEstado}>
                    Suspender
                </Button>
                <br></br>
                <Link
                    className="btn btn-warning mx-1 my-1"
                    to={"/administrador/editarProducto/" + producto.id}
                >
                    Editar
                </Link>
                <Button variant="danger">Borrar</Button>
            </td>
        </tr>
    );
};

export default ItemProducto;
