import React from 'react';
import { Row } from 'react-bootstrap';
import CardProducto from './CardProducto';

const GrillaProductos = () => {
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