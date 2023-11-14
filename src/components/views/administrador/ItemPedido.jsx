import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {
  consultaCambiarEstadoPedido,
  consultaBorrarPedido,
  consultaListaPedidos,
} from "../../helpers/queris";
import Swal from "sweetalert2";

const ItemPedido = ({ pedido, numeroDePedido, setPedidos }) => {
  const [estado, setEstado] = useState(pedido.estado);
  const cambiarEstado = () => {
    const nuevoEstado = estado === "Pendiente" ? "Entregado" : "Pendiente";

    consultaCambiarEstadoPedido({ estado: nuevoEstado }, pedido._id)
      .then(() => {
        setEstado(nuevoEstado);
      })
      .catch((error) => {
        console.error("Error al cambiar el estado del pedido:", error);
      });
  };

  const borrarPedido = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Una vez borrado, no podrás recuperar este pedido.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d96c06",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, borrarlo",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        consultaBorrarPedido(pedido._id)
          .then(() => {
            Swal.fire(
              "Pedido Eliminado.",
              "Eliminaste el pedido correctamente.",
              "success"
            );
            consultaListaPedidos().then((respuesta) => setPedidos(respuesta));
          })
          .catch((error) => {
            Swal.fire(
              "Algo falló",
              "No se pudo eliminar el pedido. Inténtalo mas tarde.",
              "error"
            );
            console.log(error);
          });
      }
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
            <li key={producto._id}>
              {producto.producto} x {producto.cantidad}
            </li>
          ))}
        </ul>
      </td>
      <td>{estado}</td>
      <td className="text-center">
        <Button variant="primary my-1 mx-1" onClick={cambiarEstado}>
          {estado === "Pendiente" ? "Confirmar" : "Cancelar"}
        </Button>
        <Button variant="danger" onClick={borrarPedido}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemPedido;
