import React from "react";
import { Table } from "react-bootstrap";
import ItemUsuario from "./ItemUsuario";

const TablaUsuarios = () => {
    return (
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
                <ItemUsuario></ItemUsuario>
            </tbody>
        </Table>
    );
};

export default TablaUsuarios;
