import { Navigate } from "react-router-dom";
import PaginaPrincipal from "../views/PaginaPrincipal";

const RutasProtegidas = ({children}) => {
 const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuario')) || null;
 //preguntar si el usuario NO esta logueado
 if(!usuarioLogueado){
    return <Navigate to={<PaginaPrincipal></PaginaPrincipal>}></Navigate>
 }else{
    return children;
 }
};

export default RutasProtegidas;