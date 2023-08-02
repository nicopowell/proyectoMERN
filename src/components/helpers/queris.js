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

export const consultaCambiarEstadoProducto = async (estado, id) => {
    try {
        const respuesta = await fetch(`${URLProducto}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(estado),
        });
        return respuesta;
    } catch (error) {
        console.log(error);
    }
};

export const login = async (usuario) => {
    try {
        const respuesta = await fetch(URLUsuario);
        const listaUsuarios = await respuesta.json();

        const usuarioBuscado = listaUsuarios.find(
            (itemUsuario) => itemUsuario.email === usuario.email
        );
        if (usuarioBuscado) {
            if (usuarioBuscado.contraseña === usuario.contraseña) {
                return usuarioBuscado;
            } else {
                return null;
            }
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
    }
};
export const consultaListaUsuarios = async () => {
    try {
        const respuesta = await fetch(URLUsuario);
        const listaUsuarios = await respuesta.json();
        return listaUsuarios;
    } catch (error) {
        console.log(error);
    }
};

export const registrar = async (usuario) => {
    try {
        const respuesta = await fetch(URLUsuario);
        const listaUsuarios = await respuesta.json();
        const usuarioExistente = listaUsuarios.find(
            (itemUsuario) =>
                itemUsuario.nombreUsuario === usuario.nombreUsuario ||
                itemUsuario.email === usuario.email
        );
        if (!usuarioExistente) {
            const respuesta = await fetch(URLUsuario, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(usuario),
            });
            return respuesta;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
    }
};

export const consultaCambiarEstadoUsuarios = async (estado, id) => {
    try {
        const respuesta = await fetch(`${URLUsuario}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(estado),
        });
        return respuesta;
    } catch (error) {
        console.log(error);
    }
};

export const consultaBorrarUsuario = async (id) => {
    try {
        const respuesta = await fetch(`${URLUsuario}/${id}`, {
            method: "DELETE",
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return null;
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

const mostrarFecha = (fecha) => {
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();
    return `${dia}/${mes}/${anio}`;
};

export const agregarPedido = async (carrito, total, usuarioLogueado) => {
    let pedido = {};
    const fechaPedido = new Date();
    pedido.usuario = usuarioLogueado.nombreUsuario;
    pedido.productos = carrito.map((producto) => ({
        id: producto.producto.id,
        producto: producto.producto.nombre,
        cantidad: producto.cantidad,
    }));
    pedido.estado = "Pendiente";
    pedido.total = total;
    pedido.fecha = mostrarFecha(fechaPedido);
    try {
        const pedidoNuevo = await fetch(URLPedidos, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(pedido),
        });
        return pedidoNuevo;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const consultaCambiarEstadoPedido = async (estado, id) => {
    try {
        const respuesta = await fetch(`${URLPedidos}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(estado),
        });
        return respuesta;
    } catch (error) {
        console.log(error);
    }
};

export const consultaBorrarPedido = async (id) => {
    try {
        const respuesta = await fetch(`${URLPedidos}/${id}`, {
            method: "DELETE",
        });
        return respuesta;
    } catch (error) {
        console.log(error);
        return null;
    }
};
