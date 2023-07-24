import React from "react";
import { Trash3 } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";

const ItemCarrito = () => {
  return (
    <>
      <tr>
        <td>1</td>
        <td>Pizza</td>
        <td>2500</td>
        <td>
        <Button variant="danger btn-sm">
            <Trash3 />
          </Button>
        </td>
      </tr>
    </>
  );
};

export default ItemCarrito;
