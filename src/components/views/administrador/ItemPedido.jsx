import React from "react";
import { Button } from "react-bootstrap";

const ItemPedido = ({ pedido, numeroDePedido }) => {
    let contador = 0
    return (
        <tr>
            <td>{numeroDePedido}</td>
            <td>{pedido.usuario}</td>
            <td>{pedido.fecha}</td>
            <td>
                <ul>
                    {pedido.productos.map((producto) => (
                         <li key={producto.id}>
                         {producto.producto} x {producto.cantidad}
                       </li>
                    ))}
                </ul>
            </td>
            <td>{pedido.estado}</td>
            <td className="text-center">
                <Button variant="primary my-1 mx-1">Suspender</Button>
                <Button variant="danger">Borrar</Button>
            </td>
        </tr>
    );
};

export default ItemPedido;
