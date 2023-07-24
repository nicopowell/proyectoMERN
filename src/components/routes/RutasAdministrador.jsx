import { Routes, Route } from "react-router-dom";
import SobreNosotros from "../views/SobreNosotros";

const RutasAdministrador = () => {
  return (
    <>
      <Routes>
           <Route
          exact
          path="/"
          element={<h1>Administrador</h1>}
        ></Route>
         <Route
          exact
          path="/SobreNosotros"
          element={<SobreNosotros></SobreNosotros>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdministrador;
