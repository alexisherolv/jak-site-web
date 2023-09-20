import React from "react";
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

    return (
        <>
            {/*<Slides imagen = {process.env.PUBLIC_URL + '/images/SLIDE7.png'} />*/}
            <section className="slide-contacto">
                <div className = "slide-2">
                    <img src={process.env.PUBLIC_URL + '/images/Banner.png'} className="img-fluid" alt="Responsive"/>
                    <div className ="text-img-contacto">
                        <h1>¿Tu idea es personalizada?</h1>
                        <p>Cuéntanos y la hacemos realidad</p>
                    </div>
                </div>
            </section>

            <div className="servicios-1">
                <div className="container">
                    <Row className="justify-content-center">
                        <Col className="col-sm-12 col-md-9 ">
                            <h1 className="quienes-somos-title">Ofrecemos Servicios</h1>
                            <p className="quienes-somos-parrafo">en el ERP JD Edwards XE, 8.xx, 9.0, 9.1 y 9.2, así como de desarrollo web los cuales son:</p>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className="servicios">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <Card className="services-card shadow p-3 mb-5 bg-white rounded">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/consultoria.png'} className = "zoom os-i" width="60" height="60" alt="..." />
                                    <h1 className="services-card-title">Consultoría JDE de la versión 7332 hasta la última versión Enterprise ONE 9,2</h1>
                                    <a className="buttons-link" href="mailto:contacto@gtcta.mx?&subject=Cotización Consultoría JDE&body=Por favor coloque sus datos AQUÍ" target="_blank">
                                        <p className="v-link zoom2">Cotizar <i className="fa fa-chevron-right"></i></p>
                                    </a>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card className="services-card shadow p-3 mb-5 bg-white rounded">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/frontend.png'} className = "zoom os-i" width="60" height="60" alt="..." />
                                    <h1 className="services-card-title">Desarrollo de Front-End utilizando tecnologías React.js / Html / Css / Javascript</h1>
                                    <a className="buttons-link" href="mailto:contacto@gtcta.mx?&subject=Cotización Desarrollo de Front-End&body=Por favor coloque sus datos AQUÍ" target="_blank">
                                        <p className="r-link zoom2">Cotizar <i className="fa fa-chevron-right"></i></p>
                                    </a>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card className="services-card shadow p-3 mb-5 bg-white rounded">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/backend.png'} className = "zoom os-i" width="60" height="60" alt="..." />
                                    <h1 className="services-card-title">Desarrollo de Back-End (REST API's) utilizando tecnologías Node.js / Javascript</h1>
                                    <a className="buttons-link" href="mailto:contacto@gtcta.mx?&subject=Cotización Desarrollo de Back-End&body=Por favor coloque sus datos AQUÍ" target="_blank">
                                        <p className="a-link zoom2">Cotizar <i className="fa fa-chevron-right"></i></p>
                                    </a>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <Card className="services-card shadow p-3 mb-5 bg-white rounded">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/basedatos.png'} className = "zoom os-i" width="60" height="60" alt="..." />
                                    <h1 className="services-card-title">Consultoría de base de datos SQL Server, Oracle y DB2.</h1>
                                    <a className="buttons-link" href="mailto:contacto@gtcta.mx?&subject=Cotización Consultoría de Base de Datos&body=Por favor coloque sus datos AQUÍ" target="_blank">
                                        <p className="v-link zoom2">Cotizar <i className="fa fa-chevron-right"></i></p>
                                    </a>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card className="services-card shadow p-3 mb-5 bg-white rounded">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/servidor.png'} className = "zoom os-i" width="60" height="60" alt="..." />
                                    <h1 className="services-card-title">Alojamiento de sitios web en servidores.</h1>
                                    <a className="buttons-link" href="mailto:contacto@gtcta.mx?&subject=Cotización Alojamiento de Sitios Web&body=Por favor coloque sus datos AQUÍ" target="_blank">
                                        <p className="r-link zoom2">Cotizar <i className="fa fa-chevron-right"></i></p>
                                    </a>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card className="services-card shadow p-3 mb-5 bg-white rounded">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/modulos.png'} className = "zoom os-i" width="60" height="60" alt="..." />
                                    <h1 className="services-card-title"> Solución de raíz de integridades entre módulos.</h1>
                                    <a className="buttons-link" href="mailto:contacto@gtcta.mx?&subject=Solución de Raíz de Integridades entre Módulos&body=Por favor coloque sus datos AQUÍ" target="_blank">
                                        <p className="a-link zoom2">Cotizar <i className="fa fa-chevron-right"></i></p>
                                    </a>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <Card className="services-card shadow p-3 mb-5 bg-white rounded">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/ssl.png'} className = "zoom os-i" width="60" height="60" alt="..." />
                                    <h1 className="services-card-title">Administración de dominios y certificados SSL.</h1>
                                    <a className="buttons-link" href="mailto:contacto@gtcta.mx?&subject=Cotización Administración de Dominios&body=Por favor coloque sus datos AQUÍ" target="_blank">
                                        <p className="v-link zoom2">Cotizar <i className="fa fa-chevron-right"></i></p>
                                    </a>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card className="services-card shadow p-3 mb-5 bg-white rounded">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/apps.png'} className = "zoom os-i" width="60" height="60" alt="..." />
                                    <h1 className="services-card-title">Desarrollo de aplicaciones móviles.</h1>
                                    <a className="buttons-link" href="mailto:contacto@gtcta.mx?&subject=Cotización Desarrollo de Aplicaciones Móviles&body=Por favor coloque sus datos AQUÍ" target="_blank">
                                        <p className="r-link zoom2">Cotizar <i className="fa fa-chevron-right"></i></p>
                                    </a>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card className="services-card shadow p-3 mb-5 bg-white rounded">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/business.png'} className = "zoom os-i" width="60" height="60" alt="..." />
                                    <h1 className="services-card-title">Business Intelligence.</h1>
                                    <a className="buttons-link" href="mailto:contacto@gtcta.mx?&subject=Cotización Business Intelligence&body=Por favor coloque sus datos AQUÍ" target="_blank">
                                        <p className="a-link-last zoom2">Cotizar <i className="fa fa-chevron-right"></i></p>
                                    </a>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services-1">
                <div className="container">
                    <Row className="justify-content-center">
                        <Col className="col-sm-12 col-md-9 ">
                            <h1>Creamos el sistema / aplicación que su empresa necesita</h1>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className="avance">
                <div className="container">
                    <div className="row">
                        <div className="col-sm a-izquierda">
                            <h1>Capacitación</h1>
                            <p>Ejecutamos capacitaciones de acuerdo con las necesidades y requerimientos de cada Empresa, haciendo mucho más amigable el proceso de adopción de los módulos a utilizar, mismos que van divididos en las siguientes modalidades:</p>
                            <div className="row c-row">
                                <div className="col-sm-2">
                                    <img src={process.env.PUBLIC_URL + '/images/capacitacion2.png'} className = "zoom os-i" width="60" height="60" alt="..." />
                                </div>
                                <div className="col-sm-10">
                                    <h4>Capacitación Estructurada</h4>
                                    <p className="c-parrafo">Con datos de prueba general y completa en cada uno de los módulos, estos normalmente se dan en empresas que inician con el sistema JDE, o proyectos de implementación.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-2">
                                    <img src={process.env.PUBLIC_URL + '/images/cliente.png'} className = "zoom os-i" width="60" height="60" alt="..." />
                                </div>
                                <div className="col-sm-10">
                                    <h4>Capacitación con Datos del Cliente</h4>
                                    <p className="c-parrafo">Consiste en capacitación completa en suites o módulos en particular adecuada a los datos y procesos ya existentes en los clientes.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-2">
                                    <img src={process.env.PUBLIC_URL + '/images/talleres.png'} className = "zoom os-i" width="60" height="60" alt="..." />
                                </div>
                                <div className="col-sm-10">
                                    <h4>Talleres</h4>
                                    <p className="c-parrafo">Capacitación a temas específicos de uso del sistema.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <img src={process.env.PUBLIC_URL + '/images/capacitacion3.png'} className="img-fluid rounded shadow" alt="..."/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="our-services">
                <div className="container">
                    <Row className="justify-content-center">
                        <Col className="col-sm-12 col-md-7 ">
                            <h1 className="our-services-title2">Programas Empresariales</h1>
                        </Col>
                    </Row>
                
                    <div className="row">
                        <div className="col-sm-4">
                            <Card className="services-card shadow p-3 mb-5 bg-white rounded">
                                <CardBody>
                                    <img src={process.env.PUBLIC_URL + '/images/impuestos.png'} className = "zoom os-i" width="60" height="60" alt="..." />
                                    <h1 className="services-card-title">Apoyamos en la automatización</h1>
                                    <p className="c-dots">del manejo de los impuestos y requerimientos fiscales de las autoridades tributarias en México y Centro América:</p>
                                    <p className="c-dots"><i className="fa fa-check-circle c-1"></i> Mantenimiento en JD Edwards</p>
                                    <p className="c-dots"><i className="fa fa-check-circle c-2"></i> Capacitación e Implementación de JD Edwards/ One World/ Enterprise One</p>
                                    <p className="c-dots"><i className="fa fa-check-circle c-3"></i> CFDI 4.0</p>
                                    <p className="c-dots"><i className="fa fa-check-circle c-1"></i> Migración al CFDI 4.0</p>
                                    <p className="c-dots"><i className="fa fa-check-circle c-2"></i> Carta Porte</p>
                                    <p className="c-dots"><i className="fa fa-check-circle c-3"></i> Migración del complemento de pago al CFDI 4.0</p>
                                    <p className="c-dots"><i className="fa fa-check-circle c-1"></i> Contabilidad electrónica</p>
                                    <p className="c-dots"><i className="fa fa-check-circle c-2"></i> Complemento de pago de envío</p>
                                    <p className="c-dots"><i className="fa fa-check-circle c-3"></i> Complemento de pago de recibo</p>
                                    <p className="c-dots"><i className="fa fa-check-circle c-1"></i> Conciliaciones Bancarias</p>
                                    <p className="c-dots"><i className="fa fa-check-circle c-2"></i> DIOT</p>
                                    <p className="c-dots"><i className="fa fa-check-circle c-3"></i> Artículo 69</p>
                                    <a className="buttons-link" href="mailto:contacto@gtcta.mx?&subject=Cotización Automatización de Requerimientos Fiscales&body=Por favor coloque sus datos AQUÍ" target="_blank">
                                        <p className="a-link zoom2">Cotizar <i className="fa fa-chevron-right"></i></p>
                                    </a>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-sm">
                            <div className="row">
                                <div className="col-sm">
                                    <Card className="services-card shadow p-3 mb-5 bg-white rounded">
                                        <CardBody>
                                            <img src={process.env.PUBLIC_URL + '/images/venta.png'} className = "zoom os-i" width="60" height="60" alt="..." />
                                            <h1 className="services-card-title">Desarrollos y soporte de sistemas de punto de venta que se conecten con el ERP.</h1>
                                            <a className="buttons-link" href="mailto:contacto@gtcta.mx?&subject=Cotización Desarrollo de Sistemas de Punto de Venta&body=Por favor coloque sus datos AQUÍ" target="_blank">
                                                <p className="r-link zoom2">Cotizar <i className="fa fa-chevron-right"></i></p>
                                            </a>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="col-sm">
                                    <Card className="services-card shadow p-3 mb-5 bg-white rounded">
                                        <CardBody>
                                            <img src={process.env.PUBLIC_URL + '/images/internet.png'} className = "zoom os-i" width="60" height="60" alt="..." />
                                            <h1 className="services-card-title">Desarrollamos accesos desde soluciones basadas en internet al ERP desarrolladas en .NET y C#.</h1>
                                            <a className="buttons-link" href="mailto:contacto@gtcta.mx?&subject=Cotización Desarrollo de Accesos Desde Soluciones Basadas en Internet al ERP&body=Por favor coloque sus datos AQUÍ" target="_blank">
                                                <p className="v-link zoom2">Cotizar <i className="fa fa-chevron-right"></i></p>
                                            </a>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    <Card className="services-card shadow p-3 mb-5 bg-white rounded">
                                        <CardBody>
                                            <img src={process.env.PUBLIC_URL + '/images/appmovil.png'} className = "zoom os-i" width="60" height="60" alt="..." />
                                            <h1 className="services-card-title">Desarrollamos a través de un socio de negocio sistemas gerenciales móviles.</h1>
                                            <a className="buttons-link" href="mailto:contacto@gtcta.mx?&subject=Cotización Desarrollo de Sistemas Gerenciales Móviles.&body=Por favor coloque sus datos AQUÍ" target="_blank">
                                                <p className="a-link zoom2">Cotizar <i className="fa fa-chevron-right"></i></p>
                                            </a>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="col-sm">
                                    <Card className="services-card shadow p-3 mb-5 bg-white rounded">
                                        <CardBody>
                                            <img src={process.env.PUBLIC_URL + '/images/contabilidad.png'} className = "zoom os-i" width="60" height="60" alt="..." />
                                            <h1 className="services-card-title">Apoyo en la definición de los modelos de uso de la contabilidad gubernamental.</h1>
                                            <a className="buttons-link" href="mailto:contacto@gtcta.mx?&subject=Cotización Contabilidad Gubernamental&body=Por favor coloque sus datos AQUÍ" target="_blank">
                                                <p className="r-link zoom2">Cotizar <i className="fa fa-chevron-right"></i></p>
                                            </a>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tecnologias">
                <Row className="justify-content-center">
                    <Col className="col-sm-12 col-md-9 ">
                        <h1 className="tecnologias-title">Tecnologías</h1>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="col-sm-12 col-md-10 ">
                        <Swiper
                            slidesPerView={5}
                            centeredSlides={true}
                            spaceBetween={30}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            /*pagination={{
                                clickable: true,
                            }}*/
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/jde.png'} className="img-fluid" alt="Responsive"/></SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/c.png'} className="img-fluid" alt="Responsive"/></SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/net.png'} className="img-fluid" alt="Responsive"/></SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/html.png'} className="img-fluid" alt="Responsive"/></SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/css.png'} className="img-fluid" alt="Responsive"/></SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/javascript.png'} className="img-fluid" alt="Responsive"/></SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/react.png'} className="img-fluid" alt="Responsive"/></SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/nodejs.png'} className="img-fluid" alt="Responsive"/></SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/sass.png'} className="img-fluid" alt="Responsive"/></SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/sqlserver.png'} className="img-fluid" alt="Responsive"/></SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/mongodb.png'} className="img-fluid" alt="Responsive"/></SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/bootstrap.png'} className="img-fluid" alt="Responsive"/></SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/android.png'} className="img-fluid" alt="Responsive"/></SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/ios.png'} className="img-fluid" alt="Responsive"/></SwiperSlide>
                            <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/invoiceone.png'} className="img-fluid" alt="Responsive"/></SwiperSlide>
                        </Swiper>
                    </Col>
                </Row>
            </div>

            <div className="container">
                <Row className="justify-content-center">
                    <Col className="col-sm-12 col-md-10 ">
                        <Card className="s-contact shadow p-3 mb-5 bg-white rounded">
                            <CardBody>
                                <div className="row">
                                    <div className="col-sm-9">
                                        <h1 className="s-contact-title">Contáctanos y recibe un presupuesto a tu medida</h1>
                                    </div>
                                    <div className="col-sm-3">
                                        <Button className="s-contact-button" onClick={() => {}}><i className="fa fa-phone"/> Contáctanos</Button>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>  
    );
}

export default Servicios;