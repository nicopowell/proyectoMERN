import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MenuNavegacion from "./components/common/menuNavegacion";
import Footer from "./components/common/footer";
import RutasAdministrador from "./components/routes/RutasAdministrador";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import PaginaPrincipal from "./components/views/PaginaPrincipal";
import SobreNosotros from "./components/views/SobreNosotros";
import Error404 from "./components/views/Error404";
import CarritoPedidos from "./components/views/CarritoPedidos";

function App() {
    const [carrito, setCarrito] = useState([]);
    const usuario = JSON.parse(sessionStorage.getItem("usuario"));
    const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

    const agregarAlCarrito = (producto) => {
        const carritoActualizado = [...carrito];
        const itemEnCarrito = carritoActualizado.find((item) => item.producto.id === producto.id);

        if (itemEnCarrito) {
            itemEnCarrito.cantidad += 1;
        } else {
            carritoActualizado.push({ producto, cantidad: 1 });
        }

        setCarrito(carritoActualizado);
    };

    return (
        <>
            <BrowserRouter>
                <MenuNavegacion
                    usuarioLogueado={usuarioLogueado}
                    setUsuarioLogueado={setUsuarioLogueado}
                ></MenuNavegacion>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <PaginaPrincipal
                                carrito={carrito}
                                agregarAlCarrito={agregarAlCarrito}
                            ></PaginaPrincipal>
                        }
                    ></Route>
                    <Route exact path="/detalle" element={<h1>Detalle</h1>}></Route>
                    <Route
                        exact
                        path="/pedidos"
                        element={
                            <CarritoPedidos
                                carrito={carrito}
                                setCarrito={setCarrito}
                                usuarioLogueado={usuarioLogueado}
                            ></CarritoPedidos>
                        }
                    ></Route>
                    <Route
                        exact
                        path="/SobreNosotros"
                        element={<SobreNosotros></SobreNosotros>}
                    ></Route>
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
