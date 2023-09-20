import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

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

    return (
       <div>
            <nav className = {navbarClasses.join(" ")}>
                <Link className="navbar-brand logo" aria-current="page" to="/">
                        <img src={process.env.PUBLIC_URL + '/images/logo-jak.png'} width="90" alt="JAK" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto ">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/conocenos">
                                Conócenos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/servicios">
                                Servicios
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/contactanos">
                                Contacto
                            </Link>
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