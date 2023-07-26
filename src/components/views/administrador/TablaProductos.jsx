import React from 'react';
import {Table } from 'react-bootstrap';
import ItemProducto from './ItemProducto';

const TablaProductos = () => {
    return (
        <Table responsive striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Producto</th>
                    <th>Detalle</th>
                    <th>Categoria</th>
                    <th>Precio</th>
                    <th>URL Imagen</th>
                    <th>Estado</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                <ItemProducto></ItemProducto>
                <ItemProducto></ItemProducto>
            </tbody>
        </Table>
    );
};

export default TablaProductos;