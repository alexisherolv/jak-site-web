import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import {
    Button,
    Card,
    CardBody,
    FormGroup,
    Form,
    Input,
} from "reactstrap";

import { send } from 'emailjs-com';

function Contactanos() {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [nombreState, setNombreState] = useState("");
    const [apellidoState, setApellidoState] = useState("");
    const [telefonoState, setTelefonoState] = useState("");
    const [emailState, setEmailState] = useState("");
    const [messageState, setMessageState] = useState("");

    const [messageEnvioError, setMessageEnvioError] = useState("");
    const [messageEnvioCorrect, setMessageEnvioCorrect] = useState("");

    //Para resetear el input file al enviar correo
    const [theInputKey, setTheInputKey] = useState("")

    const [scrollY, setScrollY] = useState(0);
    const navigate = useNavigate();

    // function that verifies if a string has a given length or not
    const verifyLength = (value, length) => {
        if (value.length >= length) {
        return true;
        }
        return false;
    };

    // function that returns true if value is email, false otherwise
    const verifyEmail = (value) => {
        var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRex.test(value)) {
        return true;
        }
        return false;
    };

    const isValidated = () => {
        if (
            nombreState === "has-success" &&
            apellidoState === "has-success" &&
            telefonoState === "has-success" &&
            emailState === "has-success" &&
            messageState === "has-success"
        ) {
          return true;
        } else {
          if (nombreState !== "has-success") {
            setNombreState("has-danger");
          }
          if (apellidoState !== "has-success") {
            setApellidoState("has-danger");
          }
          if (telefonoState !== "has-success") {
            setTelefonoState("has-danger");
          }
          if (emailState !== "has-success") {
            setEmailState("has-danger");
          }
          if (messageState !== "has-success") {
            setMessageState("has-danger");
          }
          return false;
        }
      };

    const registerClick = () => {
        
        if(isValidated()===true)
        {
           //haremos el fetch a la base de datos para agregar el registro
            const mensaje = "Teléfono: " + telefono + "\n" + "Mensaje: " + message
            const toSend = {
                from_name: nombre,
                to_name: "Contacto JAK",
                message: mensaje,
                reply_to: '',        
            }
            
            send(
                'service_nic4q4r',
                'template_38tyx6d',
                toSend,
                'aB31PMz2MH23GsjTe'
            )
            .then((response) => {
                setMessageEnvioCorrect("Envío realizado con éxito");
                resetFileInput();
                setTimeout(
                    () => {
                        setMessageEnvioCorrect("")
                    }
                , 5000);
            })
            .catch((err) => {
                setMessageEnvioError("Error de envío: " + err);
                resetFileInput();
                setTimeout(
                    () => {
                        setMessageEnvioError("")
                    }
                , 5000);
            });
        }
        else{
            console.log("no entre");
        }
    };

    function resetFileInput() {
        let randomString = Math.random().toString(36);
        setTheInputKey(randomString)
    }

    const parallaxStyle = {
        transform: `translateY(${scrollY * 0.5}px)`, // Ajusta el valor 0.5 según la velocidad deseada
    };

    const containerStyles = {
        overflow: 'hidden', // Oculta cualquier contenido que se desborde
    };

    useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClickContacto = () => {
        // Utiliza history.push para navegar a la ruta deseada
        window.scrollTo(0, 0);
        navigate('/contactanos');
    };

    return (
        <>
            <div className="contact-form">
                <div className="title fade-in-text">
                    <h1>¡Cuéntanos tu <em className="animated">idea<svg className="nectar-scribble squiggle-underline" viewBox="-347 -30.1947 694 96.19" preserveAspectRatio="none"><path style={{ animationDuration: "1.8s" }} d="M-335,54 C-335,54 -171,-58 -194,-3 C-217,52 -224.1199951171875,73.552001953125 -127,11 C-68,-27 -137,50 -33,42 C31.43899917602539,37.042999267578125 147.14700317382812,-29.308000564575195 335,2" stroke="#ffce59" pathLength="1" strokeWidth="8" fill="none"></path></svg></em>!</h1>
                    <p className="subtitle slide-up-text">Será un placer leerte</p>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 formulario">
                            <Form id="RegisterValidation">
                                <div className="row">
                                    <div className="col-sm">
                                        <FormGroup className={`has-label ${nombreState}`}>
                                            <label className="form-label">Cómo te gusta que te digamos *</label>
                                            <Input
                                                className="form-input"
                                                name="nombre"
                                                type="text"
                                                key={theInputKey || '' }
                                                autoComplete="off"
                                                onChange={(e) => {
                                                    if (!verifyLength(e.target.value, 1)) {
                                                        setNombreState("has-danger");
                                                    } else {
                                                        setNombreState("has-success");
                                                    }
                                                    setNombre(e.target.value);
                                                }}
                                            />
                                            {nombreState === "has-danger" ? (
                                                <label className="error">
                                                Este campo es requerido.
                                                </label>
                                            ) : null}
                                        </FormGroup>
                                    </div>
                                    <div className="col-sm">
                                        <FormGroup className={`has-label ${apellidoState}`}>
                                            <label className="form-label">Edad *</label>
                                            <Input
                                                className="form-input"
                                                name="apellido"
                                                type="text"
                                                key={theInputKey || '' }
                                                autoComplete="off"
                                                onChange={(e) => {
                                                    if (!verifyLength(e.target.value, 1)) {
                                                        setApellidoState("has-danger");
                                                    } else {
                                                        setApellidoState("has-success");
                                                    }
                                                    setApellido(e.target.value);
                                                }}
                                            />
                                            {apellidoState === "has-danger" ? (
                                                <label className="error">
                                                Este campo es requerido.
                                                </label>
                                            ) : null}
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm">
                                        <FormGroup className={`has-label ${emailState}`}>
                                            <label className="form-label">Email *</label>
                                            <Input
                                                className="form-input"
                                                name="apellido"
                                                type="text"
                                                key={theInputKey || '' }
                                                autoComplete="off"
                                                onChange={(e) => {
                                                    if (!verifyEmail(e.target.value)) {
                                                        setEmailState("has-danger");
                                                    } else {
                                                        setEmailState("has-success");
                                                    }
                                                    setEmail(e.target.value);
                                                }}
                                            />
                                            {emailState === "has-danger" ? (
                                                <label className="error">
                                                Este campo es requerido.
                                                </label>
                                            ) : null}
                                        </FormGroup>
                                    </div>
                                    <div className="col-sm">
                                        <FormGroup className={`has-label ${telefonoState}`}>
                                            <label className="form-label">Teléfono *</label>
                                            <Input
                                                className="form-input"
                                                name="nombre"
                                                type="text"
                                                key={theInputKey || '' }
                                                autoComplete="off"
                                                onChange={(e) => {
                                                    if (!verifyLength(e.target.value, 1)) {
                                                        setTelefonoState("has-danger");
                                                    } else {
                                                        setTelefonoState("has-success");
                                                    }
                                                    setTelefono(e.target.value);
                                                }}
                                            />
                                            {telefonoState === "has-danger" ? (
                                                <label className="error">
                                                Este campo es requerido.
                                                </label>
                                            ) : null}
                                        </FormGroup>
                                    </div>
                                    
                                    <FormGroup className={`has-label ${messageState}`}>
                                            <label className="form-label">Ahora cuéntanos cuál es la idea que te ayudaremos a hacer realidad *</label>
                                            <Input
                                                className="form-input"
                                                name="mensaje"
                                                type="textarea"
                                                key={theInputKey || '' }
                                                autoComplete="off"
                                                onChange={(e) => {
                                                    if (!verifyLength(e.target.value, 1)) {
                                                        setMessageState("has-danger");
                                                    } else {
                                                        setMessageState("has-success");
                                                    }
                                                    setMessage(e.target.value);
                                                }}
                                            />
                                            {messageState === "has-danger" ? (
                                                <label className="error">
                                                    Este campo es requerido.
                                                </label>
                                            ) : null}
                                    </FormGroup>
                                </div>
                            </Form>
                            <Button className="azul-button" onClick={registerClick}>Hagámoslo juntos</Button>
                            <p className="error">
                                {messageEnvioError}
                            </p>
                            <p className="no-error">
                                {messageEnvioCorrect}
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <img src={process.env.PUBLIC_URL + '/images/contacto.png'} className="img-fluid" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </>  
    );
}

export default Contactanos;