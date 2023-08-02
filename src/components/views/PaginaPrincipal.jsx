import { Container } from "react-bootstrap";
import ProductosPopulares from "./productos/ProductosPopulares";
import GrillaProductos from "./productos/GrillaProductos";
import InputProductos from "./productos/InputProductos";
import { useState } from "react";

const PaginaPrincipal = ({carrito, agregarAlCarrito}) => {
    const [filter, setFilter] = useState("");
    const [categoria, setCategoria] = useState("");
    
    const handleAgregarAlCarrito = (producto => {
        agregarAlCarrito(producto);
    });

    const handleFilterChange = (value, categoriaSeleccionada) => {
        setFilter(value);
        setCategoria(categoriaSeleccionada);
    };
    return (
        <div className="mainSection">
            <img
                src="https://images.pexels.com/photos/8753672/pexels-photo-8753672.jpeg"
                alt="Banner con platos de comida"
                className="w-100"
                id="bannerIndex"
            />
            <section className="seccionInfoRestaurante text-light py-3 text-center mb-5">
                <img
                    src="../../src/assets/LogoConLemaNaranja.png"
                    alt="Logo del restaurante Rolling Bites"
                    id="logoIndex"
                />
                <p className="lead fw-semibold px-5 my-4">
                    ¡Bienvenido a Rolling Bites! Descubre sabores exquisitos con productos frescos y
                    de calidad superior. Nuestro equipo de chefs apasionados te espera para
                    brindarte una experiencia gastronómica inolvidable. ¡Ven y disfruta!
                </p>
            </section>
            <Container className="mb-5">
                <h3>Productos populares</h3>
                <Container>
                    <ProductosPopulares></ProductosPopulares>
                </Container>
                <h3 className="mt-5">Todos nuestros productos</h3>
                <Container>
                    <InputProductos
                        handleFilterChange={handleFilterChange}
                        handleCategoria={setCategoria}
                        categoriaSeleccionada={categoria}
                    />
                    <GrillaProductos filter={filter} categoriaSeleccionada={categoria} onAgregarAlCarrito={handleAgregarAlCarrito}></GrillaProductos>
                </Container>
            </Container>
        </div>
    );
};

export default PaginaPrincipal;