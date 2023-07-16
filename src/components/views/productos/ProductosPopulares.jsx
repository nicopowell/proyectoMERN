import React from 'react';
import CardProducto from './CardProducto';
import { Row } from 'react-bootstrap';

const ProductosPopulares = () => {
    return (
        <Row>
            <CardProducto></CardProducto>    
            <CardProducto></CardProducto>    
            <CardProducto></CardProducto>    
            <CardProducto></CardProducto>    
        </Row>
    );
};

export default ProductosPopulares;