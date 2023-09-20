import React from "react";

import {
    Button,
    Card,
    CardBody,
    Row,
    Col
} from "reactstrap";

function Conocenos() {

    return (
        <>
            <section className="slide-contacto">
                <div className = "slide-2">
                    <img src={process.env.PUBLIC_URL + '/images/Banner.png'} className="img-fluid" alt="Responsive"/>
                    <div className ="text-img-contacto">
                        <h1>Personas reales trabajando por esfuerzos reales</h1>
                    </div>
                </div>
            </section>

            <div className="container quienes-somos">
                <Row className="justify-content-center">
                    <Col className="col-sm-12 col-md-9 ">
                        <h1 className="quienes-somos-title">Sobre nosotros</h1>
                        <p className="quienes-somos-parrafo">Garantía Total en Consultoría Tecnológica Avanzada, S.A. de C.V. es una empresa 100% mexicana creada en febrero de 2014 con el objetivo de dar un excelente servicio en “Consultoría en Tecnologías de Información” Ofreciendo las mejores soluciones tecnológicas para incrementar la competitividad en las empresas y con esto obtener el mayor provecho brindando las herramientas que agilicen sus procesos, mediante soportes sólidos, avanzados y viables en sus mercados. En GTC fomentamos una cultura de trabajo en equipo en donde el esfuerzo y dedicación de nuestros colaboradores se orienta a brindar servicios con la más alta calidad para asegurar la satisfacción total de nuestros clientes.</p>
                    </Col>
                </Row>
            </div>

            <div className="su-fundacion">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <img src={process.env.PUBLIC_URL + '/images/somos2.png'} className="img-fluid rounded shadow" alt="..."/>
                        </div>
                        <div className="col-sm su-fundacion-derecha">
                            <h1 className="su-fundacion-title">Su Fundación</h1>
                            <p>La empresa es fundada con base en una profunda y amplia experiencia en el ERP JD Edwards, Dirección de Empresas, Definiciones de procesos y Sistemas empresariales en general. Los fundadores se enfocaron en las diversas metodologías de análisis de desarrollo para poder segmentar los retos que presentan las empresas y así poder ofrecer soluciones innovadoras, al paso de los años esta experiencia se visualiza con el excelente reconocimiento de los clientes que cuentan con este sistema en México, Centro América, Estados Unidos de América y Canadá, por lo que hemos tenido la oportunidad de participar en proyectos a nivel internacional; además de contar con una amplia experiencia en los sectores de la Iniciativa Privada y de Gobierno.</p>
                            <div className="row su-fundacion-rfc">
                                <div className="col-sm-12 col-md-2">
                                    <img src={process.env.PUBLIC_URL + '/images/favicon.png'} className = "zoom os-i" width="70" height="70" alt="..." />
                                </div>
                                <div className="col-sm-12 col-md-10">
                                    <p>Nuestra razón social es <strong>“Garantía Total en Consultoría Tecnológica Avanzada”</strong> pero nos comercializamos con las siglas que sobresalen en la misma que es <strong>“GTC”.</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <Card className="mision shadow p-3 mb-5 bg-white rounded">
                            <CardBody>
                                <h1 className="mision-vision-title">Misión JAK</h1>
                                <p className="mision-vision-parrafo">Generar soluciones profesionales de software y marketing que cubran las expectativas y generen un alto valor para nuestros clientes.</p>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-sm">
                        <Card className="vision shadow p-3 mb-5 bg-white rounded">
                            <CardBody>
                                <h1 className="mision-vision-title">Visión JAK</h1>
                                <p className="mision-vision-parrafo">Ser una empresa líder en el mercado de desarrollo de software y soliciones de marketing capitalizando ideas de cada uno de nuestros clientes con un alto grado de calidad.</p>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="container valores">
                <Row className="justify-content-center">
                    <Col className="col-sm-12 col-md-9 ">
                        <h1 className="valores-title">Nuestros Valores</h1>
                    </Col>
                </Row>
                <div className="row">
                    <div className="col-sm v-izquierda">
                        <h2><strong className="v-1">1. </strong>Responsabilidad y Honestidad</h2>
                        <p>Responsabilidad de ejecución en cada uno de los procesos de entrega tanto para los clientes como de forma interna, Honestidad con lo que se piensa, se siente, se dice y se hace para apreciar el compromiso, puntualidad, disciplina y cumplimiento en las labores asignadas.</p>
                        <h2><strong className="v-2">2. </strong>Humildad y Gratitud</h2>
                        <p>Dos valores muy importantes y necesarios en una empresa, la humildad en el ser humano para reconocer sus limitantes y actuar en el conocimiento de la superación, gratitud por lo que se tiene y no se tiene repercute en nuestro día a día</p>
                        <h2><strong className="v-3">3. </strong>Excelencia y Eficiencia.</h2>
                        <p>Excelencia es la búsqueda de diferentes metas que conduzcan a la máxima eficacia para obtener los mejores resultados, llegando a los más altos estándares de calidad, eficiencia es el reto que se puede presentar y que sirve para medir la capacidad de resolver y realizar un proceso con el mínimo de recursos posibles.</p>
                    </div>
                    <div className="col-sm">
                        <img src={process.env.PUBLIC_URL + '/images/somos3.png'} className="img-fluid rounded shadow" alt="..."/>
                    </div>
                </div>
            </div>

            <div className="brochure">
                <div className="container">
                    <Row className="justify-content-center">
                        <Col className="col-sm-12 col-md-9 ">
                            <h1>Ver <a href="http://129.159.99.152/WEB/Files/BrochureGTC.pdf" target="_blank">Brochure GTC</a> en PDF para imprimir</h1>
                        </Col>
                    </Row>
                </div>
            </div>
        </>  
    );
}

export default Conocenos;