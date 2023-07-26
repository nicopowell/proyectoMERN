const URLProducto = import.meta.env.VITE_API_PRODUCTO;

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