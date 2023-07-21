import "bootstrap/dist/css/bootstrap.min.css";
import PaginaPrincipal from "./components/views/PaginaPrincipal";
import "./App.css";
import "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuNavegacion from "./components/common/menuNavegacion";
import Footer from "./components/common/footer";
import RutasAdministrador from "./components/routes/RutasAdministrador";
import RutasProtegidas from "./components/routes/RutasProtegidas";

function App() {
    return (
        <>
            <BrowserRouter>
                <MenuNavegacion></MenuNavegacion>
                <Routes>
                    <Route exact path="/" element={<PaginaPrincipal></PaginaPrincipal>}></Route>
                    <Route exact path="/detalle" element={<h1>Detalle</h1>}></Route>
                    <Route exact path="/pedidos" element={<h1>Pedidos</h1>}></Route>
                    <Route exact path="/acerca-de-nosotros" element={<h1>Acerca de nosotros</h1>}></Route>
                    <Route
                        path="/administrador/*"
                        element={
                          <RutasProtegidas>
                                <RutasAdministrador></RutasAdministrador>
                            </RutasProtegidas>
                        }
                    ></Route>
                    <Route path="*" element={<h1>404</h1>}></Route> {/* 404 */}
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </>
    );
}

export default App;
