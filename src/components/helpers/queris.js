import {v4 as uuidv4} from 'uuid';
const URLProducto = import.meta.env.VITE_API_PRODUCTO;
const URLUsuario = import.meta.env.VITE_API_USUARIO;
const URLPedidos = import.meta.env.VITE_API_PEDIDOS;

// PRODUCTO

export const consultaAgregarProducto = async (producto) => {
  try {
    const respuesta = await fetch(URLProducto, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
export const consultaListaProductos = async () => {
  try {
    const respuesta = await fetch(URLProducto);
    const listaProductos = await respuesta.json();
    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};

export const consultaProductoParaEditar = async (id) => {
  try {
    const respuesta = await fetch(URLProducto + "/" + id);
    const producto = await respuesta.json();
    return producto;
  } catch (error) {
    console.log(error);
  }
};

export const consultaEditarProducto = async (producto, id) => {
  try {
    const respuesta = await fetch(URLProducto + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const consultaBorrarProducto = async (id) => {
  try {
    const respuesta = await fetch(`${URLProducto}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

// USUARIOS

export const consultaListaUsuarios = async () => {
  try {
    const respuesta = await fetch(URLUsuario);
    const listaUsuarios = await respuesta.json();
    return listaUsuarios;
  } catch (error) {
    console.log(error);
  }
};

// PEDIDOS

export const consultaListaPedidos = async () => {
  try {
    const respuesta = await fetch(URLPedidos);
    const listaPedidos = await respuesta.json();
    return listaPedidos;
  } catch (error) {
    console.log(error);
  }
};

export const agregarPedido = async (carrito, total) => {
  let pedido = {};
  const fechaPedido = new Date();
  pedido.id = uuidv4();
  pedido.usuario = "Usuario Logueado"; //falta agregar logica para que registre el nombre del usuario logueado
  pedido.productos = carrito.map((producto) => ({
    id: producto.producto.id,
    producto: producto.producto.nombre, 
    cantidad: producto.cantidad, 
  }));
  pedido.estado = "Pendiente";
  pedido.total = total;
  pedido.fecha = fechaPedido;
  try {
    const pedidoNuevo = await fetch(URLPedidos, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pedido),
    });
    return pedidoNuevo;
  } catch (error) {
    console.log(error);
    return false;
  }
};
