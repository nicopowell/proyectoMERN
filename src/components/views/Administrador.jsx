import React from "react";
import { ButtonGroup, Container, Table, ToggleButton} from "react-bootstrap";
import { useState } from "react";
import {Link} from "react-router-dom";
import TablaProductos from "./administrador/TablaProductos";
import TablaUsuarios from "./administrador/TablaUsuarios";
import TablaPedidos from "./administrador/TablaPedidos";

const Administrador = () => {
    const [tablaSeleccionada, setTablaSeleccionada] = useState("Productos");

    const tablas = [
        { name: "Usuarios", value: "Usuarios" },
        { name: "Productos", value: "Productos" },
        { name: "Pedidos", value: "Pedidos" },
    ];

    const renderizarTablaSeleccionada = () => {
        switch (tablaSeleccionada) {
          case "Usuarios":
            return <TablaUsuarios />;
          case "Productos":
            return <TablaProductos />;
          case "Pedidos":
            return <TablaPedidos />;
          default:
            return null;
        }
      };
      const agregarProducto = () => {
        if(tablaSeleccionada == "Productos"){
            return <Link className="btn btn-success mx-5 h-25" to='/administrador/CrearProducto'>
                    Agregar
                    </Link>;
        }
      }

    return (
        <Container className="mainSection">
            <div className="d-flex justify-content-center">
                <ButtonGroup className="mt-5 mb-4">
                    {tablas.map((tabla, id) => (
                        <ToggleButton
                            key={id}
                            id={`btnTabla${tabla.value}`}
                            className={`btnTablas fw-bold p-3 py-2 ${
                                tablaSeleccionada === tabla.value ? "btnTablasSelected" : ""
                            }`}
                            type="radio"
                            name="radio"
                            value={tabla.value}
                            checked={tablaSeleccionada === tabla.value}
                            onChange={(e) => setTablaSeleccionada(e.currentTarget.value)}
                        >
                            {tabla.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
            </div>
           {renderizarTablaSeleccionada()}
           {agregarProducto()};
        </Container>
    );
};

export default Administrador;
