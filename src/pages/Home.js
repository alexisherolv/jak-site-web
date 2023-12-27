import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';

import { Autoplay, Pagination, Navigation } from "swiper";

import {
    Row,
    Col,
    Button,
    Card
} from "reactstrap";

function Home() {
    const [scrollY, setScrollY] = useState(0);

    const [isVisible, setIsVisible] = useState(false);
    const imageRef = useRef(null);

    const navigate = useNavigate();

    const handleScroll = () => {
        if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const shouldBeVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (shouldBeVisible) {
            setIsVisible(true);
            window.removeEventListener('scroll', handleScroll);
        }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
            <div className="frase-principal fade-in-text" style={containerStyles}>
                <h1 style={parallaxStyle}>Digitaliza, optimiza y <em className="animated">crece<svg className="nectar-scribble squiggle-underline" viewBox="-347 -30.1947 694 96.19" preserveAspectRatio="none"><path style={{ animationDuration: "1.8s" }} d="M-335,54 C-335,54 -171,-58 -194,-3 C-217,52 -224.1199951171875,73.552001953125 -127,11 C-68,-27 -137,50 -33,42 C31.43899917602539,37.042999267578125 147.14700317382812,-29.308000564575195 335,2" stroke="#ffce59" pathLength="1" strokeWidth="8" fill="none"></path></svg></em></h1>
                <p className="subtitle slide-up-text" style={parallaxStyle}>Generamos soluciones profesionales de software y marketing que brindan un alto valor para nuestros clientes.</p>
            </div>
            
            <div className="container services-web">
                <div className="row">
                    <div className="col-lg-1">
                    </div>
                    <div className="col-lg-3 explicacion">
                        <h1 className="title">Servicios de programación web</h1>
                        <div className="separador"></div>
                        <h1 className="subtitle">Expertos en desarrollo web</h1>
                        <p className="parrafo">Nuestro equipo está formado por profesionales diversos con amplia experiencia en desarrollo web y diseño web, adaptándonos tanto a las necesidades de grandes corporaciones como de pequeñas empresas. Aplicamos nuestro talento en el ámbito digital de manera estratégica, teniendo en cuenta sus metas y presupuesto, para ofrecerle una propuesta de valor que impulsará el crecimiento de su negocio. Ya sea que desee crear un sitio web desde cero o mejorar o promocionar su sitio web existente, estamos aquí para asistirle en cada paso del camino.</p>
                        <Button className="button" onClick={handleClickContacto}>Más información</Button>
                    </div>
                    <div className="col-lg-7 items-desarrollo-web">
                        <Card className="card">
                            <div className="row card-item item-0">
                                <div className="col-lg-2">
                                    <img src={process.env.PUBLIC_URL + '/images/1.png'} className = "zoom os-i" width="80" height="80" alt="..." />
                                </div>
                                <div className="col-lg-10">
                                    <p className="card-title">Desarrollo Web</p>
                                    <p className="card-text">En nuestro enfoque de desarrollo web, creamos sitios personalizados aprovechando las tecnologías más avanzadas disponibles en el mercado (React, Bootstrap, HTML, CSS, JS).</p>
                                </div>
                            </div>
                            <div className="row card-item">
                                <div className="col item-1">
                                    <div className="row">
                                        <div className="col-lg-3">
                                         <img src={process.env.PUBLIC_URL + '/images/2.png'} className = "zoom os-i" width="80" height="80" alt="..." />
                                        </div>
                                        <div className="col">
                                            <p className="card-title">Ecommerce</p>
                                            <p className="card-text">Desde el diseño de tiendas en línea atractivas hasta la implementación de soluciones de comercio electrónico seguras y eficientes.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col item-2">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <img src={process.env.PUBLIC_URL + '/images/3.png'} className = "zoom os-i" width="80" height="80" alt="..." />
                                        </div>
                                        <div className="col">
                                            <p className="card-title">Desarrollo WordPress</p>
                                            <p className="card-text">Implementamos plataformas rápidas, flexibles, seguras y centradas en el usuario final, a través del CMS más popular.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row card-item">
                                <div className="col item-3">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <img src={process.env.PUBLIC_URL + '/images/5-1.png'} className = "zoom os-i" width="80" height="80" alt="..." />
                                        </div>
                                        <div className="col">
                                            <p className="card-title">Maquetación Web</p>
                                            <p className="card-text">Somos el equipo de expertos en desarrollo Frontend que puedes contar para llevar a cabo proyectos que demanden un nivel adicional de apoyo debido a su complejidad en el diseño.</p>
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="col item-4">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <img src={process.env.PUBLIC_URL + '/images/4.png'} className = "zoom os-i" width="80" height="80" alt="..." />
                                        </div>
                                        <div className="col">
                                            <p className="card-title">UIX/UI Diseño Web</p>
                                            <p className="card-text">Nuestro equipo trabaja en estrecha colaboración contigo para crear interfaces atractivas, intuitivas y centradas en el usuario.</p>
                                        </div>
                                    </div>
                                </div>*/}
                                <div className="col item-5">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <img src={process.env.PUBLIC_URL + '/images/5.png'} className = "zoom os-i" width="80" height="80" alt="..." />
                                        </div>
                                        <div className="col">
                                            <p className="card-title">Posicionamiento SEO</p>
                                            <p className="card-text">Amplia experiencia en el posicionamiento orgánico de  plataformas webs, sin penalizaciones. Posicionando webs de diferentes sectores.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<div className="row card-item">
                                <div className="col item-5">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <img src={process.env.PUBLIC_URL + '/images/5.png'} className = "zoom os-i" width="80" height="80" alt="..." />
                                        </div>
                                        <div className="col">
                                            <p className="card-title">Posicionamiento SEO</p>
                                            <p className="card-text">Amplia experiencia en el posicionamiento orgánico de  plataformas webs, sin penalizaciones. Posicionando webs de diferentes sectores.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col item-6">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <img src={process.env.PUBLIC_URL + '/images/6.png'} className = "zoom os-i" width="80" height="80" alt="..." />
                                        </div>
                                        <div className="col">
                                            <p className="card-title">Ciberseguridad</p>
                                            <p className="card-text">Implementación de políticas, controles y sistemas de seguridad tanto para entornos Web, como corporativos. Apoyados en importantes partners del sector.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>*/}
                        </Card>
                    </div>
                    <div className="col-lg-1">
                    </div>
                </div>
            </div>

            <div className="container how-to">
                <h1 className="title">¿Cómo trabajamos?</h1>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src={process.env.PUBLIC_URL + '/images/idea.png'} className = "zoom os-i" width="110" height="110" alt="..." />
                            </div>
                            <h1 className="item-title">1. Cliente comparte el sueño a digitalizar</h1>
                            <p className="item-description">El cliente comparte sus metas y aspiraciones, estableciendo una conexión cercana. Fomentamos un entorno colaborativo para expresar libremente ideas y expectativas.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <img src={process.env.PUBLIC_URL + '/images/estimacion.png'} className = "zoom os-i" width="110" height="110" alt="..." />
                            </div>
                            <h1 className="item-title">2. Compartimos estimaciones de costos y tiempos</h1>
                            <p className="item-description">Presentamos al cliente estimaciones detalladas de costos y tiempos, proporcionando transparencia en recursos y duración del proyecto. Buscamos la alineación y abordamos preguntas para establecer expectativas realistas.</p>
                        </div>
                    </div>
                    <div className={`col-lg-6 container-2 ${isVisible ? 'visible' : ''}`}>
                        <div
                            className="image"
                            ref={imageRef}
                            style={isVisible ? { animation: 'appear 2s forwards' } : {}}
                        ></div>
                    </div>
                    <div className="col-lg-3">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src={process.env.PUBLIC_URL + '/images/firma.png'} className = "zoom os-i" width="110" height="110" alt="..." />
                            </div>
                            <h1 className="item-title">3. Firma de contrato:</h1>
                            <p className="item-description">Formalizamos el compromiso mediante la firma de un contrato detallado que establece términos, entregables y condiciones. Esta etapa marca el inicio oficial de la colaboración.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <img src={process.env.PUBLIC_URL + '/images/creacion.png'} className = "zoom os-i" width="110" height="110" alt="..." />
                            </div>
                            <h1 className="item-title">4. Trabajamos en tu producto:</h1>
                            <p className="item-description">Iniciamos el desarrollo del producto digitalizado, manteniendo comunicación constante y proporcionando actualizaciones periódicas. Buscamos la retroalimentación continua para ajustar el producto según las expectativas del cliente.</p>
                        </div>
                    </div>
                </div>
                <div className="row dot-6">
                    <div className="col-lg-2">
                    </div>
                    <div className="col-lg-2">
                        <img src={process.env.PUBLIC_URL + '/images/entrega.png'} className = "zoom os-i" width="110" height="110" alt="..." />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="item-title">5. Entregamos tu sueño digital en un producto tangible:</h1>
                        <p className="item-description">Después de pruebas y refinamientos, entregamos el producto finalizado. Proporcionamos documentación completa y soporte para la implementación, marcando la culminación del proceso y convirtiendo el sueño del cliente en realidad funcional.</p>
                    </div>
                    <div className="col-lg-2">
                    </div>
                </div>
            </div>

            <div className="container services-web">
                <div className="row">
                    <div className="col-lg-1">
                    </div>
                    <div className="col-lg-3">
                        <h1 className="title">Otros servicios</h1>
                        <div className="separador"></div>
                        <h1 className="subtitle">Marketing digital</h1>
                        <p className="parrafo">Nuestra capacidad para desarrollar estrategias efectivas de marketing digital, que abarcan desde la optimización de motores de búsqueda (SEO) hasta la publicidad en redes sociales y la gestión de campañas de email marketing, nos permite ofrecer soluciones personalizadas que generan resultados tangibles y ayudan a las empresas a alcanzar sus objetivos en línea.</p>
                        <Button className="button" onClick={handleClickContacto}>Más información</Button>
                    </div>
                    <div className="col-lg-7">
                        <Card className="card">
                            <div className="row card-item item-0">
                                <div className="col-lg-2">
                                    <img src={process.env.PUBLIC_URL + '/images/8.png'} className = "zoom os-i" width="80" height="80" alt="..." />
                                </div>
                                <div className="col">
                                    <p className="card-title">Estrategías de Marketing Digital</p>
                                    <p className="card-text">Impulsamos tu presencia en línea y te ayudamos a alcanzar tus objetivos comerciales. Nuestro equipo de expertos en marketing digital está listo para diseñar estrategias personalizadas que maximicen tu visibilidad en la web y generen resultados significativos.</p>
                                </div>
                            </div>
                            <div className="row card-item">
                                <div className="col item-1">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <img src={process.env.PUBLIC_URL + '/images/9.png'} className = "zoom os-i" width="80" height="80" alt="..." />
                                        </div>
                                        <div className="col">
                                            <p className="card-title">Redes sociales</p>
                                            <p className="card-text">Nuestro equipo se encarga de construir y mantener una sólida presencia en las redes sociales para tu marca, conectándote de manera efectiva con tu audiencia y maximizando tu impacto en plataformas clave. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col item-2">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <img src={process.env.PUBLIC_URL + '/images/10.png'} className = "zoom os-i" width="80" height="80" alt="..." />
                                        </div>
                                        <div className="col">
                                            <p className="card-title">Creación de contenido</p>
                                            <p className="card-text">Desde videos cautivadores hasta imágenes de alta calidad y contenido interactivo, estamos aquí para dar vida a tu visión y conectar con tu audiencia de manera efectiva a través de diversos medios.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row card-item item-6">
                                <div className="col-lg-2">
                                    <img src={process.env.PUBLIC_URL + '/images/12.png'} className = "zoom os-i" width="80" height="80" alt="..." />
                                </div>
                                <div className="col">
                                    <p className="card-title">Branding</p>
                                    <p className="card-text">Te ayudamos a potenciar y fortalecer la identidad de tu marca, asegurando que destaque en un mercado competitivo y conecte de manera efectiva con tu audiencia.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <col className="col-lg-1">
                    </col>
                </div>
            </div>

            <div className="call-to-action">
                <div className="row">
                    <div className="col-lg-7 text">
                        <h1 className="title">¡Desarrollo Web a Medida!</h1>
                        <Button className="button" onClick={handleClickContacto}>Contáctanos</Button>
                    </div>
                    <div className="col-lg-5 text-center">
                        <img className="img-desarrollo-web" src={process.env.PUBLIC_URL + '/images/desarrollo-web.png'} width="500" alt="..." />
                    </div>
                </div>
            </div>
           
           <div className="container testimonials">
                <h1 className="title">¿Qué opinan nuestros clientes?</h1>
                <div className="row cards-testimonials">
                    <div className="col-lg-4">
                        <Card className="card">
                            <p className="comment">Trabajar con JAK ha sido una experiencia excepcional. Su enfoque personalizado y su atención a los detalles realmente destacaron en la creación de nuestro sitio web. Desde el diseño hasta la implementación, su equipo demostró un nivel excepcional de profesionalismo y habilidad técnica. Estamos extremadamente satisfechos con el resultado final y continuamos recibiendo elogios de nuestros clientes por la funcionalidad y estética de nuestro nuevo sitio. ¡Definitivamente recomendamos los servicios de JAK para soluciones web de alta calidad!</p>
                            <h1 className="card-title">Rebeca Sutton</h1>
                            <h4 className="description">CEO y Fundadora de Cardio & Sculpt</h4>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card className="card">
                            <p className="comment">JAK no solo cumplió, sino superó nuestras expectativas. Su capacidad para comprender nuestras necesidades únicas y traducirlas en soluciones tecnológicas innovadoras fue impresionante. Desde el desarrollo de nuestro sitio de comercio electrónico hasta la implementación de estrategias efectivas de marketing digital, su equipo demostró un compromiso excepcional. La atención al cliente durante todo el proceso fue sobresaliente, y el resultado final habla por sí mismo. Estamos encantados de haber elegido a JAK para impulsar nuestro negocio.</p>
                            <h1 className="card-title">Juan Rodríguez</h1>
                            <h4 className="description">Director Comercial de Couvrant MX</h4>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card className="card">
                            <p className="comment">La elección de JAK para el desarrollo de nuestro sitio web fue acertada desde el principio. Su equipo no solo posee un conjunto impresionante de habilidades técnicas, sino que también se distinguen por su enfoque centrado en el cliente. Nos guiaron a través de cada fase del proyecto, brindándonos información detallada y opciones flexibles. La comunicación abierta y transparente nos dio confianza en cada paso. El resultado final fue exactamente lo que necesitábamos: un sitio web funcional, atractivo y adaptado a nuestras necesidades específicas. ¡Fue una experiencia excepcional!</p>
                            <h1 className="card-title">Sofia Díaz</h1>
                            <h4 className="description">CEO y Fundadora de Sofia Diaz Producciones</h4>
                        </Card>
                    </div>
                </div>
           </div>

           <div className="container partners">
                <h1 className="title">Tecnologías utilizadas</h1>
                <div className="carrusel container">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        >
                        <SwiperSlide>
                            <img className="img" src={process.env.PUBLIC_URL + '/images/c-1.png'} alt="..." />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="img" src={process.env.PUBLIC_URL + '/images/c-2.png'} alt="..." />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="img" src={process.env.PUBLIC_URL + '/images/c-3.png'} alt="..." />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="img" src={process.env.PUBLIC_URL + '/images/c-4.png'} alt="..." />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="img" src={process.env.PUBLIC_URL + '/images/c-5.png'} alt="..." />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="img" src={process.env.PUBLIC_URL + '/images/c-6.png'} alt="..." />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="img" src={process.env.PUBLIC_URL + '/images/c-7.png'} alt="..." />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="img" src={process.env.PUBLIC_URL + '/images/c-8.png'} alt="..." />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="img" src={process.env.PUBLIC_URL + '/images/c-9.png'} alt="..." />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="img" src={process.env.PUBLIC_URL + '/images/c-10.png'} alt="..." />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="img" src={process.env.PUBLIC_URL + '/images/c-11.png'} alt="..." />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="img" src={process.env.PUBLIC_URL + '/images/c-12.png'} alt="..." />
                        </SwiperSlide>
                    </Swiper>
                </div>
           </div>

            <div className="moving-text-container">
                <p className="moving-text">Digitalizamos tus sueños</p>
                <p className="moving-text">Digitalizamos tus sueños</p>
                <p className="moving-text">Digitalizamos tus sueños</p>
                <p className="moving-text">Digitalizamos tus sueños</p>
                <p className="moving-text">Digitalizamos tus sueños</p>
            </div>
        </>  
    );
}

export default Home;