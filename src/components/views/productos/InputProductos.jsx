import React from "react";
import { Button, Dropdown, DropdownButton, Form, InputGroup } from "react-bootstrap";

const InputProductos = () => {
    return (
        <Form className="my-3">
            <InputGroup>
                <Form.Control type="text" placeholder="Buscar productos" maxLength={100} />
                <DropdownButton
                    variant="outline-secondary"
                    title="Categorias"
                    id="input-categorias"
                    align="end"
                >
                    <Dropdown.Item as={Button}>Sandwiches</Dropdown.Item>
                    <Dropdown.Item as={Button}>Pizzas</Dropdown.Item>
                    <Dropdown.Item as={Button}>Hamburguesas</Dropdown.Item>
                    <Dropdown.Item as={Button}>Postres</Dropdown.Item>
                </DropdownButton>
            </InputGroup>
        </Form>
    );
};

export default InputProductos;
