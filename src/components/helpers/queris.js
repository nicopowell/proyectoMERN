const URLProducto = import.meta.env.VITE_API_PRODUCTO;
const URLUsuario = import.meta.env.VITE_API_USUARIO;
const URLPedidos = import.meta.env.VITE_API_PEDIDOS;

// PRODUCTO


export const consultaAgregarProducto = async (producto) =>{
    try{
        const respuesta = await fetch(URLProducto, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
            });
        return respuesta;
    }catch(error){
        console.log(error);
    }
}
export const consultaListaProductos = async () =>{
    try{
        const respuesta = await fetch(URLProducto);
        const listaProductos = await respuesta.json();
        return listaProductos;
    }catch(error){
        console.log(error);
    }
}

export const consultaBorrarProducto = async (id) =>{
    try{
        const respuesta = await fetch(`${URLProducto}/${id}`, {
            method: "DELETE"
        });
        return respuesta;
    }catch(error){
        console.log(error);
    }
}

// USUARIOS

export const consultaListaUsuarios = async () =>{
    try{
        const respuesta = await fetch(URLUsuario);
        const listaUsuarios = await respuesta.json();
        return listaUsuarios;
    }catch(error){
        console.log(error);
    }
}

// PEDIDOS

export const consultaListaPedidos = async () =>{
    try{
        const respuesta = await fetch(URLPedidos);
        const listaPedidos = await respuesta.json();
        return listaPedidos;
    }catch(error){
        console.log(error);
    }
}

