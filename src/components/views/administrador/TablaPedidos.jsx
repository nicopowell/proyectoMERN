import React from 'react';
import { Table } from 'react-bootstrap';
import ItemPedido from './ItemPedido';

const TablaPedidos = () => {
    return (
        <Table responsive striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Usuario</th>
                    <th>Fecha</th>
                    <th>Productos</th>
                    <th>Estado</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                <ItemPedido></ItemPedido>
            </tbody>
        </Table>
    );
};

export default TablaPedidos;