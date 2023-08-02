import React from "react";
import { Trash3 } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";

const ItemCarrito = ({item, eliminarProducto}) => {
  const {producto, cantidad} = item;
  const handleEliminarProducto = () => {
    eliminarProducto(producto.id);
  };
  return (
    <>
      <tr>
        <td>{cantidad}</td>
        <td>{producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>
          <Button variant="danger btn-sm" id="btnEliminarProducto"  onClick={handleEliminarProducto}>
            <Trash3 />
          </Button>
        </td>
      </tr>
    </>
  );
};

export default ItemCarrito;