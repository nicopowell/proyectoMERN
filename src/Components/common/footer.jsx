import './footer.css'
import { Facebook } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { Twitter } from 'react-bootstrap-icons';
import { Whatsapp } from 'react-bootstrap-icons';

const Footer = () => {

    return (
        <footer className="p-3 text-white text-center text-lg-start" id="foot">
            <section className="d-flex ">
                <aside className="col-md-4 ps-lg-5 col-xs-12">
                    <img src="" alt="" />
                </aside>
                <aside className="col-md-4 text-md-center col-xs-12">
                    <h6>Paginas que puede visitar</h6>
                        <ul>
                            <li>
                                <a href="./pages/acercaDeNosotros.html" className="fs-6">
                                    ¿Quienes Somos?
                                </a>
                            </li>
                            <li>
                                <a href="./pages/error404.html" className="fs-6">
                                    Consultas
                                </a>
                            </li>
                            <li>
                                <a href="./pages/error404.html" className="fs-6">
                                    Categorías
                                </a>
                            </li>
                            <li>
                                <a href="./pages/error404.html" className="fs-6">
                                    Política de Privacidad
                                </a>
                            </li>
                        </ul>
                </aside>
                <aside className="col-md-4 text-md-start col-xs-12">
                    <h6>Siguenos en nuestras redes sociales</h6>
                    <a href=""><Facebook/></a>
                    <a href=""><Twitter/></a>
                    <a href=""><Whatsapp/></a>
                    <a href=""><Instagram/></a>
                </aside>
            </section>
        </footer>
    );
};
export default Footer;