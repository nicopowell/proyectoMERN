import React from "react";
import { Table } from "react-bootstrap";
import ItemProducto from "./ItemProducto";

const TablaProductos = ({ productos, setProductos }) => {
    let contador = 0;
    return (
        <Table responsive striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Producto</th>
                    <th>Detalle</th>
                    <th>Categoría</th>
                    <th>Precio</th>
                    <th>URL Imagen</th>
                    <th>Estado</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {productos.map((producto) => (
                    <ItemProducto
                        key={producto._id}
                        producto={producto}
                        numeroDeProducto={++contador}
                        setProductos={setProductos}
                    ></ItemProducto>
                ))}
            </tbody>
        </Table>
    );
};

export default TablaProductos;
