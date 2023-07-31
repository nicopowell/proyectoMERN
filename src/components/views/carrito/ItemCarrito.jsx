import React from "react";
import { Trash3 } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";

const ItemCarrito = ({item}) => {
  const {producto, cantidad} = item;
  return (
    <>
      <tr>
        <td>{cantidad}</td>
        <td>{producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>
          <Button variant="danger btn-sm" id="btnEliminarProducto">
            <Trash3 />
          </Button>
        </td>
      </tr>
    </>
  );
};

export default ItemCarrito;
