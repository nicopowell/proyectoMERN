import { Routes, Route } from "react-router-dom";
import Administrador from "../views/Administrador";
import CrearProducto from "../views/productos/CrearProducto";
import EditarProducto from "../views/productos/EditarProducto";

const RutasAdministrador = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Administrador></Administrador>}></Route>
        <Route
          exact
          path="/crearProducto"
          element={<CrearProducto></CrearProducto>}
        ></Route>
        <Route
          exact
          path="/editarProducto/:id"
          element={<EditarProducto></EditarProducto>}
        ></Route>
        <Route
          exact
          path="/SobreNosotros"
          element={<h1>SobreNosotros</h1>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdministrador;
