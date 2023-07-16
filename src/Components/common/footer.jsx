const Footer = () => {

    return (
        <footer className="p-3 mb-2 text-white text-center text-lg-start">
            <section className="row">
                <aside className="col-md-4 ps-lg-5 col-xs-12">

                </aside>
                <aside className="col-md-4 text-md-center col-xs-12">
                    <h6>Paginas que puede visitar</h6>
                        <ul>
                            <li>
                                <a href="./pages/acercaDeNosotros.html" className="color-texto fs-6">
                                    ¿Quienes Somos?
                                </a>
                            </li>
                            <li>
                                <a href="./pages/error404.html" className="color-texto fs-6">
                                    Consultas
                                </a>
                            </li>
                            <li>
                                <a href="./pages/error404.html" className="color-texto fs-6">
                                    Categorías
                                </a>
                            </li>
                            <li>
                                <a href="./pages/error404.html" className="color-texto fs-6">
                                    Política de Privacidad
                                </a>
                            </li>
                        </ul>
                </aside>
                <aside className="col-md-4 text-md-start col-xs-12">

                </aside>
            </section>
        </footer>
    );
};
export default Footer;