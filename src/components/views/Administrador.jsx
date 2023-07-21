import React from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { useState } from 'react';

const Administrador = () => {
    const [radioValue, setRadioValue] = useState('Productos');

    const tablas = [
        { name: 'Usuarios', value: 'Usuarios' },
        { name: 'Productos', value: 'Productos' },
        { name: 'Pedidos', value: 'Pedidos' },
      ];

    return (
        <section className="d-flex flex-column align-items-center">
            <ButtonGroup className="mt-4">
                {tablas.map((tabla, id) => (
                    <ToggleButton
                        key={id}
                        id={`btnTabla${tabla.value}`}
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
        </section>
    );
};

export default Administrador;
