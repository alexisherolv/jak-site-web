import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 56 ){
          setScrolled(true);
        }
        else{
          setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    },[])

    let navbarClasses=["navbar", "fixed-top", "navbar-expand-lg", "navbar-dark"];
    if(scrolled){
        navbarClasses.push('scrolled');
    }

    const handleClickInicio = () => {
        // Utiliza history.push para navegar a la ruta deseada
        window.scrollTo(0, 0);
        navigate('/');
    };

    const handleClickConocenos = () => {
        // Utiliza history.push para navegar a la ruta deseada
        window.scrollTo(0, 0);
        navigate('/conocenos');
    };

    const handleClickServicios = () => {
        // Utiliza history.push para navegar a la ruta deseada
        window.scrollTo(0, 0);
        navigate('/servicios');
    };

    const handleClickContacto = () => {
        // Utiliza history.push para navegar a la ruta deseada
        window.scrollTo(0, 0);
        navigate('/contactanos');
    };

    return (
       <div>
            <nav className = {navbarClasses.join(" ")}>
                <div className="navbar-brand logo" onClick={handleClickInicio}>
                    <img src={process.env.PUBLIC_URL + '/images/logo-jak.png'} width="90" alt="JAK" />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto ">
                        <li className="nav-item">
                            <div className="nav-link" onClick={handleClickInicio}>
                                Inicio
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={handleClickConocenos}>
                                Conócenos
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={handleClickServicios}>
                                Servicios
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={handleClickContacto}>
                                Contacto
                            </div>
                        </li>
                    </ul>  
                    <div className="row actions2" >
                        <div className="col iconos">
                            <a href="" target="_blank">
                                <img src={process.env.PUBLIC_URL + '/images/facebook.png'} className = "zoom" width="30" height="30" alt="..." />
                            </a>
                        </div>
                        <div className="col iconos">
                            <a href="" target="_blank">
                                <img src={process.env.PUBLIC_URL + '/images/instagram.png'} className = "zoom" width="30" height="30" alt="..." />
                            </a>
                        </div>
                        <div className="col iconos">
                            <a href="mailto:contacto@jak.mx">
                                <img src={process.env.PUBLIC_URL + '/images/email.png'} className = "zoom" width="30" height="30" alt="..." />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;