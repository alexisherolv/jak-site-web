import React from "react";

import {
    Row,
    Col,
    Button,
    Card
} from "reactstrap";

function Footer() {
    return(
        /*<div>
            <footer className="page-footer text-center">
                <div className="row align-items-center">
                    <div className="col">
                        <div className="footer-logo">
                            <img src={process.env.PUBLIC_URL + '/images/logo-jak-white.png'} width="90" alt="JAK" />
                        </div>
                    </div>
                    <div className="col-9">
                        <p className="footer-text">©  2023 – JAK. Todos los derechos reservados.</p>
                    </div>
                    <div className="col">
                        <p className="footer-text">hola@jak.mx</p>
                    </div>
                </div>
            </footer>
        </div>*/
        <Row className="page-footer">
            <Col xs="5">
                <h1 className="footer-text-frase">Reinventa tu negocio</h1>
                <Button className="button" onClick={() => {}}>Contáctanos</Button>
            </Col>
            <Col xs="2">
            </Col>
            <Col xs="3">
                <p className="footer-text-options">Saber más</p>
                <p className="footer-text-options">Nuestro blog</p>
                <p className="footer-text-options">Portfolio</p>
                <p className="footer-text-options">Política de privacidad</p>
            </Col>
            <Col xs="2">
                <p className="footer-text-options">Escríbenos</p>
                <p className="footer-text-options">contacto@jak.mx</p>
                <img src={process.env.PUBLIC_URL + '/images/f-fb.png'} className = "zoom os-i" width="55" height="55" alt="..." />
                <img src={process.env.PUBLIC_URL + '/images/f-ig.png'} className = "zoom os-i" width="55" height="55" alt="..." />
            </Col>
        </Row>
    );
}

export default Footer;