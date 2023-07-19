
import { Container } from "react-bootstrap";
import ProductosPopulares from "./productos/ProductosPopulares";
import GrillaProductos from "./productos/GrillaProductos";
import InputProductos from "./productos/InputProductos";

const PaginaPrincipal = () => {
    return (
        <>
            <img
                src="https://images.pexels.com/photos/8753672/pexels-photo-8753672.jpeg"
                alt="Banner con platos de comida"
                className="w-100"
                id="bannerIndex"
            />
            <section className="seccionInfoRestaurante text-light py-3 text-center mb-5">
                <h1>Nombre del restaurante</h1>
                <p>Informacion extra</p>
            </section>
            <Container>
                <h3>Productos populares</h3>
                <Container>
                    <ProductosPopulares></ProductosPopulares>
                </Container>
                <h3 className="mt-5">Todos nuestros productos</h3>
                <Container>
                    <InputProductos></InputProductos>
                    <GrillaProductos></GrillaProductos>
                </Container>
            </Container>
        </>
    );
};

export default PaginaPrincipal;
