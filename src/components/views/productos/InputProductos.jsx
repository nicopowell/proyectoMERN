import React from "react";
import { Button, Dropdown, DropdownButton, Form, InputGroup } from "react-bootstrap";

const InputProductos = () => {
    return (
        <Form className="my-3">
            <InputGroup>
                <Form.Control type="text" placeholder="Buscar productos" maxLength={100} />
                <DropdownButton
                    className="btnInputCategoria"
                    title="Categorias"
                    id="input-categorias"
                    align="end"
                >
                    <Dropdown.Item as={Button} className="text-dark">Sandwiches</Dropdown.Item>
                    <Dropdown.Item as={Button} className="text-dark">Pizzas</Dropdown.Item>
                    <Dropdown.Item as={Button} className="text-dark">Hamburguesas</Dropdown.Item>
                    <Dropdown.Item as={Button} className="text-dark">Postres</Dropdown.Item>
                </DropdownButton>
            </InputGroup>
        </Form>
    );
};

export default InputProductos;
