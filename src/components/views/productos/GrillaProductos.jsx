import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CardProducto from "./CardProducto";
import { consultaListaProductos } from "../../helpers/queris";

const GrillaProductos = ({ filter, categoriaSeleccionada, onAgregarAlCarrito }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        consultaListaProductos().then((respuesta) => {
            setProductos(respuesta);
        });
    }, []);

    const productosFiltrados = productos.filter((producto) => {
        const nombreIncluido =
            producto.nombre.toLowerCase().includes(filter.toLowerCase()) || filter === "";
        const categoriaCoincide =
            !categoriaSeleccionada || categoriaSeleccionada === "Categorias" || producto.categoria === categoriaSeleccionada;
        return nombreIncluido && categoriaCoincide;
    });

    return (
        <Row>
            {productosFiltrados.map((producto) =>
                producto.estado ===  "Activo" ? <CardProducto key={producto._id} producto={producto} onAgregarAlCarrito={onAgregarAlCarrito}/> : null
            )}
        </Row>
    );
};

export default GrillaProductos;
