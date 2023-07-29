import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CardProducto from "./CardProducto";
import { consultaListaProductos } from "../../helpers/queris";

const GrillaProductos = ({ filter, categoria }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        consultaListaProductos().then((respuesta) => {
            setProductos(respuesta);
        });
    }, []);

    const productosFiltrados = productos.filter((producto) => {
        const nombreIncluido = producto.nombre.toLowerCase().includes(filter.toLowerCase()) || filter === "";
        const categoriaCoincide = !categoria || producto.categoría === categoria;
        return nombreIncluido && categoriaCoincide;
    });

    return (
        <Row>
            {productosFiltrados.map((producto) => (
                <CardProducto key={producto.id} producto={producto} />
            ))}
        </Row>
    );
};

export default GrillaProductos;
