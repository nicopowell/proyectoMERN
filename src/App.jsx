import "bootstrap/dist/css/bootstrap.min.css";
import PaginaPrincipal from "./components/views/PaginaPrincipal";
import "./App.css";
import "react-bootstrap";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuNavegacion from "./components/common/menuNavegacion";
import Footer from "./components/common/footer";
import RutasAdministrador from "./components/routes/RutasAdministrador";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import SobreNosotros from "./components/views/SobreNosotros";
import Error404 from "./components/views/Error404";
import CarritoPedidos from "./components/views/CarritoPedidos";

function App() {
    const usuario = JSON.parse(sessionStorage.getItem('usuario')) || {}; 
    const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

    return (
        <>
            <BrowserRouter>
                <MenuNavegacion usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></MenuNavegacion>
                <Routes>
                    <Route exact path="/" element={<PaginaPrincipal></PaginaPrincipal>}></Route>
                    <Route exact path="/detalle" element={<h1>Detalle</h1>}></Route>
                    <Route exact path="/pedidos" element={<h1>Pedidos</h1>}></Route>
                    <Route exact path="/SobreNosotros" element={<SobreNosotros></SobreNosotros>}></Route>
                    <Route exact path="/CarritoPedidos" element={<CarritoPedidos></CarritoPedidos>}></Route>
                    <Route
                        path="/administrador/*"
                        element={
                          <RutasProtegidas>
                                <RutasAdministrador></RutasAdministrador>
                            </RutasProtegidas>
                        }
                    ></Route>
                    <Route path="*" element={<Error404></Error404>}></Route>
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </>
    );
}

export default App;
