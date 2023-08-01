import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { consultaCambiarEstadoPedido } from "../../helpers/queris";

const ItemPedido = ({ pedido, numeroDePedido }) => {
    const [estado, setEstado] = useState(pedido.estado);
    const cambiarEstado = () => {
        const nuevoEstado = estado === "Pendiente" ? "Entregado" : "Pendiente";

        consultaCambiarEstadoPedido({ estado: nuevoEstado }, pedido.id)
            .then(() => {
                setEstado(nuevoEstado);
            })
            .catch((error) => {
                console.error("Error al cambiar el estado del pedido:", error);
            });
    };
    
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
            <td>{estado}</td>
            <td className="text-center">
                <Button variant="primary my-1 mx-1" onClick={cambiarEstado}>{estado === "Pendiente" ? "Confirmar" : "Cancelar"}</Button>
                <Button variant="danger">Borrar</Button>
            </td>
        </tr>
    );
};

export default ItemPedido;