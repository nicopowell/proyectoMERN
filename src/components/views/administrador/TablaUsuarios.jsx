import React from "react";
import { Table } from "react-bootstrap";
import ItemUsuario from "./ItemUsuario";

const TablaUsuarios = ({ usuarios, setUsuarios }) => {
    let contador = 0
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
                {usuarios.map((usuario) => (
                    <ItemUsuario
                        key={usuario._id}
                        usuario={usuario}
                        numeroDeUsuario={++contador}
                        setUsuarios={setUsuarios}
                    ></ItemUsuario>
                ))}
            </tbody>
        </Table>
    );
};

export default TablaUsuarios;
