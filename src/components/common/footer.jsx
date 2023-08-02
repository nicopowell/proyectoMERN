/* eslint-disable react/jsx-no-target-blank */
import './footer.css'
import { Facebook,Twitter,Instagram,Whatsapp } from 'react-bootstrap-icons';

const Footer = () => {

    return (
        <footer className="p-3 text-white text-center text-lg-start" id="foot">

            <section className='row'>
                <aside className='col-md-4 ps-lg-5 col-xs-12'>
                    <a href={'/'}>
                    <img src="../../src/assets/8.png" id="logoFooter" alt='logoFooter'></img>
                    </a>
                </aside>
                <aside className="col-md-4 text-md-center col-xs-12">
                    <h6>Paginas que puede visitar</h6>
                        <ul>
                            <li>
                             <a href={'/SobreNosotros'} className="fs-6">
                                    Sobre Nosotros
                                </a>
                            </li>
                            <li>
                                <a href={'*'}  className=" fs-6">
                                    Consultas
                                </a>
                            </li>
                            <li>
                                <a href={'*'}  className="fs-6">
                                    Política de Privacidad
                                </a>
                            </li>
                        </ul>
                </aside>
                <aside className="col-md-4 text-md-start col-xs-12">
                    <h6>Siguenos en nuestras redes sociales</h6>
                    <a href={'*'} className='bs-light mx-2' target='_blank'><Facebook></Facebook></a>
                    <a href={'*'} className='bs-light mx-2' target='_blank'><Twitter></Twitter></a>
                    <a href={'*'} className='bs-light mx-2' target='_blank'><Instagram></Instagram></a>
                    <a href={'*'} className='bs-light mx-2' target='_blank'><Whatsapp></Whatsapp></a>
                </aside>
            </section>
            <section className='text-light text-center'>
             <p>&copy; Todos los derechos reservados</p>
            </section>
        </footer>
        
        
    );
};
export default Footer;