import React, { useEffect } from "react";
import { ButtonGroup, Container, Table, ToggleButton } from "react-bootstrap";
import { useState } from "react";
import TablaProductos from "./administrador/TablaProductos";
import TablaUsuarios from "./administrador/TablaUsuarios";
import TablaPedidos from "./administrador/TablaPedidos";
import { consultaListaProductos, consultaListaUsuarios } from "../helpers/queris";

const Administrador = () => {
    const [tablaSeleccionada, setTablaSeleccionada] = useState("Productos");
    const [productos, setProductos] = useState([]);
    const [usuarios, setUsuarios] = useState([]);

    const tablas = [
        { name: "Usuarios", value: "Usuarios" },
        { name: "Productos", value: "Productos" },
        { name: "Pedidos", value: "Pedidos" },
    ];

    useEffect(() => {
        consultaListaProductos().then((respuesta) => {
            setProductos(respuesta);
        });
        consultaListaUsuarios().then((respuesta) =>{
            setUsuarios(respuesta);
        })
    }, []);

    const renderizarTablaSeleccionada = () => {
        switch (tablaSeleccionada) {
            case "Usuarios":
                return <TablaUsuarios usuarios={usuarios}/>;
            case "Productos":
                return <TablaProductos productos={productos}/>;
            case "Pedidos":
                return <TablaPedidos />;
            default:
                return null;
        }
    };

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
        </Container>
    );
};

export default Administrador;
