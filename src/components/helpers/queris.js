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

export const consultaProductoParaEditar = async (id) =>{
    try{
        const respuesta = await fetch(URLProducto+'/'+id);
        const producto = await respuesta.json();
        return producto;
    }catch(error){
        console.log(error);
    }
}

export const consultaEditarProducto = async (producto, id) =>{
    try{
        const respuesta = await fetch(URLProducto+'/'+id, {
            method: "PUT",
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
// export const login = async(usuario)=>{
//     try{
//         const respuesta = await fetch(URLUsuario,{
//             method: "POST",
//             headers:{
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(usuario)
//         });
//         const datos = await respuesta.json();
//         return {
//             status: respuesta.status,
//             nombreUsuario: datos.nombreUsuario
//         }
       
//     }catch(error){
//         console.log(error)
//     }
// }
export const login = async(usuario)=>{
    try{
        const respuesta = await fetch(URLUsuario);
        const listaUsuarios = await respuesta.json();
        //buscar cual usuario tiene el mail
        const usuarioBuscado = listaUsuarios.find((itemUsuario)=> itemUsuario.email === usuario.email);
        if(usuarioBuscado){
            console.log('email encontrado');
            if(usuarioBuscado.password === usuario.password){
                return usuarioBuscado;
            }else{
                console.log('el password es incorrecto');
                return null;
            }
        }else{
            console.log('el email no existe');
            return null
        }       
    }catch(error){
        console.log(error)
    }
}
export const consultaListaUsuarios = async () =>{
    try{
        const respuesta = await fetch(URLUsuario);
        const listaUsuarios = await respuesta.json();
        return listaUsuarios;
    }catch(error){
        console.log(error);
    }
}
export const registrar = async (usuario) => {
    try{
        const respuesta = await fetch(URLUsuario, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
            });
        return respuesta;
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

