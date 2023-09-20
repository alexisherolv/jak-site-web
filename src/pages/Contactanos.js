import React, { useEffect, useState } from "react";

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

    return (
        <>
            {/*<Slides imagen = {process.env.PUBLIC_URL + '/images/SLIDE7.png'} />*/}
            <section className="slide-contacto">
                <div className = "slide-2">
                    <img src={process.env.PUBLIC_URL + '/images/Banner.png'} className="img-fluid" alt="Responsive"/>
                    <div className ="text-img-contacto">
                        <h1>Cuéntanos tu idea</h1>
                        <p>Será un placer leerte</p>
                    </div>
                </div>
            </section>

            <div className="contact-form">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <h1 className="contact-form-title">Contáctanos</h1>
                            <Form id="RegisterValidation">
                                <div className="row">
                                    <div className="col-sm">
                                        <FormGroup className={`has-label ${nombreState}`}>
                                            <label className="form-label">Nombre *</label>
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
                                            <label className="form-label">Apellido *</label>
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
                                        <FormGroup className={`has-label ${telefonoState}`}>
                                            <label className="form-label">Telefono *</label>
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
                                    <FormGroup className={`has-label ${messageState}`}>
                                            <label className="form-label">Mensaje *</label>
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
                            <Button className="azul-button" onClick={registerClick}>ENVIAR</Button>
                            <p className="error">
                                {messageEnvioError}
                            </p>
                            <p className="no-error">
                                {messageEnvioCorrect}
                            </p>
                        </div>
                        <div className="col-sm">
                            <img src={process.env.PUBLIC_URL + '/images/contacto-gtc.png'} className="img-fluid shadow  mb-5  rounded" alt="..." />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container contact-options">
                <div className="row">
                    <div className="col-sm text-center">
                        <Card className="card-options shadow p-3 mb-5 bg-white rounded">
                            <CardBody>
                                <img src={process.env.PUBLIC_URL + '/images/ubicacion.png'} className = "zoom os-i" width="70" height="70" alt="..." />
                                <h1 className="co-title">Dirección</h1>
                                <p className="co-parrafo"> <i className="fa fa-thumb-tack"/> Calle Cañito 80, San Diego Ocoyoacac, Miguel Hidalgo, C.P. 11290 CDMX</p>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-sm text-center">
                        <Card className="card-options shadow p-3 mb-5 bg-white rounded">
                            <CardBody>
                                <img src={process.env.PUBLIC_URL + '/images/correo.png'} className = "zoom os-i" width="70" height="70" alt="..." />
                                <h1 className="co-title">Correo Electrónico</h1>
                                <p className="co-parrafo-phone"> <i className="fa fa-envelope"/> contacto@jak.mx</p>
                                <p className="co-parrafo-phone"> <i className="fa fa-envelope"/> alberto@jak.mx</p>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-sm text-center">
                        <Card className="card-options shadow p-3 mb-5 bg-white rounded">
                            <CardBody>
                                <img src={process.env.PUBLIC_URL + '/images/phone.png'} className = "zoom os-i" width="70" height="70" alt="..." />
                                <h1 className="co-title">Teléfono</h1>
                                <p className="co-parrafo-phone"> <i className="fa fa-phone"/> 55 4565 3967</p>
                                <p className="co-parrafo-phone"> <i className="fa fa-phone"/> 55 4364 1006</p>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </>  
    );
}

export default Contactanos;