
import './footer.css'
import { Facebook } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { Twitter } from 'react-bootstrap-icons';
import { Whatsapp } from 'react-bootstrap-icons';

const Footer = () => {

    return (
        <footer className="p-3 text-white text-center text-lg-start" id="foot">

            <section className='row'>
                <aside className='col-md-4 ps-lg-5 col-xs-12'>
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
                                <a href="./pages/error404.html" className=" fs-6">
                                    Consultas
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
                    <a href="" className='iconos mx-1'><Facebook/></a>
                    <a href="" className='iconos mx-1'><Twitter/></a>
                    <a href="" className='iconos mx-1'><Whatsapp/></a>
                    <a href="" className='iconos mx-1'><Instagram/></a>
                </aside>
            </section>
            <section className='text-light text-center'>
             <p>&copy; Todos los derechos reservados</p>
            </section>
        </footer>
    );
};
export default Footer;