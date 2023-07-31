import React from "react";
import { Trash3 } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";

const ItemCarrito = ({producto}) => {
  return (
    <>
      <tr>
        <td>1</td>
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
