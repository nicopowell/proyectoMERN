import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./administrador.css";
import { consultaBorrarProducto, consultaListaProductos } from "../../helpers/queris";


const ItemProducto = ({producto, numeroDeProducto}) => {
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
                  consultaListaProductos().then((respuesta) =>
                  setProductos(respuesta)
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
            <td className="columnaUrl">
            {producto.imagen}
            </td>
            <td>{producto.estado}</td>
            <td className="text-center">
            <Button variant="primary">
                    Suspender
                </Button>
                <Link className="btn btn-warning" to={'/administrador/editarProducto/'+producto.id}>Editar</Link>
                <Button variant="danger" onClick={borrarProducto}>
          Borrar
        </Button>
            </td>
        </tr>
    );
};

export default ItemProducto;
