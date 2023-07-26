import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CardProducto from "./CardProducto";
import { consultaListaProductos } from "../../helpers/queris";

const GrillaProductos = ({onAgregarAlCarrito}) => {
    /* Aqui al agregar el read, hay que poner un prop que diga: onAgregarAlCarrito={onAgregarAlCarrito} */
    useEffect(()=>{
        consultaListaProductos().then((respuesta)=>{
          setProductos(respuesta)
        })
      },[])
    return (
        <Row>
            {productos.map((producto) => (
                <CardProducto key={producto.id} producto={producto}></CardProducto>
            ))}
        </Row>
    );
};
export default GrillaProductos;