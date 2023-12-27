import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';

import {
    Button,
    Card,
    CardBody,
    Row,
    Col
} from "reactstrap";

function Conocenos() {

    const [scrollY, setScrollY] = useState(0);
    const navigate = useNavigate();

    const [isVisible, setIsVisible] = useState(false);
    const imageRef = useRef(null);

    /*useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);*/

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
            <div className="frase-principal-conocenos fade-in-text" style={containerStyles}>
                <div className="row">
                    <div className="col-lg-7">
                        <h1 style={parallaxStyle}>Personas <em className="animated">reales<svg className="nectar-scribble squiggle-underline" viewBox="-347 -30.1947 694 96.19" preserveAspectRatio="none"><path style={{ animationDuration: "1.8s" }} d="M-335,54 C-335,54 -171,-58 -194,-3 C-217,52 -224.1199951171875,73.552001953125 -127,11 C-68,-27 -137,50 -33,42 C31.43899917602539,37.042999267578125 147.14700317382812,-29.308000564575195 335,2" stroke="#ffce59" pathLength="1" strokeWidth="8" fill="none"></path></svg></em></h1>
                        <p className="subtitle slide-up-text" style={parallaxStyle}>Trabajando por esfuerzos reales</p>
                    </div>
                    <div className="col-lg-4">
                        <p className="quien-es slide-up-text" style={parallaxStyle}>JAK es una empresa mexicana fundada en mayo de 2020 con el propósito de proporcionar servicios destacados en desarrollo web y marketing, ofreciendo soluciones tecnológicas de vanguardia para mejorar la competitividad empresarial y agilizar procesos. En JAK promovemos una cultura de trabajo en equipo, enfocándonos en la alta calidad de servicio y la satisfacción completa de nuestros clientes.</p>
                    </div>
                    <div className="col-lg-1">
                    </div>
                </div>
            </div>

            <div className="container su-fundacion">
                <div className="row">
                    <div className="col">
                        <img src={process.env.PUBLIC_URL + '/images/conocenos.png'} className="img-fluid" alt="..."/>
                    </div>
                    <div className="col-lg-6 su-fundacion-derecha">
                        <h1 className="su-fundacion-title">¿Qué nos define?</h1>
                        <p>En JAK nos define nuestra dedicación apasionada a la excelencia, nuestra cultura de trabajo en equipo, y nuestra constante búsqueda de ofrecer soluciones de vanguardia que marquen la pauta en el desarrollo web y el marketing. Estamos comprometidos a ir más allá de lo convencional, liderando el camino hacia un panorama digital innovador y exitoso.</p>
                        <div className="row su-fundacion-rfc">
                            <div className="col">
                                <img src={process.env.PUBLIC_URL + '/images/jak-favicon.png'} className = "zoom os-i" width="70" height="70" alt="..." />
                            </div>
                            <div className="col-lg-10">
                                <p>La filosofía de JAK es <strong>“Trabajar con pasión”</strong> porque creemos que la  <strong>dedicación y el entusiasmo </strong>son la fuerza impulsora detrás de la excelencia y la innovación en cada proyecto que emprendemos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="call-to-action-2">
                <div className="row">
                    <div className="col-lg-7 text">
                        <h1 className="title">Nuestro objetivo</h1>
                        <h2 className="subtitle">Satisfacer las necesidades únicas de nuestros clientes, brindando soluciones tecnológicas innovadoras y contribuyendo a su éxito en línea.</h2>
                        <Button className="button" onClick={handleClickContacto}>Contáctanos</Button>
                    </div>
                    <div className="col-lg-5 text-center">
                        <img className="img-desarrollo-web" src={process.env.PUBLIC_URL + '/images/conocenos-2.png'} width="500" alt="..." />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row mision-vision">
                    <div className="col-lg-6">
                        <div className="card mision shadow p-3 mb-5 rounded">
                            <CardBody>
                                <h1 className="mision-vision-title">Misión JAK</h1>
                                <p className="mision-vision-parrafo">Ofrecer soluciones de software y marketing de alta calidad que superen las expectativas de nuestros clientes y generen un valor excepcional.</p>
                            </CardBody>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card vision shadow p-3 mb-5 rounded">
                            <CardBody>
                                <h1 className="mision-vision-title">Visión JAK</h1>
                                <p className="mision-vision-parrafo">Ser líderes en el mercado de desarrollo de software y marketing, aprovechando las ideas de nuestros clientes para ofrecer soluciones de la más alta calidad.</p>
                            </CardBody>
                        </div>
                    </div>
                </div>
            </div>
        </>  
    );
}

export default Conocenos;