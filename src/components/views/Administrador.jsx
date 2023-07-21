import React from "react";
import { ButtonGroup, Container, Table, ToggleButton } from "react-bootstrap";
import { useState } from "react";
import ItemUsuario from "./administrador/ItemUsuario";

const Administrador = () => {
    const [radioValue, setRadioValue] = useState("Productos");

    const tablas = [
        { name: "Usuarios", value: "Usuarios" },
        { name: "Productos", value: "Productos" },
        { name: "Pedidos", value: "Pedidos" },
    ];

    return (
        <Container>
            <div className="d-flex justify-content-center">
                <ButtonGroup className="mt-5 mb-4">
                    {tablas.map((tabla, id) => (
                        <ToggleButton
                            key={id}
                            id={`btnTabla${tabla.value}`}
                            className={`btnTablas fw-bold p-3 py-2 ${
                                radioValue === tabla.value ? "btnTablasSelected" : ""
                            }`}
                            type="radio"
                            name="radio"
                            value={tabla.value}
                            checked={radioValue === tabla.value}
                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >
                            {tabla.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
            </div>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Usuario</th>
                        <th>Email</th>
                        <th>Perfil</th>
                        <th>Estado</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <ItemUsuario></ItemUsuario>
                </tbody>
            </Table>
        </Container>
    );
};

export default Administrador;
