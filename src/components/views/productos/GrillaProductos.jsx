import React from 'react';
import { Row } from 'react-bootstrap';
import CardProducto from './CardProducto';

const GrillaProductos = ({onAgregarAlCarrito}) => {
    /* Aqui al agregar el read, hay que poner un prop que diga: onAgregarAlCarrito={onAgregarAlCarrito} */
    return (
        <Row>
            <CardProducto></CardProducto>    
            <CardProducto></CardProducto>    
            <CardProducto></CardProducto>    
            <CardProducto></CardProducto>   
            <CardProducto></CardProducto>    
            <CardProducto></CardProducto>    
            <CardProducto></CardProducto>    
            <CardProducto></CardProducto>  
        </Row>
    );
};
export default GrillaProductos;