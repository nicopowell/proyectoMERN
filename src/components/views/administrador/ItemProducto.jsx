import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./administrador.css";
import { consultaCambiarEstadoProducto, consultaBorrarProducto, consultaListaProductos } from "../../helpers/queris";
import Swal from "sweetalert2";

const ItemProducto = ({producto, numeroDeProducto, setProductos}) => {
  const [estado, setEstado] = useState(producto.estado);
  
  const cambiarEstado = () => {
        const nuevoEstado = estado === "Activo" ? "De baja" : "Activo";

        consultaCambiarEstadoProducto({ estado: nuevoEstado }, producto.id)
            .then(() => {
                setEstado(nuevoEstado);
            })
            .catch((error) => {
                console.error("Error al cambiar el estado del producto:", error);
            });
    };
  
  const borrarProducto = () => {
        Swal.fire({
          title: `¿Esta seguro de borrar el producto ${producto.nombre}?`,
          text: "No se puede revertir este paso",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#00afb9",
          cancelButtonColor: "#d96c06",
          confirmButtonText: "Borrar",
          cancelButtonText: "Cancelar",
        }).then((result) => {
          if (result.isConfirmed) {
              consultaBorrarProducto(producto.id).then((respuesta) => {
              console.log(respuesta);
              if (respuesta.status === 200) {
                Swal.fire(
                  "Producto borrado",
                  `El ${producto.nombre} fue borrado correctamente`,
                  "success"
                );
                  consultaListaProductos().then((respuesta) =>  setProductos(respuesta)
                );
              } else {
                Swal.fire(
                  "Hubo un problema",
                  `Intente realizar esta operación dentro de unos minutos`,
                  "success"
                );
              }
            });
          }
        });
      };

    return (
        <tr>
            
            <td>{numeroDeProducto}</td>
            <td>{producto.nombre}</td>
            <td>{producto.detalle}</td>
            <td>{producto.categoria}</td>
            <td>${producto.precio}</td>
            <td className="columnaUrl">{producto.imagen}</td>
            <td>{estado}</td>
            <td className="text-center">
                <Button variant="primary mx-1" onClick={cambiarEstado}>
                    {estado === "Activo" ? "Dar de baja" : "Activar"}
                </Button>
                <br></br>
                <Link className="btn btn-warning mx-1 my-1" to={"/administrador/editarProducto/" + producto.id}>
                    Editar
                </Link>
                <Button variant="danger" onClick={borrarProducto}>
            </td>
        </tr>
    );
};

export default ItemProducto;
