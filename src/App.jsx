import "bootstrap/dist/css/bootstrap.min.css";
import PaginaPrincipal from "./components/views/PaginaPrincipal";
import "./App.css";
import "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuNavegacion from "./components/common/menuNavegacion";
import Footer from "./components/common/footer";
import RutasAdministrador from "./components/routes/RutasAdministrador";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import SobreNosotros from "./components/views/SobreNosotros";
import Error404 from "./components/views/Error404";
import CarritoPedidos from "./components/views/CarritoPedidos";
import { useState, useEffect } from "react";

function App() {
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
        setCarrito(carritoGuardado);
      }, []);
    

    const agregarProductoAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
      };
    return (
        <>
            <BrowserRouter>
                <MenuNavegacion></MenuNavegacion>
                <Routes>
                    <Route exact path="/" element={<PaginaPrincipal agregarProductoAlCarrito={agregarProductoAlCarrito}></PaginaPrincipal>}></Route>
                    <Route exact path="/detalle" element={ <h1>Detalle</h1>}></Route>
                    <Route exact path="/pedidos" element={<CarritoPedidos carritoProp={carrito}></CarritoPedidos>}></Route>
                    <Route exact path="/acerca-de-nosotros" element={<h1>Acerca de nosotros</h1>}></Route>
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
