import './footer.css'
import { Facebook,Twitter,Instagram,Whatsapp } from 'react-bootstrap-icons';

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
                                <a href="./views/SobreNosotros.jsx" className="fs-6">
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
                    <a href="" className='bs-light mx-2'><Facebook></Facebook></a>
                    <a href="" className='bs-light mx-2'><Twitter></Twitter></a>
                    <a href="" className='bs-light mx-2'><Instagram></Instagram></a>
                    <a href="" className='bs-light mx-2'><Whatsapp></Whatsapp></a>
                </aside>
            </section>
            <section className='text-light text-center'>
             <p>&copy; Todos los derechos reservados</p>
            </section>
        </footer>
        
        
    );
};
export default Footer;