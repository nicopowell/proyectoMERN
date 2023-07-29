import React, { useState } from "react";
import { Button, Dropdown, DropdownButton, Form, InputGroup } from "react-bootstrap";

const InputProductos = ({ handleFilterChange, handleCategoria, categoriaSeleccionada }) => {
    const [filter, setFilter] = useState(""); 

    const handleInputChange = (event) => {
        setFilter(event.target.value);
        handleFilterChange(event.target.value, categoriaSeleccionada);
    };

    const handleCategoriaClick = (categoria) => {
        handleCategoria(categoria);
        handleFilterChange(filter, categoria); 
    };

    return (
        <Form className="my-3">
            <InputGroup>
                <Form.Control
                    type="text"
                    placeholder="Buscar productos"
                    maxLength={100}
                    value={filter}
                    onChange={handleInputChange}
                />
                <DropdownButton
                    className="btnInputCategoria"
                    title={categoriaSeleccionada || "Categorias"}
                    id="input-categorias"
                    align="end"
                >
                    <Dropdown.Item
                        as={Button}
                        className="text-dark"
                        onClick={() => handleCategoriaClick("Categorias")}
                    >
                        Todos
                    </Dropdown.Item>
                    <Dropdown.Item
                        as={Button}
                        className="text-dark"
                        onClick={() => handleCategoriaClick("Bebidas sin alcohol")}
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
