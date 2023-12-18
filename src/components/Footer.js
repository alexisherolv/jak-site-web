import React from "react";
import { useNavigate } from 'react-router-dom';

import {
    Row,
    Col,
    Button,
    Card
} from "reactstrap";

function Footer() {
    const navigate = useNavigate();

    const handleClickContacto = () => {
        // Utiliza history.push para navegar a la ruta deseada
        window.scrollTo(0, 0);
        navigate('/contactanos');
    };

    return(
        <div className="row page-footer">
            <div className="col-lg-5">
                <h1 className="footer-text-frase">Reinventa tu negocio</h1>
                <Button className="button" onClick={handleClickContacto}>Contáctanos</Button>
            </div>
            <div className="col-lg-2">
            </div>
            <div className="col-lg-3">
                <p className="footer-text-options">Saber más</p>
                <p className="footer-text-options">Nuestro blog</p>
                <p className="footer-text-options">Portfolio</p>
                <p className="footer-text-options">Política de privacidad</p>
            </div>
            <div className="col-lg-2">
                <p className="footer-text-options">Escríbenos</p>
                <a href="mailto:contacto@jak.mx">
                    <p className="footer-text-options">contacto@jak.mx</p>
                </a>
                <a href="https://www.facebook.com/jaksoftwaremx">
                    <img src={process.env.PUBLIC_URL + '/images/f-fb.png'} className = "os-i" width="55" height="55" alt="..." />
                </a>
                <a href="https://www.instagram.com/jaksoftwaremx/">
                    <img src={process.env.PUBLIC_URL + '/images/f-ig.png'} className = "os-i" width="55" height="55" alt="..." />
                </a>
            </div>
        </div>
    );
}

export default Footer;