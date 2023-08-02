import React, { useEffect } from "react";
import { ButtonGroup, Container, Table, ToggleButton } from "react-bootstrap";
import { useState } from "react";
import {Link} from "react-router-dom";
import TablaProductos from "./administrador/TablaProductos";
import TablaUsuarios from "./administrador/TablaUsuarios";
import TablaPedidos from "./administrador/TablaPedidos";
import {
    consultaListaPedidos,
    consultaListaProductos,
    consultaListaUsuarios,
} from "../helpers/queris";
import "./administrador/administrador.css"

const Administrador = () => {
    const [tablaSeleccionada, setTablaSeleccionada] = useState("Productos");
    const [productos, setProductos] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [pedidos, setPedidos] = useState([]);

    const tablas = [
        { name: "Usuarios", value: "Usuarios" },
        { name: "Productos", value: "Productos" },
        { name: "Pedidos", value: "Pedidos" },
    ];

    useEffect(() => {
        consultaListaProductos().then((respuesta) => {
            setProductos(respuesta);
        });
        consultaListaUsuarios().then((respuesta) => {
            setUsuarios(respuesta);
        });
        consultaListaPedidos().then((respuesta) => {
            setPedidos(respuesta);
        });
    }, []);

    const renderizarTablaSeleccionada = () => {
        switch (tablaSeleccionada) {
            case "Usuarios":
                return <TablaUsuarios usuarios={usuarios} />;
            case "Productos":
                return <TablaProductos productos={productos}  setProductos={setProductos} />;
            case "Pedidos":
                return <TablaPedidos pedidos={pedidos} setPedidos={setPedidos} />;
            default:
                return null;
        }
      };
      const agregarProducto = () => {
        if(tablaSeleccionada == "Productos"){
            return <Link className="btn btn-success" to='/administrador/CrearProducto'>
                    Agregar
                    </Link>
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
            <div className="d-flex justify-content-end my-1" id="boton-agregar">
           {agregarProducto()}
           </div>
           {renderizarTablaSeleccionada()}
        </Container>
    );
};

export default Administrador;
