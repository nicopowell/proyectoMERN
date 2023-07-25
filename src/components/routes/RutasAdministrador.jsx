import { Routes, Route } from "react-router-dom";

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
          element={<h1>SobreNosotros</h1>}
        ></Route> 
      </Routes>
    </>
  );
};

export default RutasAdministrador;
