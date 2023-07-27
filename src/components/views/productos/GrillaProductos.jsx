import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CardProducto from "./CardProducto";
import { consultaListaProductos } from "../../helpers/queris";

const GrillaProductos = ({filter}) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        consultaListaProductos().then((respuesta) => {
            setProductos(respuesta);
        });
    }, []);

    const filteredProductos = productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <Row>
            {filteredProductos.map((producto) => (
                <CardProducto key={producto.id} producto={producto}></CardProducto>
            ))}
        </Row>
    );
};
export default GrillaProductos;
