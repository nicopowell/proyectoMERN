import React from 'react';
import { useState } from 'react';
import { Trash2 } from 'react-bootstrap-icons';

const ItemCarrito = () => {
    return (
        <>
            <tr>
<td>1</td>
<td>Pizza</td>
<td>$2500</td>
<td><Trash2></Trash2></td>

            </tr>
        </>
    );
};

export default ItemCarrito;