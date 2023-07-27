import React from "react";
import { Table } from "react-bootstrap";
import ItemPedido from "./ItemPedido";

const TablaPedidos = ({ pedidos }) => {
    let contador = 0;
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
                {pedidos.map((pedido) => (
                    <ItemPedido
                        key={pedido.id}
                        pedido={pedido}
                        numeroDePedido={++contador}
                    ></ItemPedido>
                ))}
            </tbody>
        </Table>
    );
};

export default TablaPedidos;
