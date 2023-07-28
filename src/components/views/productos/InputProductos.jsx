import React, { useState } from "react";
import { Button, Dropdown, DropdownButton, Form, InputGroup } from "react-bootstrap";

const InputProductos = ({ handleFilterChange, handleCategoria, categoriaSeleccionada }) => {
    const [filter, setFilter] = useState(""); // Estado para el filtro de búsqueda

    const handleInputChange = (event) => {
        setFilter(event.target.value); // Actualizar el estado del filtro de búsqueda
        handleFilterChange(event.target.value, categoriaSeleccionada); // Llamar a la función del padre con el filtro y la categoría actual
    };

    const handleCategoriaClick = (categoria) => {
        handleCategoria(categoria); // Llamar a la función del padre para cambiar la categoría
        handleFilterChange(filter, categoria); // Llamar a la función del padre con el filtro actual y la nueva categoría
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
