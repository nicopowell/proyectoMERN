const URLProducto = import.meta.env.VITE_API_PRODUCTO;
const URLUsuario = import.meta.env.VITE_API_USUARIO;

// PRODUCTO

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