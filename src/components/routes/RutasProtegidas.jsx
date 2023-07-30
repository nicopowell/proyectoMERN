import { Navigate } from "react-router-dom";
import Login from "../views/Login";

const RutasProtegidas = ({children}) => {
 const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuario')) || null;
 //preguntar si el usuario NO esta logueado
 if(!usuarioLogueado){
    return <Navigate to={<Login></Login>}></Navigate>
 }else{
    return children;
 }
};

export default RutasProtegidas;