import React, { useState } from "react";
import { Button, Dropdown, DropdownButton, Form, InputGroup } from "react-bootstrap";

const InputProductos = ({ handleFilterChange }) => {
    const [categoria, setCategoria] = useState(null); // Inicializar con null en lugar de ""

    const handleInputChange = (event) => {
        handleFilterChange(event.target.value, categoria);
    };

    const handleCategoria = (categoria) => {
        setCategoria(categoria === "Categorias" ? null : categoria); // Pasar null cuando es "Categorias"
        handleFilterChange("", categoria === "Categorias" ? null : categoria);
    };

    return (
        <Form className="my-3">
            <InputGroup>
                <Form.Control
                    type="text"
                    placeholder="Buscar productos"
                    maxLength={100}
                    onChange={handleInputChange}
                />
                <DropdownButton
                    className="btnInputCategoria"
                    title={categoria || "Categorias"}
                    id="input-categorias"
                    align="end"
                >
                    <Dropdown.Item
                        as={Button}
                        className="text-dark"
                        onClick={() => handleCategoria("Categorias")}
                    >
                        Todos
                    </Dropdown.Item>
                    <Dropdown.Item
                        as={Button}
                        className="text-dark"
                        onClick={() => handleCategoria("Bebidas sin alcohol")}
                    >
                        Bebidas sin alcohol
                    </Dropdown.Item>
                    <Dropdown.Item
                        as={Button}
                        className="text-dark"
                        onClick={() => handleCategoria("Bebidas con alcohol")}
                    >
                        Bebidas con alcohol
                    </Dropdown.Item>
                    <Dropdown.Item
                        as={Button}
                        className="text-dark"
                        onClick={() => handleCategoria("Pizzas")}
                    >
                        Pizzas
                    </Dropdown.Item>
                    <Dropdown.Item
                        as={Button}
                        className="text-dark"
                        onClick={() => handleCategoria("Pastas")}
                    >
                        Pastas
                    </Dropdown.Item>
                </DropdownButton>
            </InputGroup>
        </Form>
    );
};

export default InputProductos;
