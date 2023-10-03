const URLProducto = import.meta.env.VITE_API_PRODUCTO;
const URLUsuario = import.meta.env.VITE_API_USUARIO;
const URLPedidos = import.meta.env.VITE_API_PEDIDOS;
//Producto

export const consultaAgregarProducto = async (producto) => {
  try {
    const respuesta = await fetch(URLProducto, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("usuario")).token,
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
    const respuesta = await fetch(URLUsuario + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    const data = await respuesta.json();
    if (respuesta.ok) {
      return data;
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
    const respuestaListaUsuarios = await fetch(URLUsuario);
    const listaUsuarios = await respuestaListaUsuarios.json();
    const usuarioExistente = listaUsuarios.find(
      (itemUsuario) =>
        itemUsuario.nombreUsuario === usuario.nombreUsuario ||
        itemUsuario.email === usuario.email
    );
    if (!usuarioExistente) {
      const respuestaRegistro = await fetch(URLUsuario + "/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });
      const data = await respuestaRegistro.json();
      return data; // Devuelve la respuesta de registro, no la respuesta original
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
  const fechaPedido = new Date();
  let pedido = {
    productos: carrito.map((producto) => ({
      id: producto.producto._id,
      producto: producto.producto.nombre,
      cantidad: producto.cantidad,
    })),
    usuario: usuarioLogueado.nombreUsuario,
    estado: "Pendiente",
    total: total,
    fecha: mostrarFecha(fechaPedido),
  };
  try {
    const respuesta = await fetch(URLPedidos, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pedido),
    });
    return respuesta;
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
