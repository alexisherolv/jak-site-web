import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { BrowserRouter as Router, useParams} from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import {
    Button,
    Card,
    CardBody,
    Row,
    Col
} from "reactstrap";

function Servicios() {
    const [scrollY, setScrollY] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const parallaxStyle = {
        transform: `translateY(${scrollY * 0.5}px)`, // Ajusta el valor 0.5 según la velocidad deseada
    };

    const containerStyles = {
        overflow: 'hidden', // Oculta cualquier contenido que se desborde
    };

    const handleClickContacto = () => {
        // Utiliza history.push para navegar a la ruta deseada
        window.scrollTo(0, 0);
        navigate('/contactanos');
    };

    return (
        <>
            <div className="frase-principal-servicios fade-in-text" style={containerStyles}>
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">
                        <h1 style={parallaxStyle}>Nuestros <em className="animated">servicios<svg className="nectar-scribble squiggle-underline" viewBox="-347 -30.1947 694 96.19" preserveAspectRatio="none"><path style={{ animationDuration: "1.8s" }} d="M-335,54 C-335,54 -171,-58 -194,-3 C-217,52 -224.1199951171875,73.552001953125 -127,11 C-68,-27 -137,50 -33,42 C31.43899917602539,37.042999267578125 147.14700317382812,-29.308000564575195 335,2" stroke="#ffce59" pathLength="1" strokeWidth="8" fill="none"></path></svg></em></h1>
                        <p className="quien-es slide-up-text" style={parallaxStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>

            <div className="servicios container">
                <div className="row">
                    <div className="col-lg-4">
                        <Card className="services-card shadow p-3 mb-5 bg-white rounded">
                            <div className="row">
                                <div className="col-lg-3">
                                    <img src={process.env.PUBLIC_URL + '/images/1.png'} className = "zoom os-i" width="80" height="80" alt="..." />
                                </div>
                                <div className="col-lg-9">
                                    <p className="card-title">Desarrollo Web</p>
                                    <p className="card-text">En nuestro enfoque de desarrollo web, creamos sitios personalizados aprovechando las tecnologías más avanzadas disponibles en el mercado.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card className="services-card shadow p-3 mb-5 bg-white rounded">
                            <div className="row">
                                <div className="col-lg-3">
                                    <img src={process.env.PUBLIC_URL + '/images/2.png'} className = "zoom os-i" width="80" height="80" alt="..." />
                                </div>
                                <div className="col-lg-9">
                                    <p className="card-title">Ecommerce</p>
                                    <p className="card-text">Desde el diseño de tiendas en línea atractivas hasta la implementación de soluciones de comercio electrónico seguras y eficientes.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card className="services-card shadow p-3 mb-5 bg-white rounded">
                            <div className="row">
                                <div className="col-lg-3">
                                    <img src={process.env.PUBLIC_URL + '/images/3.png'} className = "zoom os-i" width="80" height="80" alt="..." />
                                </div>
                                <div className="col-lg-9">
                                    <p className="card-title">Desarrollo WordPress</p>
                                    <p className="card-text">Implementamos plataformas rápidas, flexibles, seguras y centradas en el usuario final, a través del CMS más popular.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <Card className="services-card shadow p-3 mb-5 bg-white rounded">
                            <div className="row">
                                <div className="col-lg-3">
                                    <img src={process.env.PUBLIC_URL + '/images/4.png'} className = "zoom os-i" width="80" height="80" alt="..." />
                                </div>
                                <div className="col-lg-9">
                                    <p className="card-title">Maquetación Web</p>
                                    <p className="card-text">Somos el equipo de expertos en desarrollo Frontend que puedes contar para llevar a cabo proyectos que demanden un nivel adicional de apoyo debido a su complejidad en el diseño.</p>
                                </div>
                            </div>
                        </Card>
                    </div>  
                    <div className="col-lg-4">
                        <Card className="services-card shadow p-3 mb-5 bg-white rounded">
                            <div className="row">
                                <div className="col-lg-3">
                                    <img src={process.env.PUBLIC_URL + '/images/5-1.png'} className = "zoom os-i" width="80" height="80" alt="..." />
                                </div>
                                <div className="col-lg-9">
                                    <p className="card-title">UIX/UI Diseño Web</p>
                                    <p className="card-text">Nuestro equipo trabaja en estrecha colaboración contigo para crear interfaces atractivas, intuitivas y centradas en el usuario. Convertimos tus ideas en realidades digitales.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card className="services-card shadow p-3 mb-5 bg-white rounded">
                            <div className="row">
                                <div className="col-lg-3">
                                    <img src={process.env.PUBLIC_URL + '/images/5.png'} className = "zoom os-i" width="80" height="80" alt="..." />
                                </div>
                                <div className="col-lg-9">
                                    <p className="card-title">Posicionamiento SEO</p>
                                    <p className="card-text">Amplia experiencia en el posicionamiento orgánico de plataformas webs, sin penalizaciones. Posicionando webs de diferentes sectores.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <Card className="services-card shadow p-3 mb-5 bg-white rounded">
                            <div className="row">
                                <div className="col-lg-3">
                                    <img src={process.env.PUBLIC_URL + '/images/6.png'} className = "zoom os-i" width="80" height="80" alt="..." />
                                </div>
                                <div className="col-lg-9">
                                    <p className="card-title">Ciberseguridad</p>
                                    <p className="card-text">Implementación de políticas, controles y sistemas de seguridad tanto para entornos Web, como corporativos. Apoyados en importantes partners del sector.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card className="services-card shadow p-3 mb-5 bg-white rounded">
                            <div className="row">
                                <div className="col-lg-3">
                                    <img src={process.env.PUBLIC_URL + '/images/8.png'} className = "zoom os-i" width="80" height="80" alt="..." />
                                </div>
                                <div className="col-lg-9">
                                    <p className="card-title">Marketing Digital</p>
                                    <p className="card-text">Nuestro equipo de expertos en marketing digital está listo para diseñar estrategias personalizadas que maximicen tu visibilidad en la web y generen resultados significativos.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card className="services-card shadow p-3 mb-5 bg-white rounded">
                            <div className="row">
                                <div className="col-lg-3">
                                    <img src={process.env.PUBLIC_URL + '/images/9.png'} className = "zoom os-i" width="80" height="80" alt="..." />
                                </div>
                                <div className="col-lg-9">
                                    <p className="card-title">Redes sociales</p>
                                    <p className="card-text">Nuestro equipo se encarga de construir y mantener una sólida presencia en las redes sociales para tu marca, conectándote de manera efectiva con tu audiencia y maximizando tu impacto.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <Card className="services-card shadow p-3 mb-5 bg-white rounded">
                            <div className="row">
                                <div className="col-lg-3">
                                    <img src={process.env.PUBLIC_URL + '/images/10.png'} className = "zoom os-i" width="80" height="80" alt="..." />
                                </div>
                                <div className="col-lg-9">
                                    <p className="card-title">Creación de contenido</p>
                                    <p className="card-text">Desde videos cautivadores hasta imágenes de alta calidad y contenido interactivo, damos vida a tu visión y conectar con tu audiencia de manera efectiva a través de diversos medios.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card className="services-card shadow p-3 mb-5 bg-white rounded">
                            <div className="row">
                                <div className="col-lg-3">
                                    <img src={process.env.PUBLIC_URL + '/images/12.png'} className = "zoom os-i" width="80" height="80" alt="..." />
                                </div>
                                <div className="col-lg-9">
                                    <p className="card-title">Branding</p>
                                    <p className="card-text">Te ayudamos a potenciar y fortalecer la identidad de tu marca, asegurando que destaque en un mercado competitivo y conecte de manera efectiva con tu audiencia.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                    </div>
                </div>
            </div>

            <div className="container how-to-make">
                <div className="row">
                    <div className="col-lg-6">
                        <h1>¿Cómo lo hacemos?</h1>
                        <ul className="custom-list">
                            <li><strong>Entendimiento:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li><strong>Planeación:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li><strong>Implementación:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li><strong>Retrospectiva:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li><strong>Soporte:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">
                        <img src={process.env.PUBLIC_URL + '/images/servicios.png'} className="img-fluid" alt="..."/>
                    </div>
                </div>
            </div>

            <div className="why container">
                <h1>¿Por qué Elegir Nuestros Servicios de Desarrollo Web?</h1>
                <p className="subtitle">Los años de experiencia en el desarrollo de aplicaciones web hacen que nuestro equipo de soñadores y hacedores sea más competente y efectivo en la entrega de soluciones de vanguardia.</p>
                <div className="row">
                    <div className="col-md-6">
                        <Card className="why-card shadow p-3 mb-5 bg-white rounded">
                            <div className="row">
                                <div className="col-lg-3">
                                    <img src={process.env.PUBLIC_URL + '/images/17.png'} className = "zoom os-i" width="80" height="80" alt="..." />
                                </div>
                                <div className="col-lg-9">
                                    <p className="card-title">Pronta Personalización</p>
                                    <p className="card-text">Nuestros desarrolladores web experimentados proporcionan soluciones web de personalización sobre la marcha, ahorramos tiempo y entregamos un producto de calidad.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-6">
                        <Card className="why-card shadow p-3 mb-5 bg-white rounded">
                            <div className="row">
                                <div className="col-lg-3">
                                    <img src={process.env.PUBLIC_URL + '/images/18.png'} className = "zoom os-i" width="80" height="80" alt="..." />
                                </div>
                                <div className="col-lg-9">
                                    <p className="card-title">Equipo Calificado</p>
                                    <p className="card-text">Nuestros desarrolladores web experimentados proporcionan soluciones web de personalización sobre la marcha, ahorramos tiempo y entregamos un producto de calidad.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Card className="why-card shadow p-3 mb-5 bg-white rounded d-flex align-items-stretch">
                            <div className="row">
                                <div className="col-lg-3">
                                    <img src={process.env.PUBLIC_URL + '/images/19.png'} className = "zoom os-i" width="80" height="80" alt="..." />
                                </div>
                                <div className="col-lg-9">
                                    <p className="card-title">Solución Asequible</p>
                                    <p className="card-text">Nuestros desarrolladores web experimentados proporcionan soluciones web de personalización sobre la marcha, ahorramos tiempo y entregamos un producto de calidad.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-6">
                        <Card className="why-card shadow p-3 mb-5 bg-white rounded d-flex align-items-stretch">
                            <div className="row">
                                <div className="col-lg-3">
                                    <img src={process.env.PUBLIC_URL + '/images/20.png'} className = "zoom os-i" width="80" height="80" alt="..." />
                                </div>
                                <div className="col-lg-9">
                                    <p className="card-title">Diseño Perfecto</p>
                                    <p className="card-text">Nuestros desarrolladores web experimentados proporcionan soluciones web de personalización sobre la marcha, ahorramos tiempo y entregamos un producto de calidad.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div> 
        </>  
    );
}

export default Servicios;