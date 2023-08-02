import { Navigate } from "react-router-dom";

const RutasProtegidas = ({children}) => {
 const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuario')) || null;
 //preguntar si el usuario NO esta logueado
 console.log(usuarioLogueado)
 if(!usuarioLogueado || usuarioLogueado.perfil !== "Admin"){
    return <Navigate to={"/"}></Navigate>
 }else{
    return children;
 }
};

export default RutasProtegidas;